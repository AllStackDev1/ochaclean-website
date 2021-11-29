import { FC } from 'react'
import { Box, Grid, Flex, Text, Button, Container } from '@chakra-ui/react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const MobileHowItWorks: FC = () => {
  return (
    <Box
      borderBottomWidth={1}
      borderColor={'gray.100'}
      d={{ base: 'flex', xl: 'none' }}
    >
      <Container minW={{ lg: '6xl', '4xl': '8xl' }} mt={4}>
        <Box py={6} px={8}>
          <Text fontSize={18} fontWeight="bold" textAlign="center">
            How Ocha Works for You
          </Text>
          <Grid
            mt={8}
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          >
            <Box>
              <Flex align="center" mb={6}>
                <Flex
                  borderWidth={1}
                  align="center"
                  justify="center"
                  w={12}
                  h={12}
                  rounded="full"
                  shadow={'lg'}
                  color="rgba(39, 110, 241, 1)"
                  mr={8}
                >
                  1
                </Flex>
                <Text fontWeight={500}>Enter your postcode</Text>
              </Flex>
            </Box>

            <Box>
              <Flex align="center" mb={6}>
                <Flex
                  borderWidth={1}
                  align="center"
                  justify="center"
                  w={12}
                  h={12}
                  rounded="full"
                  shadow={'lg'}
                  color="rgba(39, 110, 241, 1)"
                  mr={8}
                >
                  2
                </Flex>
                <Text fontWeight={500}>Choose your cleaning plan</Text>
              </Flex>
            </Box>

            <Box>
              <Flex align="center" mb={6}>
                <Flex
                  borderWidth={1}
                  align="center"
                  justify="center"
                  w={12}
                  h={12}
                  rounded="full"
                  shadow={'lg'}
                  color="rgba(39, 110, 241, 1)"
                  mr={8}
                >
                  3
                </Flex>
                <Text fontWeight={500}>Pay securely online</Text>
              </Flex>
            </Box>

            <Box>
              <Flex align="center" mb={6}>
                <Flex
                  align="center"
                  justify="center"
                  w={12}
                  h={12}
                  rounded="full"
                  shadow={'lg'}
                  color="rgba(39, 110, 241, 1)"
                  mr={8}
                >
                  4
                </Flex>
                <Text fontWeight={500}>Enter your postcode</Text>
              </Flex>
            </Box>
          </Grid>
          <Flex justify="center">
            <Button
              bg="rgba(39, 110, 241, 1)"
              fontSize={16}
              fontWeight={'normal'}
              mt={8}
              color="white"
            >
              Book Cleaners
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default MobileHowItWorks
