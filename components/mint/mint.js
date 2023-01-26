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
  const [walletAddress, setWalletAddress] = useState('')

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

  return ( 
    <>
    <div className={styles.Jotform_Connection_x}>

      {token === '239fc23098uejifvkde38902uijedvv391t8zqwwioh32098zqqiohevaad38ziohwasl9p328trfgfg' ? <div className={styles.wholemintface_mintt}>
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
                                    <button 
                                    className={styles.connectWallet_mintButton}
                                    disabled={paused || isMinting}
                                    onClick= {isWhitelistedSale? whitelistMintHandler: publicMintHandler }
                                    >
                                    {isMinting ? 'Minting...' : 'Mint'}
                                    </button>
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
                  : 
                  <div className={styles.Jotform_Connection}>
                  <p>Please submit the country you are at right now to view the Mint Interface!</p>
                  <p>The location is used to pay taxes and not assosiated with your wallet address.</p>
                  <form class="jotform-form" action="https://submit.jotformeu.com/submit/230178077030045/" method="post" name="form_230178077030045" id="230178077030045" accept-charset="utf-8" autocomplete="on">


                    <div role="main" class="form-all">
                    <ul class="form-section page-section">
                      <li class="form-line jf-required" data-type="control_address" id="id_4" data-compound-hint=",,,,,,Choose,"><label class="form-label form-label-top form-label-auto" id="label_4" for="input_4_country"> Please select the country you are at right now!</label>
                        <div id="cid_4" class="form-input-wide jf-required" data-layout="full">
                          <div summary="" class="form-address-table jsTest-addressField">
                            <div class="form-address-line-wrapper jsTest-address-line-wrapperField">
                              <select class="form-dropdown validate[required] form-address-country" name="q4_adresse[country]" id="input_4_country" data-component="country" required="" aria-labelledby="label_4" autoComplete="section-input_4 country">
                                    <option value="">Choose</option>
                                    <option value="United States">United States</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="The Bahamas">The Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Brunei">Brunei</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote d&#x27;Ivoire">Cote d&#x27;Ivoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Curaçao">Curaçao</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands">Falkland Islands</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="The Gambia">The Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guernsey">Guernsey</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="North Korea">North Korea</option>
                                    <option value="South Korea">South Korea</option>
                                    <option value="Kosovo">Kosovo</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Laos">Laos</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libya">Libya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macau">Macau</option>
                                    <option value="Macedonia">Macedonia</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia">Micronesia</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Nagorno-Karabakh">Nagorno-Karabakh</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Turkish Republic of Northern Cyprus">Turkish Republic of Northern Cyprus</option>
                                    <option value="Northern Mariana">Northern Mariana</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestine">Palestine</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn Islands">Pitcairn Islands</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Republic of the Congo">Republic of the Congo</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Barthelemy">Saint Barthelemy</option>
                                    <option value="Saint Helena">Saint Helena</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Martin">Saint Martin</option>
                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="Somaliland">Somaliland</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Ossetia">South Ossetia</option>
                                    <option value="South Sudan">South Sudan</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard">Svalbard</option>
                                    <option value="eSwatini">eSwatini</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syria">Syria</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania">Tanzania</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-Leste">Timor-Leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Transnistria Pridnestrovie">Transnistria Pridnestrovie</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tristan da Cunha">Tristan da Cunha</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Vatican City">Vatican City</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="British Virgin Islands">British Virgin Islands</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="US Virgin Islands">US Virgin Islands</option>
                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                    <option value="other">Other</option>
                                  </select></div>
                          </div>
                        </div>
                      </li>
                      <li class="form-line" data-type="control_button" id="id_2">
                        <div id="cid_2" class="form-input-wide" data-layout="full">
                          <div data-align="auto" class="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
                            <button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content=""
                            onClick={handleClick}
                            >

                            Submit
                            
                            </button>
                            </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              }

                
                  
      </div>    



                  







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

<form class="jotform-form" action="https://submit.jotformeu.com/submit/230178077030045/" method="post" name="form_230178077030045" id="230178077030045" accept-charset="utf-8" autocomplete="on">


<div role="main" class="form-all">
<ul class="form-section page-section">
  <li class="form-line jf-required" data-type="control_address" id="id_4" data-compound-hint=",,,,,,Choose,"><label class="form-label form-label-top form-label-auto" id="label_4" for="input_4_country"> Please select the country you are at right now!</label>
    <div id="cid_4" class="form-input-wide jf-required" data-layout="full">
      <div summary="" class="form-address-table jsTest-addressField">
        <div class="form-address-line-wrapper jsTest-address-line-wrapperField">
          <select class="form-dropdown validate[required] form-address-country" name="q4_adresse[country]" id="input_4_country" data-component="country" required="" aria-labelledby="label_4" autoComplete="section-input_4 country">
                <option value="">Choose</option>
                <option value="United States">United States</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="The Bahamas">The Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote d&#x27;Ivoire">Cote d&#x27;Ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Curaçao">Curaçao</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands">Falkland Islands</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="Gabon">Gabon</option>
                <option value="The Gambia">The Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="North Korea">North Korea</option>
                <option value="South Korea">South Korea</option>
                <option value="Kosovo">Kosovo</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Nagorno-Karabakh">Nagorno-Karabakh</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Turkish Republic of Northern Cyprus">Turkish Republic of Northern Cyprus</option>
                <option value="Northern Mariana">Northern Mariana</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn Islands">Pitcairn Islands</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Republic of the Congo">Republic of the Congo</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Barthelemy">Saint Barthelemy</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Martin">Saint Martin</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="Somaliland">Somaliland</option>
                <option value="South Africa">South Africa</option>
                <option value="South Ossetia">South Ossetia</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard">Svalbard</option>
                <option value="eSwatini">eSwatini</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Transnistria Pridnestrovie">Transnistria Pridnestrovie</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tristan da Cunha">Tristan da Cunha</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City">Vatican City</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="British Virgin Islands">British Virgin Islands</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="US Virgin Islands">US Virgin Islands</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="other">Other</option>
              </select></div>
      </div>
    </div>
  </li>
  <li class="form-line" data-type="control_button" id="id_2">
    <div id="cid_2" class="form-input-wide" data-layout="full">
      <div data-align="auto" class="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
        <button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content=""

        className={styles.connectWallet_mintButton}
        disabled={paused || isMinting}
        onClick= {isWhitelistedSale? whitelistMintHandler: publicMintHandler }
        >

        Mint
        
        </button>
        </div>
    </div>
  </li>
</ul>
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