import { FC, Fragment } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Container, Flex, Button, Link, Text } from '@chakra-ui/react'

const links = [
  { name: 'About us', path: '/about-us' },
  { name: 'FAQ', path: '/faq ' },
  { name: 'Support', path: '/support' },
  { name: 'Signup/Login', path: '/auth', weight: 'bold' }
]

const Nav: FC = () => {
  const router = useRouter()

  return (
    <Flex
      h={28}
      top={0}
      as="nav"
      w="full"
      zIndex={10}
      align="center"
      pos="absolute"
    >
      <Container
        d="flex"
        justifyContent="space-between"
        minW={{ lg: '7xl', '4xl': '8xl' }}
      >
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Text
              fontWeight="black"
              fontSize={24}
              letterSpacing={2}
              color="white"
              textTransform={'uppercase'}
            >
              Ocha
            </Text>
          </Link>
        </NextLink>

        <Box>
          <Flex align="center">
            {links.map((item, idx) => (
              <Fragment key={item.name}>
                <NextLink href={item.path} passHref>
                  <Link
                    fontWeight={item.weight || 400}
                    fontSize={{ base: 'sm', xl: 'md' }}
                    _hover={{ hover: 'none' }}
                    _focus={{ outline: 'none' }}
                    rel="noreferrer"
                    color="white"
                    {...(router.pathname === item.path
                      ? {
                          color: 'brand.purple.200',
                          fontWeight: 700
                        }
                      : '')}
                  >
                    {item.name}
                  </Link>
                </NextLink>
                {links.length !== idx + 1 && <Box mx={4} />}
              </Fragment>
            ))}
            <Link
              href="/sign-up"
              _hover={{ hover: 'none' }}
              _focus={{ outline: 'none' }}
              rel="noreferrer"
            >
              <Button
                ml={4}
                bg="#000"
                py={6}
                px={6}
                color="white"
                rounded="sm"
                variant="solid"
                fontWeight={600}
                borderWidth={1}
                borderColor={'#000'}
                _focus={{ outline: 'none', bg: '#000009' }}
                _hover={{
                  borderWidth: 1,
                  borderColor: '#000',
                  bg: 'transparent',
                  color: 'black'
                }}
                fontSize={{ base: 'sm', xl: 'sm' }}
              >
                Register as a cleaner
              </Button>
            </Link>
          </Flex>
        </Box>
      </Container>
    </Flex>
  )
}

export default Nav
