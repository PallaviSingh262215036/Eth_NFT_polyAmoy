
const { ethers } = require("hardhat");
require("dotenv").config();
const fxPortal = require('../ERC721_FxPortal.json');

async function main() {

  const NFT_CONTRACT_ADDRESS = "0x61cf348f8f871e12631D61C0BDeE3959174BeE3F";
  const FX_PORTAL_ADDRESS = "0x9E688939Cb5d484e401933D850207D6750852053";
  const [deployer] = await ethers.getSigners();
  const WALLET_ADDRESS = deployer.address; // The address holding the NFTs

  
  // Wallet instance
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
   
  // FxPortal contract ABI
  const fxPortalAbi = fxPortal;

  // Create contract instances
  const nftContract= await ethers.getContractAt("MyNFT", NFT_CONTRACT_ADDRESS);
  const fxPortalContract = new ethers.Contract(FX_PORTAL_ADDRESS, fxPortalAbi, deployer);

  // IDs of the NFTs to be transferred
  const tokenIds = [ 0, 1, 2, 3, 4]; 

  for (let tokenId of tokenIds) {
    let approveTx = await nftContract.approve(FX_PORTAL_ADDRESS, tokenId);
    await approveTx.wait();
    console.log(`Approved tokenId ${tokenId} for transfer`);

    // Deposit the NFT to the FxPortal bridge
    let depositTx = await fxPortalContract.deposit(NFT_CONTRACT_ADDRESS, WALLET_ADDRESS, tokenId,"0x6556",{gasLimit: 300000,}); // Set a higher gas limit);
    await depositTx.wait();
    console.log(`Deposited tokenId ${tokenId} to FxPortal Bridge`);
  }

  console.log("All NFTs have been transferred to the FxPortal Bridge.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
