import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>Spotlight</title>
        <meta name='description' content='spotlight.com - Where fashion speaks !'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
  </>
}

export default MyApp
