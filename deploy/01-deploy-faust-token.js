const { network } = require("hardhat");
const verify = require("../utils/verify");
require("dotenv").config();

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deployer } = await getNamedAccounts();
  const { deploy, log } = deployments;

  const faustTokenContract = await deploy("FaustToken", {
    from: deployer,
    log: true,
    waitConfirmation: network.config.blockConfirmation || 1,
  });

  log("Contract deployed");
  log("-------------------------");

  //   verify
  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_KEY) {
    await verify(faustTokenContract.address);
  }
};
