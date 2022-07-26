import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Welcome to Rufflife</title>
        <meta name="description" content="Welcome to Rufflife" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Welcome to Rufflife
    </div>
  )
}

export default Home
