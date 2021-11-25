import { FC } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Icon,
  Link,
  Text,
  Flex,
  Grid,
  Heading,
  Divider,
  GridItem,
  Container
} from '@chakra-ui/react'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Footer: FC = () => {
  const useFulLink = [
    {
      title: 'About',
      link: '/#'
    },
    {
      title: 'Blog',
      link: '/#'
    },
    {
      title: 'Privacy',
      link: '/#'
    },
    {
      title: 'Terms',
      link: '/#'
    }
  ]

  const socials = [
    {
      link: '#',
      icon: AiFillInstagram
    },
    {
      link: '#',
      icon: FaFacebookF
    },
    {
      link: '#',
      icon: FaTwitter
    }
  ]
  return (
    <Box w="full" pb={{ xl: 5 }} pt={{ base: 5, xl: 20 }} bgColor="white">
      <Container
        color="gray.900"
        textAlign="center"
        fontSize={{ base: 'sm', xl: 'md' }}
        minW={{ lg: '7xl', '4xl': '8xl' }}
      >
        <Grid templateColumns={{ lg: '40% 20% 20% 20%' }} gap={6} mb={12}>
          <GridItem textAlign="left">
            <NextLink href="/" passHref>
              <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
                <Text
                  fontWeight="black"
                  fontSize={24}
                  letterSpacing={2}
                  textTransform={'uppercase'}
                >
                  Ocha
                </Text>
              </Link>
            </NextLink>
            <Box w={{ lg: 80 }}>
              <Text>
                Ocha clean is a company dedicated to eliminating unnecessary
                delays in everyday life.
              </Text>
            </Box>
          </GridItem>

          <GridItem textAlign="left">
            <Heading
              fontSize={{ base: 'sm', xl: 'md' }}
              fontFamily="UberMove"
              fontWeight={600}
            >
              Useful Links
            </Heading>
            <Flex mt={2} direction="column">
              {useFulLink.map((e, i) => (
                <NextLink key={i} href={e.link} passHref>
                  <Link
                    py={2}
                    lineHeight="24px"
                    _focus={{ outline: 'none' }}
                    _hover={{ outline: 'none' }}
                  >
                    {e.title}
                  </Link>
                </NextLink>
              ))}
            </Flex>
          </GridItem>

          <GridItem textAlign="left">
            <Heading
              fontSize={{ base: 'sm', xl: 'md' }}
              fontFamily="UberMove"
              fontWeight={600}
            >
              Contact
            </Heading>
            <Flex mt={2} direction="column">
              <Text>Get in touch:</Text>
              <Link
                py={2}
                lineHeight="24px"
                href="mailto:hello@ochaclean.com"
                _focus={{ outline: 'none' }}
                _hover={{ outline: 'none' }}
              >
                hello@ochaclean.com
              </Link>
              <Link
                py={2}
                lineHeight="24px"
                href="tel:+2348146720092"
                _focus={{ outline: 'none' }}
                _hover={{ outline: 'none' }}
              >
                0814 672 0092
              </Link>
            </Flex>
          </GridItem>

          <GridItem textAlign="left">
            <Heading
              fontSize={{ base: 'sm', xl: 'md' }}
              fontFamily="UberMove"
              fontWeight={600}
            >
              Connect
            </Heading>
            <Flex
              mt={4}
              mb={4}
              w={36}
              justify={'space-between'}
              align={{ base: 'center', lg: 'flex-end' }}
            >
              {socials.map(e => (
                <Link
                  href={e.link}
                  _focus={{ outline: 'none' }}
                  _hover={{ outline: 'none' }}
                >
                  <Flex
                    rounded="full"
                    borderWidth={1}
                    borderColor="gray.300"
                    justify="center"
                    align="center"
                    w={10}
                    h={10}
                  >
                    <Icon as={e.icon} boxSize={5} />
                  </Flex>
                </Link>
              ))}
            </Flex>
          </GridItem>
        </Grid>
        <Divider borderColor="gray.300" />
        <Box py={{ base: 4, xl: 8 }} textAlign="left">
          <Text>© 2021 Ocha. All rights reserved</Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
