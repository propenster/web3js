let Web3 = require('web3')
//ganache local blockchain
let url_ganache = 'http://127.0.0.1:7545'

//let web3 = new Web3(url_ganache)
url_infura = 'https://mainnet.infura.io/v3/fafe1db7106e439c89756f4c9d1ea593'
let web3 = new Web3(url_infura)

console.log(web3)