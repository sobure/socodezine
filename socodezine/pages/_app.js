import Launch from '../components/Launch/Launch.js';
import Nav from '../components/Nav/Nav.js';
import MobileNav from '../components/MobileNav/MobileNav.js'
import Head from 'next/head'
import './pagestyles/styles.css'
import {
  BrowserView,
  MobileView
} from 'react-device-detect'



export default function MyApp({ Component, pageProps }) {

  return (
    <div className='body appBar'>
      <Head>
        <title>So&Co</title>
      </Head>
      <BrowserView>
        <Nav></Nav>
      </BrowserView>
      <MobileView>
        <MobileNav></MobileNav>
      </MobileView>
      <Component {...pageProps} />
    </div>
  );
}
