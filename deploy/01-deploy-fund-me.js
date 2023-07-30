

/*function deployFunc() {
    console.log("hi")
}

module.exports = {
    default: deployFunc,
};
*/

const { networkConfig } = require("../helper-hardhat-config")
const { network } = require("hardhat")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = networkConfig.config.chainId

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]

    const fundMe = await deploy("FundMe", {
        from: deployer, 
        args: [/*  address */], //put priceFeedAddress
        log: true,

    })
}