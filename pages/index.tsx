import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import CustomerJpurney from '../components/home/customer_journey/customerJournet'
import Hero from '../components/home/hero/hero'
import Navbar from '../components/navbar/navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to Rufflife</title>
        <meta name="description" content="Welcome to Rufflife" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div>
        <Hero></Hero>
      </div>
      <div>
      <CustomerJpurney></CustomerJpurney>
      </div>
    </>
  )
}

export default Home
