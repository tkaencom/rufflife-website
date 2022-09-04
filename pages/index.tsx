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
        <meta name="description" content="Our comprehensive solution includes delivery of Pet care, Food, Grooming & Health service as a packaged experience on a scheduled basis for the well-being of your pet." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
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
