const {atariContract,uniswapRouterContract,uniswapPairContract, uniswapV3RouterContract,uniswapV3PairContract} =require('./contracts');
const {ethers} = require("ethers");

const testnet = `http://ethereum-rpc.icicbchain.org/bsc`;
const provider = new ethers.providers.JsonRpcProvider(testnet);
const AtariContract = new ethers.Contract(atariContract.bsc,atariContract.abi,provider);
const UniswapRouterContract = new ethers.Contract(uniswapRouterContract.bsc,uniswapRouterContract.abi,provider);
const UniswapPairContract = new ethers.Contract(uniswapPairContract.bsc,uniswapPairContract.abi,provider);

// Admin Wallet
const adminaccount = {
    publicKey:"0x58CAC56f319C8BDC6b73243af2f835b3b6f5cF52",
    privateKey:"33e68296942f4c9da3197627058e6bea1cebcbfbbf1177b88df6cbbcf7306d57"
}

const adminWallet = new ethers.Wallet(adminaccount.privateKey, provider);

const SignedAtariContract =AtariContract.connect(adminWallet);
const SignedUniswapRouterContract = UniswapRouterContract.connect(adminWallet);


 module.exports = {SignedAtariContract,SignedUniswapRouterContract,UniswapPairContract,adminaccount,provider,adminWallet};
