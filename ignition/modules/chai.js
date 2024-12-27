const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ChaiModule", (m) => {
  const chai = m.contract("chai"); // Deploys the chai contract without parameters
  return { chai };
});
