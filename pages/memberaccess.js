import Head from 'next/head'

import MbHomepage from '../components/MbHomepage'
import Footer from '../components/Footer'

// Alchemy SDK

// If(response == true){
// const memberaccess = document.querySelector(#memberaccess)
// memberaccess.style.display = "flex"
// }else {
// const memberaccess = document.querySelector(#memberaccess)
// memberaccess.style.display = "none"     
//}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twelve Knights - The Gathering</title>
        <meta name="description" content="Twelve Knights NFT Project Whitepaper" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

            <div id='memberaccess'>
                  <MbHomepage />
            </div>
      
      <Footer />

    </div>
  )
}
