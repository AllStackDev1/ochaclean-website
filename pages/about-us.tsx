import type { NextPage } from 'next'
import Layout from '@components/Layout'
import Hero from '@components/AboutUs/Hero'
import CTA from '@components/CTA'
import CleaningPeople from '@components/AboutUs/CleaningPeople'
import UnleashInnovation from '@components/AboutUs/UnleashInnovation'
import OurMission from '@components/AboutUs/OurMission'
import Testimonials from '@components/AboutUs/Testimonials'

const AboutUs: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <CleaningPeople />
      <UnleashInnovation />
      <OurMission />
      <Testimonials />
      <CTA />
    </Layout>
  )
}

export default AboutUs
