# MyNFT Project

This repository contains the code for the MyNFT project, an Ethereum-based NFT collection, that is also bridged to the Polygon network using FxPortal. The project includes functionalities to deploy the NFT contract, mint NFTs, transfer NFTs to Polygon, and check the NFT balance on the Polygon network.

## Prerequisites

- Node.js
- Hardhat
- Metamask wallet
- An Ethereum account with sufficient funds for gas fees

## Project Structure

- `contracts/MyNFT.sol`: Solidity smart contract for MyNFT.
- `scripts/deploy.js`: Script to deploy the MyNFT contract.
- `scripts/mintNFTs.js`: Script to mint NFTs.
- `scripts/transferNFT.js`: Script to transfer NFTs from Ethereum to Polygon.
- `scripts/checkBalance.js`: Script to check the balance of NFTs on Polygon.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/MyNFT.git
    cd MyNFT
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    PRIVATE_KEY=your-private-key
    INFURA_PROJECT_ID=your-infura-project-id
    ```

## Deployment

1. Compile the smart contract:
    ```bash
    npx hardhat compile
    ```

2. Deploy the smart contract to the Ethereum network:
    ```bash
    npx hardhat run scripts/deploy.js --network your-network
    ```

## Minting NFTs

1. Update the `mintNFTs.js` script with the correct contract address and IPFS URIs for your NFTs.
2. Run the script to mint the NFTs:
    ```bash
    npx hardhat run scripts/mintNFTs.js --network your-network
    ```

## Transferring NFTs to Polygon

1. Update the `transferNFT.js` script with the correct contract addresses and token IDs.
2. Run the script to transfer the NFTs:
    ```bash
    npx hardhat run scripts/transferNFT.js --network your-network
    ```

## Checking NFT Balance on Polygon

1. Update the `checkBalance.js` script with the correct contract address.
2. Run the script to check the balance of NFTs:
    ```bash
    npx hardhat run scripts/checkBalance.js --network polygon-network
    ```

## Smart Contract: MyNFT.sol

- Implements the ERC721 standard for creating NFTs.
- Uses OpenZeppelin's ERC721URIStorage and Ownable extensions.
- Includes a `MintNFT` function to mint NFTs with metadata and a prompt.
- Provides view functions `promptDescription` and `viewNFT` to retrieve NFT details.

## Deployment Script: deploy.js

- Deploys the `MyNFT` contract to the specified network.
- Logs the contract address upon successful deployment.

## Minting NFTs Script: mintNFTs.js

- Mints NFTs using the `MintNFT` function of the deployed `MyNFT` contract.
- Uses IPFS URIs for storing the NFT metadata.
- Includes descriptive prompts for each NFT.

## Transferring NFTs to Polygon Script: transferNFT.js

- Approves and deposits NFTs to the FxPortal bridge.
- Uses the `approve` and `deposit` functions to transfer NFTs from Ethereum to Polygon.

## Checking NFT Balance Script: checkBalance.js

- Checks and logs the balance of NFTs for a specified wallet address on the Polygon network.
- Utilizes the `balanceOf` function of the deployed `MyNFT` contract on Polygon.
