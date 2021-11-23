import { FC } from 'react'
import { Box, Icon, Flex, Text, Link, Container } from '@chakra-ui/react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const HowItWorks: FC = () => {
  return (
    <Box borderBottomWidth={1} borderColor={'gray.100'}>
      <Container minW={{ lg: '6xl', '4xl': '8xl' }} mt={4}>
        <Box py={6} px={8}>
          <Flex justifyContent="space-between">
            <Text fontSize={18} fontWeight="bold">
              How Ocha Works for You
            </Text>
            <Link
              color="rgba(39, 110, 241, 1)"
              textDecoration="underline"
              fontSize={18}
              fontWeight={'bold'}
            >
              Book Cleaners -
            </Link>
          </Flex>
          <Flex mt={8} justifyContent="space-between">
            <Box>
              <Flex align="center">
                <Flex
                  align="center"
                  justify="center"
                  w={12}
                  h={12}
                  rounded="full"
                  shadow={'lg'}
                  color="rgba(39, 110, 241, 1)"
                  mr={3}
                >
                  1
                </Flex>
                <Text fontWeight={500}>Enter your postcode</Text>
              </Flex>
            </Box>
            <Box>
              <Icon
                as={HiOutlineArrowNarrowRight}
                boxSize={7}
                color="gray.400"
                mt={2}
              />
            </Box>
            <Box>
              <Flex align="center">
                <Flex
                  align="center"
                  justify="center"
                  w={12}
                  h={12}
                  rounded="full"
                  shadow={'lg'}
                  color="rgba(39, 110, 241, 1)"
                  mr={3}
                >
                  2
                </Flex>
                <Text fontWeight={500}>Choose your cleaning plan</Text>
              </Flex>
            </Box>
            <Box>
              <Icon
                as={HiOutlineArrowNarrowRight}
                boxSize={7}
                color="gray.400"
                mt={2}
              />
            </Box>
            <Box>
              <Flex align="center">
                <Flex
                  align="center"
                  justify="center"
                  w={12}
                  h={12}
                  rounded="full"
                  shadow={'lg'}
                  color="rgba(39, 110, 241, 1)"
                  mr={3}
                >
                  3
                </Flex>
                <Text fontWeight={500}>Pay securely online</Text>
              </Flex>
            </Box>
            <Box>
              <Icon
                as={HiOutlineArrowNarrowRight}
                boxSize={7}
                color="gray.400"
                mt={2}
              />
            </Box>
            <Box>
              <Flex align="center">
                <Flex
                  align="center"
                  justify="center"
                  w={12}
                  h={12}
                  rounded="full"
                  shadow={'lg'}
                  color="rgba(39, 110, 241, 1)"
                  mr={3}
                >
                  4
                </Flex>
                <Text fontWeight={500}>Enter your postcode</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default HowItWorks
