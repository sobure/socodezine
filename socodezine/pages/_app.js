import Launch from "../components/Launch/Launch.js";
import Nav from "../components/Nav/Nav.js";
import Head from 'next/head'
import './pagestyles/styles.css'



export default function MyApp({ Component, pageProps }) {
  return (
    <div className="body">
      <Head>
        <title>So&Co</title>
      </Head>
      <Nav></Nav>
      <Component {...pageProps} />
    </div>
  );
}
