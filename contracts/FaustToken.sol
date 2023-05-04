// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FaustToken is ERC20 {
    uint constant _initialSupply = 10 * (10 ** 18);

    constructor() ERC20("Faust", "FST") {
        _mint(msg.sender, _initialSupply);
    }
}
