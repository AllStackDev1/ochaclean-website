import { FC } from 'react'
import { Container, Flex, Box, Image, Text, Link } from '@chakra-ui/react'

const Hero: FC = () => {
  return (
    <Box
      as={Flex}
      w="full"
      h={110}
      bgSize="cover"
      justifyContent="space-around"
      bgImage="./images/about-us-hero.png"
    >
      <Container w="full" minW={{ lg: '7xl', '4xl': '8xl' }}>
        <Flex
          as={Flex}
          w="full"
          justifyContent="space-around"
          align={'center'}
          mt={{ base: 40, xl: 20 }}
        >
          <Box color="white" colSpan={3}>
            <Text fontSize={{ sm: 36, md: 40 }}>Frequently Ask Question’s</Text>
            <Text fontSize={20}>
              Haven’t found what you’re looking for? or{' '}
              <Link color="orangered">Contact us</Link>
            </Text>
          </Box>
          <Box colSpan={2} d={{ base: 'none', xl: 'block' }}>
            <Image src={'./images/toy.png'} boxSize={80} />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Hero
