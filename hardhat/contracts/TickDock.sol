//SPDX-License-Identifier: MIT
pragma solidity 0.8.14;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract TicketsOnChain is ERC721URIStorage {
     constructor() ERC721("eventTicket","CEFT") public{

    } 
  struct Event{
      uint priceInEth;
      address ownerAddress;
      string metadata;
      string name;
      address[] checkedInUsers;
      mapping(address => bool) issuedAddressCheck;
      address[] issuedAddresses;
      bool active;
      uint eth;
      uint ticketsIssued;
      string description;
      uint eventId;
      uint checkInCount;
  }
  struct NFT{
    uint eventId;
    address owner;
  }
  struct User{
      uint[] hosting;
      uint[] owned;
      uint[] events;
      mapping(uint=>bool) checkedIn;
      mapping(uint =>bool) notCheckedIn;
  }
  mapping (address => uint) public ownerToEvent;
  uint public nftId;
  mapping(uint=>uint) public nftToEvent;// this shows which event has is represented by this token, for back tracking
  mapping(uint=>NFT) public nftInformation;// gives nft info 
  uint public eventCount;
  mapping(uint => Event) public eventMapping;
  mapping(address=>User)  userMapping;
  Event[] public events;
  function createEvent(uint _priceEth,string memory _metadata, string memory _name, string memory _description,uint noOfTickets) public {
    events.push(Event({priceInEth:_priceEth,
        metadata:_metadata,
        name:_name,
        ownerAddress:msg.sender, 
        active:true,
        issuedAddresses :new address[](noOfTickets),
        checkedInUsers : new address[](noOfTickets),
        eth:0,
        checkInCount:0,
        ticketsIssued:0,
        description :_description,
        eventId:eventCount}));
    // Event({
    //     priceInEth:_priceEth,
    //     metadata:_metadata,
    //     name:_name,
    //     ownerAddress:msg.sender, 
    //     active:true,
    //     issuedAddresses :new address[](noOfTickets),
    //     checkedInUsers : new address[](noOfTickets),
    //     eth:0,
    //     checkInCount:0,
    //     ticketsIssued:0,
    //     description :_description,
    //     eventId:eventCount
    // });
    ownerToEvent[msg.sender]=eventCount;
    userMapping[msg.sender].hosting.push(eventCount);
    //eventMapping[eventCount]=obj;
    eventCount++;
  }
  function turnEventOff(uint eventId) public  {
      require(eventMapping[eventId].ownerAddress ==msg.sender,"you cant call this function");
      eventMapping[eventId].active = false;
  }
  function checkInList(uint _id) public view returns(address[] memory attendees, uint _totalTickets, string memory name , uint totalCheckin){
      attendees = eventMapping[_id].checkedInUsers;
      _totalTickets= eventMapping[_id].ticketsIssued;
      name = eventMapping[_id].name;
      totalCheckin = eventMapping[_id].checkInCount;
  }
  function buyTicketsEth(uint eventId) public payable   returns(uint tokenId){
    require(eventMapping[eventId].ticketsIssued<eventMapping[eventId].issuedAddresses.length,"All tickets sold");
    require(msg.value>=eventMapping[eventId].priceInEth,"Insufficient value send");
    require(eventMapping[eventId].active ==true,"Event not available anymore");
    require(eventMapping[eventId].issuedAddressCheck[msg.sender]==false,"Ticket has been already bought with this address");
    uint  count = eventMapping[eventId].ticketsIssued;
    eventMapping[eventId].issuedAddressCheck[msg.sender]= true;
    eventMapping[eventId].issuedAddresses[count]= msg.sender;
    eventMapping[eventId].eth=eventMapping[eventId].eth+msg.value;
    eventMapping[eventId].ticketsIssued++;
    _mint(msg.sender, nftId);
    _setTokenURI(nftId, eventMapping[eventId].metadata);
    nftToEvent[nftId]=eventId;
    nftInformation[nftId].eventId=eventId;
    nftInformation[nftId].owner= msg.sender;
    userMapping[msg.sender].owned.push(nftId);
    userMapping[msg.sender].events.push(eventId);
    userMapping[msg.sender].notCheckedIn[eventId]= true;
    nftId++;
    tokenId = nftId;
  }
  function sales(uint _id) public view returns(address[] memory attendees, uint _totalTickets, string memory name , uint totalCheckin, address[] memory alltickets){
      attendees = eventMapping[_id].checkedInUsers;
      _totalTickets= eventMapping[_id].ticketsIssued;
      name = eventMapping[_id].name;
      totalCheckin = eventMapping[_id].checkInCount;
      alltickets = eventMapping[_id].issuedAddresses;
  }
 function checkIn(uint eventId)public returns(bool status){
   //  require(eventMapping[eventId].ownerAddress==msg.sender,"You are not authorized to do this");
     require(userMapping[msg.sender].notCheckedIn[eventId] == true,"You have already checked in");
     require(userMapping[msg.sender].checkedIn[eventId] != true, "You have already checkedIn");
     uint count = eventMapping[eventId].checkInCount;
     eventMapping[eventId].checkedInUsers[count]=msg.sender;
     userMapping[msg.sender].checkedIn[eventId]= true;
     userMapping[msg.sender].notCheckedIn[eventId]= false;
     eventMapping[eventId].checkInCount++;
     status = true;
 }
 function UserProfile() public view returns (uint[] memory eventHost,uint[] memory eventList, bool[] memory statusList, uint[] memory tokenList){
     eventHost = userMapping[msg.sender].hosting;
     eventList = userMapping[msg.sender].events;
     tokenList = userMapping[msg.sender].owned;
     statusList= new bool[](userMapping[msg.sender].events.length);
     for(uint i=0; i<userMapping[msg.sender].events.length;i++){
         statusList[i]=userMapping[msg.sender].notCheckedIn[userMapping[msg.sender].events[i]];
    }
 }
 function withdraw(uint eventId) public {
    require(eventMapping[eventId].ownerAddress == msg.sender,"You are not the owner");
    msg.sender.transfer(eventMapping[eventId].eth);
 }
 function retEventCount()public view returns (uint){
   return eventCount;
 }
}
interface ERC20 {
    function balanceOf(address tokenOwner) external view returns (uint balance);
   function transfer(address receiver, uint amount) external returns(bool);
    function approve(address spender, uint256 value) external returns (bool);
    function transferFrom(address _from, address _to, uint256 _value) external returns(bool);
}