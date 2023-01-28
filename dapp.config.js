const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL
const BLOCKNATIVE_API_KEY = process.env.NEXT_PUBLIC_DAPP_ID

const config = {
  title: '12Knights Dapp',
  description: 'Testing Mint Dapp Twelve Knights',
  contractAddress: '0xb49aae650E499BFb5F3AbaF9d4ac8F48Ae972b3F',
  publicSalePrice:0.0001,
  whitelistSalePrice:0.00001,
  maxMintAmount:10
}

const onboardOptions = {
  dappId: BLOCKNATIVE_API_KEY,
  networkId: 5, // Goerli
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
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: 'weRjapaneseTest01 Dapp'
      },
      {
        walletName: 'keepkey',
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
