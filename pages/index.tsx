import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/Home/Hero/Index'
import Review from '@components/Home/Review'
import Services from '@components/Home/Services'
import HowItWorks from '@components/Home/HowItWorks'
import WhyUs from '@components/Home/WhyUs'
import CTA from '@components/CTA'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Review />
      <Services />
      <WhyUs />
      <CTA />
    </Layout>
  )
}

export default Home
