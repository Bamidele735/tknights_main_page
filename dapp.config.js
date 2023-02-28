const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL
const BLOCKNATIVE_API_KEY = process.env.NEXT_PUBLIC_DAPP_ID

const config = {
  title: '12Knights',
  description: '',
  contractAddress: '0x83052EEbA5F0b73Bd57e39d6cb4eA9931bE8182b',
  publicSalePrice: 1,
  whitelistSalePrice: 1.5,
  maxMintAmount:10
}  

const onboardOptions = {
  dappId: BLOCKNATIVE_API_KEY,
  networkId: 1, // Ethereum
  darkMode: true,
  walletSelect: {
    description:'Please select a wallet',
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'weRjapaneseTest01 Dapp'
      },
      
      { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
      { walletName: 'gnosis'},
      { walletName: 'authereum' },

      {
        walletName: 'ledger',
        rpcUrl: RPC_URL
      }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }
