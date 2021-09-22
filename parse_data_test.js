const Web3 = require('web3');
let nodeUrl = 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161';
const web3 = new Web3(nodeUrl);
let data = '0x000000000000000000000000a3d5223d644688fcbd2029d421edbec6785be0a00000000000000000000000009d4969d06411d3b319f7204b71000cf874165bb00000000000000000000000000000000000000000000000000000000000042b0f';
//0xa3d5223d644688fcbd2029d421edbec6785be0a0
let contractAddress = ('0x' + data.substr(26, 40)).toLowerCase();
let ownerAddress = ('0x' + data.substr(66 + 24, 40)).toLowerCase();
const tokenId = web3.utils.hexToNumberString('0x' + data.substr(2 + 128, 64));
console.log(contractAddress, ownerAddress, tokenId)