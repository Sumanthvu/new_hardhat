// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// import "node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarketPlace is ERC721URIStorage{
    //  using Counters for Counters.Counter;
    uint256 private _tokenIds;
    uint256 private _itemsSold;

    enum NFTCategory { Video, Artwork, GIF }

     address payable owner;
     uint256 listingPrice = 0.00001 ether;
     uint256 mintingPrice = 0.0000001 ether;

      struct MarketItem{
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
        NFTCategory category;
     }
     
     mapping (uint256 => MarketItem) private idMarketItem;
     mapping (uint256 => uint256) public NFTLikes;

     event MarketItemCreated(uint256 indexed tokenId,address seller,address owner,uint256 price,bool sold, NFTCategory category);
     event NFTLiked(uint256 indexed tokenId,address liker , uint256 newLikeCount);

     modifier onlyowner(){
        require(msg.sender==owner,"Only owner of the MarketPlace can change the listing price");
        _;
     }

     constructor () ERC721("NFT Metaverse Token","MYNFT"){
        owner = payable(msg.sender);
     }
 

    //ask how to make a button to directly like
    function likeNFT(uint256 tokenId) public{
       require(idMarketItem[tokenId].tokenId != 0,"NFT doest exist");
      NFTLikes[tokenId ]+= 1;

      emit NFTLiked(tokenId, msg.sender, NFTLikes[tokenId]);
    }

    function getNFTLikes(uint256 tokenId) public view returns (uint256){
        return NFTLikes[tokenId];
    }

    
    
    //basically who ever will mint their nfts in the site will also have to play some amount of fees
    //the fee is already declared in state variables and this function is just to incerase that value in case the owner
    //of the marketplace wishes to do so 
     function updateListingPrice(uint256 newlistingPrice) public payable onlyowner{
        listingPrice = newlistingPrice;
     }

     //to display the fee to the users
     function getListingPrice() public view returns(uint256){
        return listingPrice;
     }

    //function to create a NFT
    function createToken(string memory tokenURI,uint256 price,NFTCategory category) public payable returns(uint256){
       require(address(msg.sender).balance >=  mintingPrice, "Not enough ETH in your wallet!");
       require(msg.value == mintingPrice,"You must pay minting fee");
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        createMarketItem(newTokenId,price,category);
        payable(owner).transfer(msg.value);

        return newTokenId;
    }


    function createMarketItem(uint256 tokenID,uint256 price,NFTCategory category) private{
        require(price > 0, "Price cannot be zero");
        require(msg.value == listingPrice, "Fee must be equal to listing price");

        idMarketItem[tokenID] = MarketItem(
            tokenID,
            payable(msg.sender),
            payable(address(this)),
            price,
            false,
            category
        );

        _transfer(msg.sender, address(this), tokenID);

        emit MarketItemCreated(tokenID, msg.sender, address(this) , price, false,category);

    }

    //function to resell a NFT
    function resell(uint256 tokenId, uint256 price) public payable {
    require(idMarketItem[tokenId].owner == msg.sender, "Only the owner of the NFT can sell it");
    require(msg.value == listingPrice, "Fee must be equal to listing price");
    require(address(msg.sender).balance >= listingPrice, "Not enough ETH in your wallet!");

    idMarketItem[tokenId].price = price;
    idMarketItem[tokenId].sold = false;
    idMarketItem[tokenId].seller = payable(msg.sender);
    idMarketItem[tokenId].owner = payable(address(this));

    payable(owner).transfer(listingPrice);

    _itemsSold--;
    _transfer(msg.sender, address(this), tokenId);

    
}


    //function to create MarketSale
   function createMarketSale(uint256 tokenId) public payable {
    uint256 price = idMarketItem[tokenId].price;
    require(msg.value == price, "The given price is not equal to the price of the NFT");
    require(address(msg.sender).balance >= price + listingPrice, "Not enough ETH in your wallet!");

    idMarketItem[tokenId].owner = payable(msg.sender);
    idMarketItem[tokenId].sold = true;

    _itemsSold++;
    
    _transfer(address(this), msg.sender, tokenId);
    
    payable(owner).transfer(listingPrice);
    payable(idMarketItem[tokenId].seller).transfer(price);
}


    //getting unsold NFT's data
    function fetchMarketItems() public view returns(MarketItem[] memory){
        uint256 itemCount = _tokenIds;
        uint256 unSoldItemCount =  _tokenIds - _itemsSold;

        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);
        for(uint i = 0; i < itemCount ; i++){
            if(idMarketItem[i + 1].owner == address(this)){
                 uint256 currentId = i +1;
                 MarketItem storage currentItem = idMarketItem[currentId];
                 items[currentIndex] = currentItem ;
                 currentIndex += 1;
            }
        }
        return items;
    }

    //function to get all the NFTs owned by the user
    function fetchMyNFTs() public view returns (MarketItem[] memory){
        uint256 totalCount = _tokenIds;
        uint256 itemCount = 0;
        uint256 currentIndex = 0;
        for(uint256 i = 0; i < totalCount ; i++){
            if(idMarketItem[i + 1].owner == msg.sender){
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i = 0; i < totalCount ; i++){
           if(idMarketItem[i + 1].owner == msg.sender){
            uint256 currentId = i + 1;
            MarketItem storage currentItem = idMarketItem[currentId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
           }
        }
        return items;
    }

    //fetch all the nfts of a specific category in the marketplace
   function fetchMarketItems(NFTCategory category) public view returns (MarketItem[] memory) {
    uint256 itemCount = _tokenIds;
    uint256 categoryItemCount = 0;
    
    for (uint256 i = 0; i < itemCount; i++) {
        if (idMarketItem[i + 1].owner == address(this) && idMarketItem[i + 1].category == category) {
            categoryItemCount++;
        }
    }

    uint256 currentIndex = 0;
    MarketItem[] memory items = new MarketItem[](categoryItemCount);

    for (uint256 i = 0; i < itemCount; i++) {
        if (idMarketItem[i + 1].owner == address(this) && idMarketItem[i + 1].category == category) {
            uint256 currentId = i + 1;
            items[currentIndex] = idMarketItem[currentId];
            currentIndex++;
        }
    }

    return items;
}


    //fetch all the nfts owned by the user of a specific function
    function fetchNFTsByCategory(NFTCategory category) public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds;
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].category == category && idMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].category == category && idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

}