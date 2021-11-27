import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/ContactUs/Hero'
import Content from '@components/ContactUs/Content'
import CTA from '@components/CTA'
import Contact from '@components/ContactUs/Contact'
import Testimonials from '@components/AboutUs/Testimonials'

const AboutUs: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Content />
      <Contact />
      <Testimonials />
      <CTA />
    </Layout>
  )
}

export default AboutUs
