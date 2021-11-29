import { FC } from 'react'
import { Flex, Heading, Box, Image } from '@chakra-ui/react'

const HeroWrapperOne: FC<{ title: string }> = ({ title }) => {
  return (
    <Flex
      w="full"
      h={110}
      pl={{ '2xl': 52 }}
      pb={{ '2xl': 24 }}
      bgSize="cover"
      justifyContent="space-between"
      bgImage="./images/about-us-hero.png"
      pos="relative"
    >
      <Box pos="absolute" left={24} top={24}>
        <Image src="./images/Group 8119.png" boxSize={{ base: 24, xl: 48 }} />
      </Box>
      <Box pos="absolute" right={24} bottom={10}>
        <Image src="./images/Group 8119.png" boxSize={{ base: 24, xl: 48 }} />
      </Box>
      <Flex mt={28} flexDir="column" justify="center">
        <Heading
          color="white"
          fontSize={{ base: 32, '2xl': '62px' }}
          lineHeight={{ '2xl': '1.5em' }}
          fontWeight={400}
          px={{ base: 8, xl: 0 }}
        >
          {title}
        </Heading>
        <Box w={48} h={'3px'} bg="white" mb={6}></Box>
      </Flex>
    </Flex>
  )
}

export default HeroWrapperOne
