import { FC, Fragment } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Box, Container, Flex, Button, Link, Heading } from '@chakra-ui/react'

interface IProps {
  bgColor: string
  links: { name: string; path: string; weight?: string }[]
}

const DesktopNavbar: FC<IProps> = ({ links, bgColor }) => {
  const router = useRouter()

  return (
    <Flex
      h={28}
      top={0}
      as="nav"
      w="full"
      zIndex={10}
      pos="fixed"
      align="center"
      bgColor={bgColor}
      d={{ base: 'none', xl: 'flex' }}
    >
      <Container
        d="flex"
        justifyContent="space-between"
        minW={{ lg: '6xl', '4xl': '8xl' }}
      >
        <NextLink href="/" passHref>
          <Link _focus={{ outline: 'none' }} _hover={{ outline: 'none' }}>
            <Heading
              fontSize={24}
              letterSpacing={2}
              textTransform="uppercase"
              color={bgColor == 'white' ? 'gray.900' : 'white'}
            >
              Ocha
            </Heading>
          </Link>
        </NextLink>

        <Box>
          <Flex align="center">
            {links.map((item, idx) => (
              <Fragment key={item.name}>
                <NextLink href={item.path} passHref>
                  <Link
                    fontWeight={item.weight || 300}
                    fontSize={{ base: 'sm', xl: 'md' }}
                    _hover={{ hover: 'none' }}
                    _focus={{ outline: 'none' }}
                    rel="noreferrer"
                    color={bgColor == 'white' ? 'gray.900' : 'white'}
                    {...(router.pathname === item.path
                      ? {
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
            <NextLink
              href="https://cleaners.ochaclean.com/create-account"
              passHref
            >
              <Link
                _hover={{ hover: 'none' }}
                _focus={{ outline: 'none' }}
                rel="noreferrer"
              >
                <Button
                  ml={4}
                  py={6}
                  px={6}
                  color="white"
                  rounded="sm"
                  fontWeight={300}
                  borderWidth={0.5}
                  borderColor={'#fff'}
                  colorScheme="buttonDarkScheme"
                  _focus={{ outline: 'none', bg: '#000009' }}
                  _hover={{ bg: 'transparent', color: 'white' }}
                  fontSize={{ base: 'sm', xl: 'sm' }}
                >
                  Register as a cleaner
                </Button>
              </Link>
            </NextLink>
          </Flex>
        </Box>
      </Container>
    </Flex>
  )
}

export default DesktopNavbar
