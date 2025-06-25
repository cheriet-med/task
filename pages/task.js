import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/new-header';
import Hero from '@/components/Hero';
import StakeForm from '@/components/StakeForm';
import Newsletter from '@/components/Newsletter';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';






export default function Home() {

  return (
    <div className='lg:px-16 xl:px-64'>
      <Head>
        <title>GoldPulseX - Next-Generation Blockchain Platform</title>
        <meta name="description" content="A Next-Generation Blockchain Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Header/>

        {/* Main Content */}
        <main className="px-8 py-12">
          {/* Hero Section */}
       <Hero/>
          {/* Trading Section */}
        <StakeForm/>

          {/* FAQ Section */}
        <FAQ/>

          {/* Pricing Plans */}
        <Pricing/>
          {/* Newsletter and Services */}
      <Newsletter/>
        </main>
   
        </div>
  );
}
