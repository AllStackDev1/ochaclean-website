import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/AboutUs/Hero'
import CTA from '@components/CTA'
import CleaningPeople from '@components/AboutUs/CleaningPeople'

const GetStarted: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <CleaningPeople />
      <CTA />
    </Layout>
  )
}

export default GetStarted
