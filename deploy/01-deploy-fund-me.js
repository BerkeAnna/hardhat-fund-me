

/*function deployFunc() {
    console.log("hi")
}

module.exports = {
    default: deployFunc,
};
*/

const { network } = require("../helper-hardhat-config")
const helperConfig = require("../helper-hardhat-config")
const networkConfig = helperConfig.networkConfig

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    const chainId = network.config.chainId

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]

    const fundMe = await deploy("FundMe", {
        from: deployer, 
        args: [/*  address */], //put priceFeedAddress
        log: true,

    })
}