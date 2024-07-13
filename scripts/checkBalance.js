const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer] = await ethers.getSigners();
  const CONTRACT_ADDRESS_Polygon = "0x039ceF3559aE5f2c79CBBaaEA1c2Ce27d5f25cA9";
  const WALLET_ADDRESS = deployer.address;
  
  
  const nftContract= await ethers.getContractAt("MyNFT", CONTRACT_ADDRESS_Polygon);

  const balance = await nftContract.balanceOf(WALLET_ADDRESS);
  console.log(`Balance of NFTs for address ${WALLET_ADDRESS}:`, balance.toString());
  
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
