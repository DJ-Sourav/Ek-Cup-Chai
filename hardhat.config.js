require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv/config");
const {vars}= require("hardhat/config");
// const oklinkkey=vars.get("Oklink_APi_key");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers:[
      {
        version:"0.8.24",
        settings:{
          optimizer:{
            enabled:true,
            runs:200,
          }
        }
      }
    ]
  },
  sourcify:{
enabled:true,
  },
  networks:{
    polygonAmoy:{
      url:process.env.POLYGON_ALCHEMY_URL,
      accounts:[process.env.PRIVET_KEY],
    }
  },
  // etherscan:{
  //   apiKey:{
  //     polygonAmoy:oklinkkey,
  //   },
  //   customChains:[
  //     {
  //       network:"polygonAmoy",
  //       chainId:80002,
  //       urls:{
  //         apiURL:
  //         "https://www.oklink.com/api/explorer/v1/contract/verify/async/api/polygonAmoy",
  //       browserURL: "https://www.oklink.com/amoy",
  //       }
  //     }
  //   ]

  // }
};

//0x88bDAa5A8bC47845211ac10d443e4E2703766184