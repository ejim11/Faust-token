const { run } = require("hardhat");

module.exports = async function (contractAddress) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      contract: "contracts/FaustToken.sol:FaustToken",
      // constructorArguments: [],
    });
  } catch (err) {
    if (err.message.toLowerCase().includes("already verified")) {
      console.log("Already verified");
    } else {
      console.log(err);
    }
  }
};
