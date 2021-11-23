import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/Home/Hero'
import Review from '@components/Home/Review'
import AnswerYes from '@components/Home/AnswerYes'
import Hire from '@components/Home/Hire'
import CTA from '@components/CTA'
import Hiw from '@components/Home/Hiw'
const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Hiw />
      <Review />
    </Layout>
  )
}

export default Home
