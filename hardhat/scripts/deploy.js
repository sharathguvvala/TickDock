const hre = require("hardhat");

async function main() {
    const [user1,user2,user3] = await hre.ethers.getSigners()
    const TickDock = await hre.ethers.getContractFactory("TickDock")
    const contractDeployed = await TickDock.deploy()
    await contractDeployed.deployed()
    console.log("contract address",contractDeployed.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });