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
      bgSize="contain"
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
          >
            24 Hours
          </Heading>
          <Heading
            fontSize={{ '2xl': 56 }}
            lineHeight={{ '2xl': '1.5em' }}
            mb={{ '2xl': 6 }}
            fontWeight={500}
            color="white"
          >
            Cleaning Platform
          </Heading>

          <Text fontSize={{ '2xl': 'xl' }} lineHeight={{ '2xl': '160%' }}>
            UK's first live database of Carers and Nurses. Recruit your
            permanent and temporary staff from our easy to use platform.
          </Text>
        </Box>

        <Box mt={{ '2xl': 10 }}>
          <Button
            py={8}
            px={10}
            rounded="xl"
            variant="solid"
            fontWeight={500}
            _focus={{ outline: 'none' }}
            colorScheme="brandPurple"
            fontSize={{ base: 'sm', '2xl': 'xl' }}
          >
            Join our waiting list
          </Button>
        </Box>
      </Flex>
      <Box pos="relative" w={{ '2xl': 120 }} h={{ '2xl': 125 }}></Box>
    </Flex>
  )
}

export default Hero
