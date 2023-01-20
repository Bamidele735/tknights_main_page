import Head from 'next/head'
import styles from '../styles/mainpages/FooterLinks.module.css'

import Footer from '../components/Footer'
import Header from '../components/Header'


// funktions 

const changeLangGer = () => {
  const eng = document.getElementById("eng");
  const ger = document.getElementById("ger");
  const buttonger = document.getElementById("buttonLangGer");
  const buttoneng = document.getElementById("buttonLangEng");


  buttoneng.style.display = "flex";
  buttonger.style.display = "none";
  eng.style.display = "none";
  ger.style.display = "flex";
}

const changeLangEng = () => {
  const eng = document.getElementById("eng");
  const ger = document.getElementById("ger");
  const buttonger = document.getElementById("buttonLangGer");
  const buttoneng = document.getElementById("buttonLangEng");

  buttoneng.style.display = "none";
  buttonger.style.display = "flex";
  eng.style.display = "flex";
  ger.style.display = "none";
}




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twelve Knights - The Gathering Impressum</title>
        <meta name="description" content="Twelve Knights NFT Project Whitepaper" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <h2>Twelve Knights - Impressum</h2>

        <button className={styles.button} id={"buttonLangGer"} onClick={changeLangGer}>Deutsch</button>
        <button className={styles.button} id={"buttonLangEng"} onClick={changeLangEng}
        style={{display: "none"}}
        >English</button>
      </Header>

      <div className={styles.ImpressumBody}>
                  <div id='ger' className={styles.ger_imp}>
                        <h1>Impressum</h1>

                        <div className={styles.DetailInfo}>

                              <h2>Angaben gemäß § 5 TMG</h2>
                              <p className={styles.DetailInfoText}>
                                    LP Service GmbH<br />
                                    Hasengasse 21<br />
                                    60311 Frankfurt am Main<br />
                                    <br />
                                    Handelsregister: HRB 116296<br />
                                    Registergericht: Frankfurt am Main<br /><br />
                              </p>
                              <h3>Vertreten durch:</h3>
                              <p>Min Lee</p>

                              <h2>Kontakt</h2>
                              <p className={styles.DetailInfoText}>
                                    Telefon: +49 176 1053 7671<br />
                                    E-Mail: support@12knights.team<br />
                              </p>

                              <h2>Umsatzsteuer-ID</h2>
                              <p className={styles.DetailInfoText}>
                                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                                    DE325641546<br />
                              </p>

                              <h2>Redaktionell verantwortlich</h2>
                              <p className={styles.DetailInfoText}>
                                    Min Lee<br />
                                    Hasengasse 21<br />
                                    60311 Frankfurt am Main<br />
                              </p>

                              <h2>Design, Konzeption & Technische Umsetzung:</h2>
                              <p className={styles.DetailInfoText}>
                                    Webdesign - Wenzel Natebus<br />
                                    <br />
                              </p>
                        </div>
                  </div>
                  <div id='eng' className={styles.eng_imp}>

                        <h1>Legal Notice</h1>

                        <div className={styles.DetailInfo}>

                              <h2>Legal Information</h2>
                              <p className={styles.DetailInfoText}>
                                    LP Service GmbH<br />
                                    Hasengasse 21<br />
                                    60311 Frankfurt am Main<br />
                                    <br />
                                    Commercial Register: HRB 116296<br />
                                    Registry Court: Frankfurt am Main<br /><br />
                              </p>
                              <h3>Represented by:</h3>
                              <p>Min Lee</p>

                              <h2>Contact</h2>
                              <p className={styles.DetailInfoText}>
                                    Telephone: +49 176 1053 7671<br />
                                    E-Mail: support@12knights.team<br />
                              </p>

                              <h2>VAT Registration Number</h2>
                              <p className={styles.DetailInfoText}>
                                    Value-Added Tax (VAT) identification number as per § 27a of the value added tax act:<br />
                                    DE325641546<br />
                              </p>

                              <h2>Editorially responsible</h2>
                              <p className={styles.DetailInfoText}>
                                    Min Lee<br />
                                    Hasengasse 21<br />
                                    60311 Frankfurt am Main<br />
                              </p>

                              <h2>Designed, concept & developed:</h2>
                              <p className={styles.DetailInfoText}>
                                    Webdesign - Wenzel Natebus<br />
                                    <br />
                              </p>
                        </div>
                  </div>
            
            </div>
      
      <Footer />

    </div>
  )
}
