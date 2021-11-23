import { FC } from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const Hero: FC = () => {
  return (
    <Flex
      w="full"
      h={110}
      pl={{ '2xl': 52 }}
      pb={{ '2xl': 24 }}
      bgSize="cover"
      justifyContent="space-between"
      bgImage="./images/about-us-hero.png"
    >
      <Flex mt={28} flexDir="column" justify="center">
        <Heading
          color="white"
          fontSize={{ '2xl': '62px' }}
          lineHeight={{ '2xl': '1.5em' }}
          fontWeight={400}
          borderBottom="2px solid white"
        >
          About Us and Our Mission
        </Heading>
      </Flex>
    </Flex>
  )
}

export default Hero
