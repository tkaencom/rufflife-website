import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BriefDescription from '../components/home/brief_description/briefDescription'
import CustomerJpurney from '../components/home/customer_journey/customerJournet'
import Hero from '../components/home/hero/hero'
import SubscriptionPlan from '../components/home/subscription_pan/SubscriptionPlan'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to Rufflife</title>
        <meta name="description" content="Welcome to Rufflife" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div>
      <Hero/>
      </div>
      <div>
      <CustomerJpurney/>
      </div>
      <div>
      <SubscriptionPlan/>
      </div>
      <div>
      <BriefDescription/>
      </div>
      <div>
      <Footer/>
      </div>
    </>
  )
}

export default Home
