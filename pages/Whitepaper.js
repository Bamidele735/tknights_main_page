import Head from 'next/head'


import Footer from '../components/Footer'
import Whitepaper from '../components/Whitepaper'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twelve Knights - The Gathering Impressum</title>
        <meta name="description" content="Twelve Knights NFT Project Whitepaper" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <h2>Twelve Knights - Whitepaper</h2>
      </Header>
 
      <Whitepaper />
      
      <Footer />

    </div>
  )
}
