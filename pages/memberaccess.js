import Head from 'next/head'

import MbHomepage from '../components/MbHomepage'
import Footer from '../components/Footer'

import { useEffect, useState } from 'react';
import Router from 'next/router';

export default function Memberaccess() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      async function checkToken() {
      // Check if the user has a valid token
      const token = sessionStorage.getItem('ujfijkjnkljhdshgiozg');
      if (!token) {
          // Redirect the user to the login page if they don't have a valid token
          Router.push('/');
      } else {
          setIsLoading(false);
      }
      }
      checkToken();
  }, []);

  if (isLoading) {
      return (<div>
        <Head>
          <title>Twelve Knights - The Gathering</title>
          <meta name="description" content="Twelve Knights NFT Project Whitepaper" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

          <div>
              <p>Authenticating...</p>
          </div>
        <Footer />

      </div>);
  } else {
      return (<div>
            <Head>
              <title>Twelve Knights - The Gathering</title>
              <meta name="description" content="Twelve Knights NFT Project Whitepaper" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            
                  <MbHomepage />
            
            <Footer />

          </div>)
  }
}
