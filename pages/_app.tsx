import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/Header";
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>AMA Mazing Blog</title>
        <meta name="description" content="Demo blog made with next.js" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
      <Component {...pageProps} />
    </>
  )
}
