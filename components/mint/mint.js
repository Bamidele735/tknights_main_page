import { useState,useEffect } from "react"
import { initOnboard } from "../../ulits/onboard"
import { config } from '../../dapp.config'
import styles from "../../styles/Landingpage/mint.module.css"

 
import {
  getTotalMinted,
  getNumberMinted,
  getMaxSupply,
  isPausedState,
  isPublicSaleState,
  isWhitelistedSaleState,
  publicMint,
  whitelistedMint          } from '../../ulits/interact'


export default function Mint(){
  const [maxSupply, setMaxSupply] = useState(0)
  const [totalMinted, setTotalMinted] = useState(0)
  const [maxMintAmount, setMaxMintAmount] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isPublicSale, setIsPublicSale] = useState(false)
  const [isWhitelistedSale, setIsWhitelistedSale] = useState(false)
  

  const [status, setStatus] = useState(null)
  const [mintAmount, setMintAmount] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [onboard, setOnboard] = useState(null)
  const [walletAddress, setWalletAddress] = useState('');
  const [country, setCountry] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const init = async () => {
      setMaxSupply(await getMaxSupply())
      setTotalMinted(await getTotalMinted())

      setPaused(await isPausedState())
      const isPublicSale = await isPublicSaleState()
      setIsPublicSale(isPublicSale)

      setIsWhitelistedSale(await isWhitelistedSaleState())

      setMaxMintAmount(config.maxMintAmount)

    }

    init()
  }, [])

  
  useEffect( () => {
    const onboardData = initOnboard( {
      address: (address) => setWalletAddress(address ? address : ''),
      wallet: (wallet) => {
        if (wallet.provider) {
          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          window.localStorage.removeItem('selectedWallet') }}
    }
    )
  setOnboard(onboardData)
  }, [])

  const previouslySelectedWallet = typeof window !== 'undefined' &&
  window.localStorage.getItem('selectedWallet')

useEffect(() => {
  if (previouslySelectedWallet !== null && onboard) {
    onboard.walletSelect(previouslySelectedWallet)
  }
}, [onboard, previouslySelectedWallet])

  const connectWalletHandler = async () => {
    const walletSelected = await onboard.walletSelect()
    if (walletSelected) {
      await onboard.walletCheck()
    }
  }
  const incrementMintAmount = () => {
    if (mintAmount < maxMintAmount) {
      setMintAmount(mintAmount + 1)
    }
  }

  const decrementMintAmount = () => {
    if (mintAmount > 1) {
      setMintAmount(mintAmount - 1)
    }
  }

  const publicMintHandler = async () => {
    setIsMinting(true)

    const { success, status } = await publicMint(mintAmount)

    setStatus({
      success,
      message: status
    })

    setIsMinting(false)
  }

  const whitelistMintHandler = async () => {
    setTimeout(async() => {
        setIsMinting(true)

        const { success, status } = await whitelistedMint(mintAmount)

        setStatus({
          success,
          message: status
        })

        setIsMinting(false)
    }, 10000)
  }

  // CHAT GPT JOTFORM CONNECTING


  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('32hjr90832fjesoifd');
    setToken(storedToken);
  }, []);

  
  const handleClick = () => {
    setTimeout(() => {
      const tokenValue = '239fc23098uejifvkde38902uijedvv391t8zqwwioh32098zqqiohevaad38ziohwasl9p328trfgfg';
      localStorage.setItem('32hjr90832fjesoifd', tokenValue);
      setToken(tokenValue);
  
      // expires in 3 min 
      setTimeout(() => {
        localStorage.removeItem('32hjr90832fjesoifd');
        setToken(null);
      }, 180000);
  
      }, 100)
  };


  // Form data submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset Error and Message:
    setError("");
    setMessage("");
    // fields check:
    if(!country) return setError("Country is required");

    // UserData Structure:
    let user = {
      country,
      walletAddress,
      createdAt: new Date().toISOString()
    };

    // Save the Users:
    let response = await fetch('/api/users', {
      method: "POST",
      body: JSON.stringify(user)
    });

    // get the data
    let data = await response.json();
    if(data.success) {
      // reset the fields
      // setWalletAddress('');
      setCountry('');
      // set the message
      return setMessage(data.message)
    } else {
      // set the error
      return setError(data.message)
    }
  }
  return ( 
    <>

    
    


                  
    <div className={styles.wholemintface_mint}>
        <div className={styles.smallerdivmint_mint}>
                <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
          <div className="z-1 md:max-w-3xl w-full bg-black/75 filter  py-4 rounded-md px-2 md:px-10 flex flex-col items-center
            bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-2 border-gray-100 backdrop-saturate-150">
            <div className={styles.mint_top}>
                  <h1 className={styles.mintstatus}>
                  {paused ? 'Paused' : isPublicSale ? 'Public Sale' : 'Whitelist Sale' } </h1>

                  <h3  className={styles.walletAddress_connected}>
                  {walletAddress
                  ? walletAddress.slice(0, 8) + '...' + walletAddress.slice(-4) 
                  : ''}
                  
                  </h3>
                      
                  <>
                  <div className={styles.totalMinted}>
                        <div className="font-Righteous z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-brand-purple rounded-md flex items-center justify-center text-white font-semibold">
                              <p className={styles.totalmintedamount}>
                              <span className={styles.alreadymintednum}>{totalMinted}</span> /{' '} {maxSupply}
                              
                              </p>
                        </div>
                  </div>
                  </>
            </div>
                

                {/* Increment and decrement */}

                <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0 ">

                    <div className={styles.incrementanddecrement}>
                    <button
                        className="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-md"
                        onClick={decrementMintAmount} >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 md:h-8 md:w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18 12H6"
                          />
                        </svg>
                      </button> 
                      <p className={styles.incrementanddecrement_mintamount}>
                      {mintAmount}
                      </p>
                      <button
                        className="w-12 h-8 md:w-14 md:h-10 flex items-center justify-center text-black hover:shadow-lg bg-gray-300 font-bold rounded-md"
                        onClick={incrementMintAmount} >
                      
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 md:h-8 md:w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </button>
                    </div>  

                    <div className={styles.total}>
                      <div className={styles.total_totalandprice}>
                        <p>Total</p>

                        <div className={styles.total_priceandgas}>
                          <p>
                            {Number.parseFloat(paused ? '0.00' :  config.publicSalePrice*mintAmount).toFixed(
                              4
                            )}{' '}
                            ETH
                          </p>{' '}
                          <p className={styles.gasprice}>+ GAS</p>
                        </div>
                      </div>
                    </div>

                {/* Mint Button && Connect Wallet Button */}

                  <div className={styles.mintacutalinterface}>
                        {walletAddress ? (
                            <form onSubmit={handleSubmit}>
                            {error ? (
                                  <div>
                                    <h2 className={styles.error}>{error}</h2>
                                  </div>
                                ) : null}
                                {message ? (
                                  <div>
                                    <h2 className={styles.message}>{message}</h2>
                                  </div>
                                ) : null}
                              <div>
                              <br />
                                <label>Country: &nbsp;</label>
                                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                                  <option value="Afghanistan">Afghanistan</option>
                                  <option value=" Albania"> Albania</option>
                                  <option value=" Algeria"> Algeria</option>
                                  <option value=" Andorra"> Andorra</option>
                                  <option value=" Angola"> Angola</option>
                                </select>
                              </div>
                              <br /><br />

                                  <div>
                                      <button className={styles.connectWallet_mintButton}
                                disabled={paused || isMinting}
                                onClick= {isWhitelistedSale? whitelistMintHandler: publicMintHandler } type='submit'>
                                  
                                  {isMinting ? 'Minting...' : 'Mint'}

                                </button>
                                    </div>
                                </form>

                      
                        ) : (
                              <button className={styles.connectWallet_button}
                              onClick={connectWalletHandler}
                              >
                              Connect wallet
                              </button> )}
                  </div>
                </div>
              </div>

              {/*Status*/}
        
        <div className={styles.mint_end}>
              {status && (
              <div className={styles.statusmessage}>
                  {status.message}
              </div>
            )}
    
                {/* Contract Address */}
              
                <div className={styles.contractAddress}>
                  <h3 className={styles.contractAddress_heading}>
                    Contract Address :  
                  
                    <a
                    href={`https://goerli.etherscan.io/address/${config.contractAddress}#readContract`}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.contractAddress_link}
                  >
                    <span className={styles.contractAddress_address}>{' '+ config.contractAddress}</span>
                  </a>
                  </h3>
                </div>
                </div>
            </div>
            </div>
            </div>
            </>
    
        )
}