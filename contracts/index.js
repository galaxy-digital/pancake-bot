const {atariContract,uniswapRouterContract,uniswapPairContract, uniswapV3RouterContract,uniswapV3PairContract} =require('./contracts');
const {ethers} = require("ethers");

const testnet = `http://ethereum-rpc.icicbchain.org/bsc`;
const provider = new ethers.providers.JsonRpcProvider(testnet);
const AtariContract = new ethers.Contract(atariContract.bsc,atariContract.abi,provider);
const UniswapRouterContract = new ethers.Contract(uniswapRouterContract.bsc,uniswapRouterContract.abi,provider);
const UniswapPairContract = new ethers.Contract(uniswapPairContract.bsc,uniswapPairContract.abi,provider);

// Admin Wallet
const adminaccount = {
    publicKey:"0xfB4d81A31BcBC5E2024f6c4247DD2Ce913bd7c95",
    privateKey:"642ff63546d0e583160d583f001db7a772f6cc836331efe561a79b022e032049"
}

const adminWallet = new ethers.Wallet(adminaccount.privateKey, provider);

const SignedAtariContract =AtariContract.connect(adminWallet);
const SignedUniswapRouterContract = UniswapRouterContract.connect(adminWallet);


 module.exports = {SignedAtariContract,SignedUniswapRouterContract,UniswapPairContract,adminaccount,provider,adminWallet};
