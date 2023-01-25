import styles from "../styles/mainpages/FooterLinks.module.css"


const Introduction = () => {
      const A = document.getElementById("Introduction");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const Background = () => {
      const A = document.getElementById("Background");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const TechnicalOverview = () => {
      const A = document.getElementById("TechnicalOverview");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const UseCases = () => {
      const A = document.getElementById("UseCases");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const Economics = () => {
      const A = document.getElementById("Economics");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const Roadmap = () => {
      const A = document.getElementById("Roadmap");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const Team = () => {
      const A = document.getElementById("Team");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const Conclusion = () => {
      const A = document.getElementById("Conclusion");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}
const Disclaimer = () => {
      const A = document.getElementById("Disclaimer");
      A.scrollIntoView({behavior:"smooth", block:"center"});
}

const Whitepaper = () => {
      return(
            <div className={styles.Whitepaper}>

                  <div id="quicklinks" className={styles.Quicklinks}>
                        <h3>Quicklinks</h3>
                        <button onClick={Introduction}>Introduction</button>
                        <button onClick={Background}>Background</button>
                        <button onClick={TechnicalOverview}>Technical Overview</button>
                        <button onClick={UseCases}>Use Cases</button>
                        <button onClick={Economics}>Economics</button>
                        <button onClick={Roadmap}>Roadmap</button>
                        <button onClick={Team}>Team</button>
                        <button onClick={Conclusion}>Conclusion</button>
                        <button onClick={Disclaimer}>Disclaimer</button>
                  </div>

                  <div className={styles.WhitepaperText}>

                        <h2>Whitepaper 12 Knights Collective</h2>

                        <div id={styles.Introduction}>

                              <h3>Introduction</h3>

                              <p>
                                    The 12 Knights Collective is a new project that aims to revolutionize the way non-fungible tokens
                                    (NFTs) are perceived and utilized. We are offering a unique opportunity for individuals to join our
                                    collective by acquiring one of our 120 NFT member access cards.
                              </p>
                              <p>
                              By striving together, our goal is to address the current blockchain issues of power consumption, the
lack of value and use for many NFTs that are created without a clear purpose or use case and have
little to no value beyond speculation.
                              </p>
                              <p id={"Introduction"}>
                              As a member of the 12 Knights Collective, you will have access to an exclusive community of likeminded individuals, early access to information on premium value NFT projects and have voting
rights and pre-mint access for all related projects. 
                              </p>
                              <p>
                              Our collective is dedicated to finding real-world uses for NFTs and implementing sustainable and
efficient technologies to create a new infrastructure for NFTs, that is more sustainable and efficient. 
                              </p>
                              <p>
                              One of our main focus is to create a new NFT standard that is not only an asset but also ensures
regular loyalties through a follow-up NFT project. Additionally, we aim to create new regulations for
this type of NFTs to make sure they are beneficial for both, the users and the industry. This will
establish 12 Knights Collective as a leader in the NFT space and provide our members with a tangible
return on future investments. 

                              </p>
                              <p>
                              By acquiring an NFT member access card, you are not only investing in the future of NFTs, but also in
the collective&apos;s mission to establish a new vision for the future of NFTs, grounded in real-world value
and use, utilizing decentralized blockchain technology and making a real impact in the industry by
creating a new standard, that is beneficial for all. 
                              </p>

                        </div>
                        <div id={styles.Background}>
                        
                              <h3>Background</h3>

                              <p>
                              The concept of non-fungible tokens (NFTs) has become increasingly popular in recent years as a way
to digitize and tokenize unique assets, such as art, collectibles, and other digital assets. However,
despite their potential, there are several issues with NFTs as they currently stand. One of the most
significant issues is the high-power consumption required to power the blockchain networks that
NFTs rely on. This not only drives up costs for users, but also has a significant environmental impact.
                              </p>
                              <p id={"Background"}>
                              Another major issue is the lack of real value and use for many NFTs that currently exist. Many NFTs
are created without a clear purpose or use case, and as a result, they have little to no value beyond
speculation. Additionally, many NFTs are created as one-off projects and have little to no future
potential for growth or development. 
                              </p>
                              <p>
                              12 Knights Collective aims to address these issues by creating a community of like-minded
individuals who are committed to finding real-world uses for NFTs and implementing sustainable and
efficient technologies, particularly decentralized blockchain technology. Through the creation of a
unique NFT member access card, the project aims to provide a way for members to connect with
others, have early access to valuable information and have a real impact on the way NFTs are seen
and used. The project is focused on creating a group of 120 members to drive change in the NFT
ecosystem. 
                              </p>
                        </div>
                        <div id={styles.TechnicalOverview}>

                              <h3>Technical Overview:</h3>

                              <p>
                              The 12 Knights Collective project is built on the Ethereum blockchain and utilizes the ERC-721
standard for non-fungible tokens (NFTs). The ERC-721 standard allows for the creation and
ownership of unique digital assets on the Ethereum blockchain. 
                              </p>
                              <p>
                              The project issues a total of 120 NFTs, each representing a unique membership to the collective. The
NFTs are minted using a smart contract deployed to the Ethereum blockchain. This smart contract is
responsible for creating new NFTs, as well as managing the ownership and transfer of existing NFTs.
Once the NFTs are minted, they can be bought and sold on the open market, and the ownership of
each NFT serves as a proof of membership to the collective. 
                              </p>
                              <p id={"TechnicalOverview"}>
                              The smart contract also includes functionality for access control to exclusive content and
information based on the NFT ownership, so only members with an NFT will be able to access the
exclusive contents. 
                              </p>
                              <p>
                              It is worth noting that as a member of the collective, the holder of an NFT also has the right to
participate in decision making processes within the collective. In summary, the 12 Knights Collective
project is a collective of 120 members, each represented by a unique NFT minted and managed
using smart contracts deployed on the Ethereum blockchain. 
                              </p>
                              <p>
                              The NFTs can be bought and sold on the open market and serve as proof of membership for
accessing exclusive content and information on the platform and also have a right to participate in
decision making processes within the collective. The smart contract handle access control based on
the NFT ownership, and the platform provides a web-based interface for members to interact with
the smart contract and access the exclusive contents. 
                              </p>
                        </div>
                        <div id={styles.UseCases}>

                              <h3>Use Cases:</h3>

                              <p>
                              Our NFTs will have a number of potential uses for holders, beyond simply serving as a collectible.
Some of the key use cases for our NFTs include: 
                              </p>

                              <li>Exclusive community: By holding one of our NFTs, members will have access to an exclusive
community of like-minded enthusiasts who share a passion for the assets represented by the
NFTs. This community will provide a space for members to connect, share ideas, and discuss
their investments.</li>

                              <li id={"UseCases"}>Early access to information: NFT holders will also have early access to information and
updates about the assets they represent, giving them a competitive advantage and the
opportunity to make informed decisions about their future investments. </li>

                              <li>Pre-mint opportunity: Our NFTs also provide holders with the opportunity to participate in
pre-mint sales of new NFTs, allowing them to get in on the ground floor of promising new
assets. </li>

                              <li>Right to say in decision-making processes: As mentioned in the technical overview, our NFTs
will give holders the right to participate in the collective decision-making process for the
assets they represent. This will allow NFT holders to have a say in the management and
direction of their assets and ensure that their interests are taken into account. </li>

                              <p>Overall, these use cases will provide NFT holders with a range of benefits that go beyond simply
owning a digital asset. By holding one of our NFTs, members will be able to enjoy an exclusive
community, have early access to information and pre-mint opportunities, and have a say in the
decision-making processes for their assets. </p>
                        </div>
                        <div id={styles.Economics}>
                              <h3>Economics:</h3>
                              
                              <p>The 12 Knights Collective has a strategic economic model in place to ensure that revenue generated
from the sale of NFTs is used in a fair and transparent manner. This model prioritizes the protection
of NFT holders, community impact, project development, and promoting the growth and awareness
of our NFT ecosystem. </p>

                              <p id={"Economics"}>The funds generated from the revenue, after deducting the value-added tax, will be allocated as
follows: 50% of revenue will be allocated towards deposit insurance, to provide protection for NFT
holders in the event that something goes wrong with the digital asset they represent, such as loss or
damage. 20% of revenue will be directed towards the first charity project chosen through a
democratic process, based on its potential impact and value to the community. 15% of revenue will
be set aside for project development, including research and development, marketing and other
expenses to improve our NFT ecosystem. 9% of revenue will go towards PR and marketing efforts to
increase awareness and adoption of our NFTs. 6% of revenue will be allocated to events and
community-building activities like meetups and conferences. </p>

                              <p>Our first NFT pre-sale will take place on our website and later available on the open sea marketplace.
The economic model ensures a fair and transparent approach towards utilizing revenue that
prioritizes the needs of NFT holders and the community, while driving the growth and sustainability
of the NFT ecosystem. </p>
                        </div>
                        <div id={styles.Roadmap}>
                              <h3>Roadmap:</h3>
                                    <p>
                                    Our NFT project has several key goals that we hope to achieve over the coming months and years.
Here is our roadmap: 
                                    </p>
                                    <li>
                                    Create a 120 member exclusive collective: Our first goal is to create an exclusive collective of
120 members who will have the right to participate in the collective decision-making process
for our NFTs. This will provide a solid foundation for our NFT ecosystem and ensure that the
interests of NFT holders are taken into account. 

                                    </li>
                                    <li  id={"Roadmap"}>
                                    Create a real charity company: Our second goal is to create a real charity company that
operates under the concept of the “right to say” for our collective members. This will allow
NFT holders to have a say in the management and direction of the charity and ensure that
their interests are taken into account. 
                                    </li>
                                    <li>
                                    . Create our first real asset NFT: Our third goal is to create our first real asset NFT, which will
be backed up by the revenue of a real company. This will provide a new level of stability and
value to our NFTs, making them a more attractive option for investors and collectors.
                                    </li>
                                    <li>
                                    Create new standard regulations: Finally, our fourth goal is to create new standard
regulations under which our NFT concept can be multiplied. This will provide a clear and
transparent framework for the creation and management of future NFTs and ensure that
our NFT ecosystem continues to grow and thrive. 
                                    </li>
                                    <p>Overall, our roadmap is designed to help us achieve our goal of creating a new way for NFTs to be
used as a form of real asset with the potential for loyalties. By following this roadmap, we believe that we can create a more sustainable and valuable NFT market that provides real value to our
members and investors. 
</p>
                        </div>
                        <div id={styles.Team}
                        >
                              <h3 className={styles.importantheading}
                              
                              >Team:</h3>

                              <p>Our team is led by M.Lee, the founder of the project. M.Lee is a multi-entrepreneur with a solid
track record of success in a variety of industries. He brings a wealth of experience and strategic
insight to the project and is committed to ensuring that the project is a success. </p>

                              <p>Overseeing the project is F.Dorn, our project supervisor. F.Dorn has extensive knowledge of
blockchain technology and NFTs, and has been involved in the development and deployment of a
number of blockchain-based projects. Her expertise will be invaluable in ensuring that the project is
completed on time and to the highest standards. </p>

                              <p id={"Team"}>IY.Chang and SG.Lee are our two project managers. They have a wealth of experience in project
management and will be responsible for coordinating the efforts of the various team members. They
will work closely with F.Dorn and M.Lee to ensure that the project is completed on schedule and
within budget. </p>

                              <p>Finally, we have an IT member N.Wenzel with expertise in both blockchain technology and
programming NFTs. He will be responsible for the technical aspects of the project, including the
development and deployment of the NFT platform. His experience with blockchain technology and
programming will be essential in ensuring that the platform is both secure and user-friendly.
</p>

                              <p>Together, we are a dynamic and driven team, dedicated to pushing the boundaries of what is
possible with NFTs. We are excited to see where this technology takes us and invite you to join us on
this journey. </p>
                        </div>
                        <div id={styles.conclusion}>

                              <h3 className={styles.importantheading}
                              >Conclusion:</h3>

                              <p>In conclusion, Non-Fungible Tokens (NFTs) represent a major breakthrough in digital asset
management, allowing for the creation and transfer of unique, one-of-a-kind digital assets in a
secure and transparent manner. The growth of the NFT market has been driven by the unique
characteristics of NFTs, including scarcity, uniqueness, and the ability to tokenize real-world assets. </p>

                              <p id={"Conclusion"}>We believe that NFTs have the potential to create new forms of value and new economic models,
and we are committed to staying at the forefront of this exciting and rapidly-evolving field. As the
technology and market continue to mature, we look forward to working with our members and
partners to create new and innovative ways to leverage the power of NFTs. </p>

                              <p>In summary, NFTs open new possibilities and opportunities in creative industry, finance and many
other fields, and with the right team and approach, it has the power to drive innovation and change
in many areas. We are excited to be part of this journey and look forward to what the future holds
for NFTs. </p>

                        </div>
                        <div id={styles.disclaimer}>

                              <h3 className={styles.importantheading}
                              id={"Disclaimer"}
                              >Disclaimer:</h3>

                              <p>This white paper is for informational purposes only and does not constitute an offer or solicitation to
buy or sell any securities, NFTs or other investment products. Any investment in NFTs or other
securities is subject to risk and may result in the loss of all or some of your investment. The
information provided is not intended to be, and should not be relied on as, investment advice or a
recommendation. We do not endorse or promote any NFTs or other securities or investment
products mentioned in this white paper. It is important to conduct your own research and consult
with a qualified professional before making any investment decisions. </p>

                        </div>

                  </div>

            </div>
            
      )
}

export default Whitepaper