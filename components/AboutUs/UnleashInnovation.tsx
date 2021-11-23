import { FC } from 'react'
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Grid,
  GridItem
} from '@chakra-ui/react'

const UnleashInnovation: FC = () => {
  return (
    <Flex
      w="full"
      h={132}
      bgSize="cover"
      color="white"
      px={{ xl: 28 }}
      py={{ xl: 20 }}
      bgImage="./images/unleash-bg.png"
    >
      <Grid templateColumns={{ xl: '50% 50%' }}>
        <GridItem d="flex" alignItems="center">
          <Box>
            <Image src="/images/lady-pc.png" />
          </Box>
        </GridItem>
        <GridItem d="flex" justifyContent="center" flexDir="column">
          <Box w={{ xl: 110 }}>
            <Flex mb={4} align="center" justify="space-between" w={44}>
              <Box h={0.5} w={5} borderWidth={1} borderColor="gray.100" />
              <Text fontSize="lg">Lorem ipsum dior</Text>
            </Flex>
            <Heading
              fontWeight={400}
              fontSize={{ xl: '40px' }}
              lineHeight={{ xl: '56px' }}
            >
              Unleash innovation with connected payments lorerm ispum..
            </Heading>
          </Box>
          <Box w={{ xl: '95%' }} mt={4} textAlign="justify">
            <Text fontSize={{ xl: 'lg' }} lineHeight={{ xl: '36px' }}>
              Full financial visibility, with your other bank accounts and
              credit cards all in one place. Get interest on your money,
              personalised budgeting and much more.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default UnleashInnovation
