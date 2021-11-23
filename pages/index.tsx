import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/Home/Hero'
import HowItWorks from '@components/Home/HowItWorks'
import CTA from '@components/CTA'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <CTA />
    </Layout>
  )
}

export default Home
