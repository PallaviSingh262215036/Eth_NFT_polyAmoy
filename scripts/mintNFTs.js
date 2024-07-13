async function main() {
    const [deployer] = await ethers.getSigners();
    const myNFT = await ethers.getContractAt("MyNFT", "0x61cf348f8f871e12631D61C0BDeE3959174BeE3F");
  
    const ipfsHashes = [
        "https://apricot-generous-woodpecker-295.mypinata.cloud/ipfs/QmRq6sZtaZy7W1snGJnWTaYJrdPUEmkXTe8hF7ctKVF9gD",
        "https://apricot-generous-woodpecker-295.mypinata.cloud/ipfs/QmVgmamD5VP1F7xUpLA1zmv3ZJ4GfYvGtdtfQGBXCex35u",
        "https://apricot-generous-woodpecker-295.mypinata.cloud/ipfs/QmYgL1XDHUzfaT2PnMDhFdohzHQFVhrkuuCdtnSdxeeGMy",
        "https://apricot-generous-woodpecker-295.mypinata.cloud/ipfs/QmY6o1dnvsdKm9d8zu5bkgKNVmKc3JuyCFAHAkX3kmEuKG",
        "https://apricot-generous-woodpecker-295.mypinata.cloud/ipfs/QmXqyxj1zKgBChtoUCeARQLB7ttNR7B2ynTFpdHPzKVjaz"
    ];

    const prompts=[
     "Imagine a futuristic cityscape where nature and technology coexist seamlessly. Tall skyscrapers are covered in vibrant greenery, blending with advanced holographic displays projecting images of mythical creatures. Flying cars zoom overhead, powered by renewable energy sources, while robotic animals roam freely on lush, green streets. This city is a vision of harmony between nature and technology, where every element serves to enhance the environment and quality of life",
     "Imagine a tree of life that spans across realms, its roots delving deep into the soil of ancient wisdom and its branches reaching towards the stars of infinite possibilities",
     "In a world where time flows backwards, imagine a surreal landscape where ancient ruins float in the sky, held aloft by shimmering threads of light",
     "At the heart of this scene, envision a solitary figure meditating under the Bodhi tree, bathed in the gentle glow of enlightenment",
     "In a realm where music takes physical form, envision a symphony of colors and shapes cascading across an endless expanse of celestial canvas"
    ]

    const recipient =deployer.address; 

    for (let i=0;i<ipfsHashes.length;i++) {
        let tx = await myNFT.MintNFT(recipient,ipfsHashes[i],prompts[i]);
        await tx.wait();
        console.log(`Minted NFT with URI: ${ipfsHashes[i]}`);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
