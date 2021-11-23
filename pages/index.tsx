import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/Home/Hero'
import Review from '@components/Home/Review'
import Hiw from '@components/Home/Hiw'
import Services from '@components/Home/Services'
const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Hiw />
      <Review />
      <Services />
    </Layout>
  )
}

export default Home
