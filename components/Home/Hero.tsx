import { FC } from 'react'
import { Box, Flex, Text, Image, Button, Heading } from '@chakra-ui/react'

const Hero: FC = () => {
  return (
    <Flex
      w="full"
      pl={{ '2xl': 24 }}
      pb={{ '2xl': 24 }}
      justifyContent="space-between"
      bgImage="./images/Hero.png"
      bgSize="cover"
    >
      <Flex mt={28} flexDir="column" justifyContent="">
        <Box w={{ '2xl': 122 }}>
          <Heading
            fontSize={{ '2xl': 56 }}
            lineHeight={{ '2xl': '1.5em' }}
            mb={{ '2xl': 6 }}
            mt={12}
            fontWeight={500}
            color="white"
            borderBottom={'2px solid white'}
            display="inline-block"
          >
            24 Hours
          </Heading>
          <Heading
            fontSize={{ '2xl': 56 }}
            lineHeight={{ '2xl': '1.5em' }}
            mb={{ '2xl': 6 }}
            fontWeight={500}
            color="white"
            borderBottom={'2px solid white'}
            display="inline-block"
          >
            Cleaning Platform
          </Heading>

          <Text
            mt={12}
            fontSize={{ '2xl': 'lg' }}
            lineHeight={{ '2xl': '160%' }}
            color="white"
            fontWeight={500}
          >
            Free up your closers by tapping into a pool of qualified appointment
            setters ready to take over the tedious tasks of qualifying, warming,
            and appointment setting.
          </Text>
        </Box>

        <Box mt={{ '2xl': 10 }}></Box>
      </Flex>
      <Box pos="relative" w={{ '2xl': 120 }} h={{ '2xl': 125 }}></Box>
    </Flex>
  )
}

export default Hero
