// SPDX-License-Identifier: MIT
// SPDX: Software Data Exchange MIT: Open Sourse
pragma solidity >=0.6.12 <0.9.0;
// version of compiler


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;
    mapping(uint256 tokenCounter=>string prompt) _promptDescription;

    constructor() ERC721("MyNFT", "MNFT") Ownable(msg.sender){
        tokenCounter = 0;
        
    }

    function MintNFT(address recipient, string memory tokenURI, string memory prompt) public onlyOwner {
        _safeMint(recipient, tokenCounter);
        _setTokenURI(tokenCounter, tokenURI);
        _promptDescription[tokenCounter]=prompt;
        tokenCounter++;
    }

    function promptDescription(uint256 tokenId) public view returns (string memory) {
        return _promptDescription[tokenId];
    }

    function viewNFT(uint256 tokenId) public view returns(string memory,string memory){
        return (tokenURI(tokenId),_promptDescription[tokenId]);
    }
}
