import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/FAQ/Hero'
import Content from '@components/FAQ/Content'
import CTA from '@components/CTA'

const AboutUs: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Content />
      <CTA />
    </Layout>
  )
}

export default AboutUs
