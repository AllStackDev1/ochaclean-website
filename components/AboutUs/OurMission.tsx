import { FC } from 'react'
import { Box, Text, Heading, Container } from '@chakra-ui/react'

const OurMission: FC = () => {
  return (
    <Box w="full" py={{ xl: 40 }} bgColor="#F8F3F3">
      <Container w="full" minW={{ lg: '6xl', '4xl': '8xl' }}>
        <Box w="full">
          <Heading
            fontWeight={400}
            fontSize={{ xl: '43px' }}
            lineHeight={{ xl: '1.5em' }}
            textDecoration="underline"
            textUnderlineOffset="10px"
            textDecorationThickness="3px"
          >
            Our Mission
          </Heading>
        </Box>
        <Box mt={4}>
          <Text w={120} fontSize={{ xl: 'lg' }} lineHeight={{ xl: '28px' }}>
            Full financial visibility, with your other bank accounts and credit
            cards all in one place. Get interest on your money, personalised
            budgeting and much more.
          </Text>
          <Box mt={4} />
          <Text fontSize={{ xl: 'lg' }} lineHeight={{ xl: '28px' }}>
            At Ochaclean, our mission is to thrill our clients each and every
            time they walk through their front door. We want you to always see
            your home at its best; a place to live your life each day, without
            worrying about who’s going to clean up afterward. That’s our job.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default OurMission
