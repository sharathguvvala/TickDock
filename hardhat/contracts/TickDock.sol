//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract TickDock is ERC721URIStorage {
    constructor() ERC721("TickDock","TID") {

    }
    struct Event {
       uint256 price;
       address eventOwner;
       string name;
       string metadata;
       string description;
       uint256 eventId;
       uint256 totalTickets;
       uint256 ticketSold;
       address[] usersBought;
       bool active;
       uint256 balances;
    }
    struct NFT {
        uint256 eventId;
        address owner;
    }
    struct User {
        uint256[] eventsHosting;
        uint256[] ownedNFT;
        uint256[] eventIds;
    }
    mapping(address=>uint256) public ownerToEvent;
    mapping(uint256=>uint256) public nftToEvent;
    mapping(uint256=>NFT) public nftInfo;
    mapping(uint256=>Event) public eventMapping;
    mapping(address=>User) userMapping;
    uint256 public nftId;
    uint256 public eventCount;
    Event[] public events;
    function addEvent(uint256 _price, string memory _name, string memory _metadata, string memory _description, uint256 _totalTickets) public {
        Event memory eve = Event({price:_price, eventOwner:msg.sender, name:_name, metadata: _metadata, description:_description, eventId:eventCount, totalTickets:_totalTickets, ticketSold:0, usersBought: new address[](_totalTickets), active:true, balances:0});
        events.push(eve);
        eventMapping[eventCount] = eve;
        ownerToEvent[msg.sender] = eventCount;
        userMapping[msg.sender].eventsHosting.push(eventCount);
        eventCount++;
    }
    function buyTicket(uint256 eventId) public payable returns(uint256 tokenId) {
        require(eventMapping[eventId].totalTickets > eventMapping[eventId].ticketSold, "all tickets sold");
        require(eventMapping[eventId].active, "event is not available");
        require(msg.value >= eventMapping[eventId].price, "insufficient funds");
        uint count = eventMapping[eventId].ticketSold;
        eventMapping[eventId].usersBought[count] = msg.sender;
        eventMapping[eventId].balances += msg.value;
        eventMapping[eventId].ticketSold++;
        _mint(msg.sender,nftId);
        _setTokenURI(nftId, eventMapping[eventId].metadata);
        nftToEvent[nftId] = eventId;
        nftInfo[nftId].eventId = eventId;
        nftInfo[nftId].owner = msg.sender;
        userMapping[msg.sender].ownedNFT.push(nftId);
        userMapping[msg.sender].eventIds.push(eventId);
        nftId++;
        tokenId = nftId;
    }
    function withdraw(uint256 eventId) public {
        require(eventMapping[eventId].eventOwner == msg.sender, "not the owner");
        (bool success,) = (msg.sender).call{value:eventMapping[eventId].balances}("");
        require(success,"transaction faild");
    }
    function pauseSale(uint256 eventId, bool _pause) public {
        require(eventMapping[eventId].eventOwner == msg.sender, "not the owner");
        eventMapping[eventId].active = _pause;
    }
    receive() external payable{}
    fallback() external payable{}
}