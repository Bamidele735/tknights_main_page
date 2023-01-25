// Style Imports
import styles from "../styles/memberaccess/memberaccess.module.css"

//Next Imports
import Image from "next/future/image";
import Link from "next/link";
  

// File Imports

import Socials from "./main/socials";

// Source Imports
import logo from "../public/TknightsLogo.png"

import rhinoimgone from "/public/rhinoone.jpg"
import rhinoimgtwo from "/public/rhinotwo.jpg"
import rhinoimgthree from "/public/rhinothree.jpg"

import foundersedition from "../public/Founders Edition Logo.png"

import iheartyouimageone from "../public/1.jpg"
import iheartyouimagetwo from "../public/2.jpg"
import iheartyouimagethree from "../public/3.jpg"
import iheartyouimagefour from "../public/4.jpg"
import iheartyouimagefive from "../public/5.jpg"

import founder from "../public/founder.png"
import Natebus from "../public/natebus.png"
import Dorn from "../public/dorn.png"
import Lee from "../public/lee.png"
import Chang from "../public/chang.png"
import teamlogo from "../public/teamlogo.png"

import ianimage from "../public/ianimage.png"

import trapez_mask from "../public/trapez_new.png"

import card from "../public/nftcardtknights.png"

import check from "../public/socials/checkmark.png"

// Alle Funktions

// Alle scroll functions

const ThePath = () => {
      const A = document.getElementById("thepath");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const Phase1 = () => {
      const A = document.getElementById("phase1");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const Phase2 = () => {
      const A = document.getElementById("phase2");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const Phase3 = () => {
      const A = document.getElementById("phase3");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const Phase4 = () => {
      const A = document.getElementById("phase4");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const team = () => {
      const A = document.getElementById("team");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}





// eigentliche Seite
const MbHomepage = () => {
      return (
            <>
            <div id="secret">
                  <div>
                        <div className={styles.firstsc}>
                              
                              <Image 
                              alt="ESTABLISHED 2022-2023 Image"
                              src={foundersedition}
                              className={styles.foundersedition}
                              />

                              <div className={styles.nav}>
                                          <Link href="/">
                                                <Image 
                                                src={logo}
                                                className={styles.navlogo}
                                                alt="Tknights Logo"
                                                />
                                          </Link>                 
                                          <Link href="/" >
                                                <button>
                                                      Home
                                                </button> 
                                          </Link>
                                          <button onClick={ThePath}>
                                                The Path
                                          </button>
                                          <button onClick={Phase1}>
                                                Phase 1
                                          </button>
                                          <button onClick={Phase2}>
                                                Phase 2
                                          </button>
                                          <button onClick={Phase3}>
                                                Phase 3
                                          </button>
                                          <button onClick={Phase4}>
                                                Phase 4
                                          </button>
                                          <button onClick={team}>
                                                Team
                                          </button>
                              </div>
                              <Image 
                              className={styles.videomask}
                              src={trapez_mask}
                              alt="mask"
                              />
                              <video className={styles.firstscvideo} autoPlay muted>
                                    <source src="/mbvideo.mp4" type="video/mp4" />
                                          Your browser does not support the video tag.
                              </video>
                              <p data-aos-duration="800" data-aos-delay="300" data-aos="fade-right" data-aos-offset="400" className={styles.fscwhitetext}>On behalf of the 12 Knights Collective, we express our <br /> gratitude for your participation.</p>
                              <p data-aos-duration="800" data-aos-delay="300" data-aos="fade-left" className={styles.fscimportanttext}>"Our vision is to disrupt the traditional NFT market and make a lasting impact on the world through the power of a select, driven community. As a member of this exclusive collective, you will have the unique opportunity to shape the future of NFTs and drive meaningful change."</p>
                        </div>
                        <div className={styles.thepath}>
                              <h2
                              data-aos-duration="1000" data-aos-delay="300" data-aos="fade-right"
                              >The Path</h2>

                              <Image 
                              src={card}
                              alt="Tknights NFT Card"
                              className={styles.nftcard_tp}
                              id="thepath"
                              />

                              <p
                              data-aos-duration="1200" data-aos-delay="300" data-aos="fade-left"
                              

                              className={styles.text_tp}>As a member of the 12 Knights Collective, you will have exclusive access to upcoming project collaborations, early access to new initiatives, and special data that is not available to the general public. Stay tuned for more updates and reveals as they become available.</p>

                              <div className={styles.phaseone}>

                                    <h3 >PHASE 1 - COLLECTIVE</h3>

                                    <ul>
                                          <li>
                                                <h4>1.1. Concept Development & Experimentation <Image src={check} className={styles.check_phase} /></h4>
                                                <p>Is one of the essential core elements of the transformation process for the collective, similar to networked operations management or the Effects Based Approach to Multinational Operations. CD&E describes, among other things, a possible approach to adapting and improving the skills of the collective in order to meet the challenges it faces.</p>
                                          </li>
                                          <li>
                                                <h4>1.2. Team building <Image src={check} className={styles.check_phase} /></h4>
                                                <p>We have assembled a team of passionate individuals who are committed to achieving a valuable goal.</p>
                                          </li>
                                          <li id="phase1">
                                                <h4>1.3. Website programming <Image src={check} className={styles.check_phase} /></h4>
                                                <p>Web programming refers to the writing, markup, and coding of web development, including web content, client and server scripting, and network security.</p>
                                          </li>
                                          <li>
                                                <h4>1.4. Social media launch <Image src={check} className={styles.check_phase} /></h4>
                                                <p>We have created a Twitter and Discord channel in order to develop more content over time. Our focus will be on the value of the project, and we are confident that by being unique, we will attract attention and engagement.</p>
                                          </li>
                                          <li>
                                                <h4>1.5. Presale <Image src={check} className={styles.check_phase} /></h4>
                                                <p>With our presale, you can take advantage of a discount and join us as one of the first members.</p>
                                          </li>
                                          <li>
                                                <h4>1.6. 12 Membercard-Holder</h4>
                                                <p>Once the Phase 1 final goal of 24 Member card holders is reached, the next phase will be initiated.</p>
                                          </li>
                                    </ul>
                              </div>
                              <div className={styles.IHeartYou}>
                                    <div className={styles.coldiv}>
                                          <div className={styles.images_ihy}>

                                                <Image 
                                                src={iheartyouimageone}
                                                alt="I Heart You NFT Example"
                                                className={styles.Iheartyounftexample1}

                                                data-aos-duration="1200" data-aos-delay="300" data-aos="fade-right"
                                                data-aos-once="true"
                                                // oben links
                                                
                                                />
                                                <Image 
                                                src={iheartyouimagetwo}
                                                alt="I Heart You NFT Example"
                                                className={styles.Iheartyounftexample2}

                                                data-aos-duration="1200" data-aos-delay="300" data-aos="fade-left"
                                                data-aos-once="true"

                                                // unten rechts
                                                />
                                                <Image 
                                                src={iheartyouimagethree}
                                                alt="I Heart You NFT Example"
                                                className={styles.Iheartyounftexample3}

                                                data-aos-duration="1200" data-aos-delay="600" data-aos="fade"
                                                data-aos-once="true"
                                                // mitte
                                                />
                                                <Image 
                                                src={iheartyouimagefour}
                                                alt="I Heart You NFT Example"
                                                className={styles.Iheartyounftexample4}

                                                data-aos-duration="1200" data-aos-delay="300" data-aos="fade-left"
                                                data-aos-once="true"
                                                //oben rechts
                                                />
                                                <Image 
                                                src={iheartyouimagefive}
                                                alt="I Heart You NFT Example"
                                                className={styles.Iheartyounftexample5}

                                                data-aos-duration="1200" data-aos-delay="300" data-aos="fade-right"
                                                data-aos-once="true"
                                                // unten-links
                                                />

                                          </div>
                                          <div className={styles.col_textdiv}>
                                                <h6 className={styles.colinnerh3}
                                                data-aos-duration="600" data-aos-delay="0" data-aos="fade-up"
                                                data-aos-once="true"
                                                >CHARITY COLLABORATION</h6>
                                                <h5 className={styles.colinnerh2}
                                                data-aos-duration="600" data-aos-delay="0" data-aos="fade-up"
                                                data-aos-once="true"
                                                >I Heart you!</h5>
                                                <p className={styles.colinnerp_heart}
                                                data-aos-duration="1200" data-aos-delay="300" data-aos="fade-right"
                                                data-aos-once="true"
                                                >
                                                As a member of the 12 Knights Collective, you will have the opportunity to vote on and support our charity project, I HEART YOU. This project is funded by the revenue from member NFTs and aims to promote and highlight important causes through the establishment of a transparent charity organization. As a member, you will have the ability to have insight into and influence the direction of this project.
                                                </p>
                                                <Link href={"/"}>
                                                      <button disabled className={styles.colinnerbutton}>Locked</button>
                                                </Link>
                                          </div>
                                    </div>
                                    <Image 
                                    src={iheartyouimagefive}
                                    className={styles.iheartyoumobileexample}
                                    alt="I heart you Image NFT Example"
                                    />
                              </div>

                              <div className={styles.phasetwo}>

                                    <h3>PHASE 2 - SHELTER</h3>

                                    <ul>
                                          <li>
                                                <h4>2.1. Charity concept presentation</h4>
                                                <p>We plan to provide the full concept to our collective, to get honest, beneficial feedback and acceptance.

                                                Most decisions for this and further development is planned to be decided with decentralized right to say from our collective members.</p>
                                          </li>
                                          <li>
                                                <h4>2.2. Charity team building</h4>
                                                <p>We will assemble a team with the mission of promoting charitable behavior, which is actions that benefit the common good.</p>
                                          </li>
                                          <li id="phase2">
                                                <h4>2.3. Charity foundation</h4>
                                                <p>A non-profit organization funded and equipped with decentralized decision-making power by the collective.</p>
                                          </li>
                                          <li>
                                                <h4>2.4. The first investment will be a capital deposit to charity.</h4>
                                                <p>The company will take the form of a legally recognized charity organization that requires a capital deposit. Our base concept is to identify and address the greatest fears of our collective members, and as a non-profit organization, we are legally bound to use all funds solely for charitable purposes. We aim to empower our collective to join us in this mission.</p>
                                          </li>
                                          <li>
                                                <h4>2.5. Charity partner</h4>
                                                <p>Our charity organization has the right to support other charity projects as well. We would like to create a NFT project for a charity organization, where the revenue will go towards the common good.</p>
                                          </li>
                                          <li>
                                                <h4>2.6. Collective voting</h4>
                                                <p>Either the charity partner or the first steps towards committing our efforts as a charity organization - a goal we are striving for - will be decided through decentralized community voting.</p>
                                          </li>
                                          <li>
                                                <h4>2.7. 36 Membercard-Holder </h4>
                                                <p>By achieving the final goal of 72 Membercard holders in Phase 2, the next phase will be initiated.</p>
                                          </li>
                                    </ul>

                              </div>

                              <div className={styles.rhino}>

                                    <div className={styles.coldiv}>
                                          <div className={styles.rhinoimg}>
                                                <Image 
                                                src={rhinoimgone}
                                                alt=""
                                                className={styles.rhinoimgone}
                                                data-aos-duration="2000" data-aos-delay="300" data-aos="fade-right"
                                                data-aos-once="true"
                                                />
                                                <Image 
                                                src={rhinoimgtwo}
                                                alt=""
                                                className={styles.rhinoimgtwo}
                                                data-aos-duration="2000" data-aos-delay="600" data-aos="fade-right"
                                                data-aos-once="true"
                                                />
                                                <Image 
                                                src={rhinoimgthree}
                                                alt=""
                                                className={styles.rhinoimgthree}
                                                data-aos-duration="2000" data-aos-delay="900" data-aos="fade-right"
                                                data-aos-once="true"
                                                />
                                          </div>
                                          <div className={styles.col_textdiv}>
                                                <h6 className={styles.colinnerh3}
                                                data-aos-duration="600" data-aos-delay="300" data-aos="fade-down"
                                                data-aos-once="true"
                                                >NEW NFT ASSET STANDARD: ⁺s</h6>
                                                <h5 className={styles.colinnerh2}
                                                data-aos-duration="600" data-aos-delay="300" 
                                                data-aos-once="true"
                                                data-aos="fade-up">NFTs Made to Stay: Rhino<span className={styles.importantword}>⁺s</span></h5>
                                                <p className={styles.colinnerp_rhino}
                                                data-aos-duration="1200" data-aos-delay="600" data-aos="fade-right"
                                                data-aos-once="true">
                                                This is an NFT hybrid investment project which represents a unique asset stake. Continuous fixed payouts are made for collectors, investors, and entrepreneurs.
                                                </p>
                                                <p className={styles.colinnerp_rhino}
                                                data-aos-duration="1200" data-aos-delay="600" data-aos="fade-right"
                                                data-aos-once="true">
                                                A collection of unique Rhino⁺s will go beyond the digital space and unlock real benefits for our community, starting with regular payouts.
                                                </p>
                                                <p className={styles.colinnerp_rhino}
                                                data-aos-duration="1200" data-aos-delay="600" data-aos="fade-right"
                                                data-aos-once="true">
                                                What's more, each NFT unlocks additional benefits astime passes.
                                                </p>
                                                <p className={styles.colinnerp_rhino}
                                                data-aos-duration="1200" data-aos-delay="600" data-aos="fade-right"
                                                data-aos-once="true"><span className={styles.importanttext_rhino}
                                                >First ⁺s NFT based on our I.A.N Regulation. <br /> Fixed Asset Drops!</span></p>
                                                <Link href={"/"}>
                                                      <button disabled className={styles.colinnerbutton}
                                                      data-aos-duration="1200" data-aos-delay="600" data-aos="fade-right"
                                                      data-aos-once="true">Locked</button>
                                                </Link>
                                          </div>
                                    </div>
                                    <Image 
                                    src={rhinoimgthree}
                                    alt="Rhino NFT Example"
                                    className={styles.rhinoimage_rhino_mobile}
                                    />
                              </div>
                              <Image 
                              src={ianimage}
                              className={styles.ianimageatrhino}
                              alt="IAN Image"
                              />                  

                              <div className={styles.phasethree}>

                                    <h3>PHASE 3 - VALUE</h3>

                                    <ul>
                                          <li>
                                                <h4>3.1. Rhino⁺s concept presentation</h4>
                                                <p>We will provide the full concept to our collective, which is based on a real existing company that is willing to provide a portion of their annual earnings to our members.</p>
                                          </li>
                                          <li>
                                                <h4>3.2. Due dilligence</h4>
                                                <p>We are the first to face the challenge of implementing a real NFT payout method with the real earnings of an existing company. We will listen to our collective members and, based on the given regulations, choose the best possible method available.</p>
                                          </li>
                                          <li id="phase3">
                                                <h4>3.3. Company reveal</h4>
                                                <p>We will announce the real company to our members, thereby initiating the first-ever real asset NFT project.</p>
                                          </li>
                                          <li>
                                                <h4>3.4. Website programming</h4>
                                                <p>Website programming involves creating and implementing the code and functionality that allows users to browse, buy, and sell NFTs on the platform.</p>
                                          </li>
                                          <li>
                                                <h4>3.5. NFT⁺s presale for our collective members</h4>
                                                <p>We are offering a presale exclusively for our members.</p>
                                          </li>
                                          <li>
                                                <h4>3.6. Public sale</h4>
                                                <p>We are opening the sale to the public.</p>
                                          </li>
                                          <li>
                                                <h4>3.7. 100 Membercard-Holder</h4>
                                                <p>Upon achieving the Phase 3 final goal of 100 Membercard holders, the next phase will be initiated.</p>
                                          </li>
                                    </ul>
                              </div>

                              <div className={styles.ian}>

                                    <div className={styles.coldiv}>
                                          <video className={styles.weltkugel_ian} autoPlay muted loop>
                                                <source src="/weltkugel.webm" type="video/webm"/>
                                                Your browser does not support the video tag.
                                          </video>
                                          <Image 
                                          src={ianimage}
                                          alt="I.A.N Image"
                                          className={styles.ianimage_desktop}
                                          />
                                          <div>
                                                <h6 className={styles.colinnerh3}
                                                data-aos-duration="1200" data-aos-delay="600" data-aos="fade-up"
                                                data-aos-once="true"
                                                ><span className={styles.importantword_ian}>I</span>NDEPENDENT-<span className={styles.importantword_ian}>A</span>SSET-<span className={styles.importantword_ian}>N</span>ETWORK</h6>
                                                <h5
                                                data-aos-duration="1200" data-aos-delay="600" data-aos="fade"
                                                data-aos-once="true"
                                                className={styles.colinnerh2}>I.A.N Asset Standard Regulations</h5>
                                                <p
                                                data-aos-duration="1200" data-aos-delay="600" data-aos="fade-left"
                                                data-aos-once="true"
                                                className={styles.colinnerp_ian}>
                                                This is a NFT rulebook project with continuous decentralized developments for collectors, investors, and entrepreneurs.
                                                </p>
                                                
                                                <p 
                                                data-aos-duration="1200" data-aos-delay="600" data-aos="fade-left"
                                                data-aos-once="true"
                                                className={styles.colinnerp_ian}>
                                                Our goal with the <span className={styles.importanttext_ian}>I.A.N</span> Standard is to build an organic community that will bring focus to the transformation and add real asset value to the new NFT investment standard, NFT+s.
                                                </p>
                                                <p 
                                                data-aos-duration="1200" data-aos-delay="600" data-aos="fade-left"
                                                data-aos-once="true"
                                                className={styles.colinnerp_ian}>
                                                <span className={styles.importanttext_ian}>Normal NFT = NFTs (collectible/access) <br/> IAN NFT = NFT<span class={styles.importantword}>⁺s</span> (dividends/fixed regular drops)</span>
                                                </p>
                                                <Link href={"/"}>
                                                      <button
                                                      data-aos-duration="1200" data-aos-delay="600" data-aos="fade-right"
                                                      data-aos-once="true"
                                                      disabled className={styles.colinnerbutton}>Locked</button>
                                                </Link>
                                          </div>
                                          
                                    </div>
                                    <Image 
                                    src={ianimage}
                                    alt="I.A.N Image"
                                    className={styles.ianimage_ian_mobile}
                                    />
                                    
                              </div>

                              <div className={styles.phasefour}>

                                    <h3>PHASE 4  - NEW AGE</h3>

                                    <ul>
                                          <li>
                                                <h4>4.1. I.A.N concept presentation </h4>
                                                <p>The concept and the first 10 rules of this project are exclusively published to our collective for decentralized rights and to address the needs of the new age. These rules are based on our Concept Development & Experimentation strategy.</p>
                                          </li>
                                          <li>
                                                <h4>4.2. Due dilligence</h4>
                                                <p>In this stage, we reveal the path we took and why it was such an important task. We did what we thought needed to be done, and now the entire collective is empowered to benefit from all the hard work we have put in. We want our members to give us honest feedback and to participate in shaping the future we are all striving for - a better future!</p>
                                          </li>
                                          <li id="phase4">
                                                <h4>4.3. Communtiy voting</h4>
                                                <p>In this phase, we share the journey we took and why it was critical to our progress. We have done what we believed needed to be done, and now our collective is reaping the rewards of our efforts. We welcome honest feedback from our members and encourage them to join us in shaping a brighter future for all.</p>
                                          </li>
                                          <li>
                                                <h4>4.4. Next NFT+s project announcment</h4>
                                                <p>Once we are ready to move forward, the NFT+s concept will be implemented and our collective will be the first to know which company is next in line to collaborate with us.</p>
                                          </li>
                                          <li>
                                                <h4>4.5. I.A.N Website </h4>
                                                <p>Web programming involves the writing, markup, and coding necessary for Web development. This includes tasks such as creating Web content, implementing client and server scripting, and ensuring network security.</p>
                                          </li>
                                          <li>
                                                <h4>4.6. Public relations</h4>
                                                <p>For now, we do not have plans to engage in any large-scale PR efforts. We believe the value of our work speaks for itself, and excessive attention at this stage may be more harmful than beneficial. However, we are not afraid of challenges, so if our collective wishes for us to do more PR work, we will oblige.</p>
                                          </li>
                                          <li>
                                                <h4>4.8. 120 Membercard-Holder </h4>
                                                <p>Upon reaching the Phase 4 goal of 120 Membercard holders, we will initiate the next phase and the "Elements" project. Be curious!</p>
                                          </li>
                                    </ul>

                              </div>

                              <div className={styles.team}>

                                    <Image 
                                    alt="Tknights Team Logo"
                                    src={teamlogo}
                                    className={styles.teamlogo_t}
                                    />

                                    <h3>TEAM</h3>

                                    <div id="team" className={styles.teamlist_t}>

                                          <div className={styles.teammember}>

                                                <Image 
                                                src={founder}
                                                alt="
                                                M.Lee"
                                                className={styles.teammemberimage_t}
                                                />

                                                <p className={styles.name_t}>M. Lee</p>
                                                <p className={styles.job_t}>Founder</p>
                              
                                          </div>
                                          <div className={styles.teammember}>

                                                <Image 
                                                src={Chang}
                                                alt="I.Chang"
                                                className={styles.teammemberimage_t}
                                                />

                                                <p className={styles.name_t}>I. Chang</p>
                                                <p className={styles.job_t}>Project Manager</p>
                              
                                          </div>
                                          <div className={styles.teammember}>

                                                <Image 
                                                src={Dorn}
                                                alt="F. Dorn"
                                                className={styles.teammemberimage_t}
                                                />

                                                <p className={styles.name_t}>F. Dorn</p>
                                                <p className={styles.job_t}>Project Superviser</p>
                              
                                          </div>
                                          <div className={styles.teammember}>

                                                <Image 
                                                src={Lee}
                                                alt="SG. Lee"
                                                className={styles.teammemberimage_t}
                                                />

                                                <p className={styles.name_t}>SG. Lee</p>
                                                <p className={styles.job_t}>Project Manager</p>
                              
                                          </div>
                                          <div className={styles.teammember}>

                                                <Image 
                                                src={Natebus}
                                                alt="W. Natebus"
                                                className={styles.teammemberimage_t}
                                                />

                                                <p className={styles.name_t}>W. Natebus</p>
                                                <p className={styles.job_t}>IT Development</p>
                              
                                          </div>

                                    </div>

                              </div>

                              <div className={styles.collective}>
                                    <h2>Collective Intelligence</h2>
                                    <p className={styles.collective_p}>We believe that group research driven from the bottom up is more effective,<br />when a collective works together, they are stronger than any individual member.</p>
                                    
                                    <div className={styles.collective_inner}>
                                          <div>
                                                <h3>1</h3>
                                                <p>Phase</p>
                                                <hr />
                                          </div>
                                          <div>
                                                <h3>0</h3>
                                                <p>Knights Members</p>
                                                <hr />
                                          </div>
                                          <div>
                                                <h3>24</h3>
                                                <p>Knights f. next Phase</p>
                                                <hr />
                                          </div>
                                          <div>
                                                <h3>3</h3>
                                                <p>locked Phases</p>
                                                <hr />
                                          </div>
                                    </div>
                                    <Socials />
                              </div>

                        </div>
                  </div>
            </div>
            </>
      )
}


export default MbHomepage