require("@nomiclabs/hardhat-waffle");
require("dotenv").config({
  path: ".env"
});

const ALCHEMY_API_KEY_URL = process.env.YOUR_ALCHEMY_MUMBAI_URL;

const MUMBAI_PRIVATE_KEY = process.env.YOUR_TEST_WALLET_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
};
