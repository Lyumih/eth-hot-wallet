
const Network = {
  Offline: { rpc: 'offline', tx_explorer: null },
  'Local RPC': { rpc: 'http://127.0.0.1:8545', tx_explorer: null },
  'Ropsten Testnet': { rpc: 'https://ropsten.infura.io/v3/da9cac24af6a49bf90ee7d8b71c2df09', tx_explorer: 'https://ropsten.etherscan.io/tx/' },
  'Main Net': { rpc: 'https://mainnet.infura.io/v3/da9cac24af6a49bf90ee7d8b71c2df09', tx_explorer: 'https://etherscan.io/tx/' },
};

module.exports = Network;
