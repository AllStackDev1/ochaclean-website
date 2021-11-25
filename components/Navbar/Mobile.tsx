import { FC } from 'react'
import NextLink from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  Box,
  Text,
  Flex,
  Link,
  Fade,
  Button,
  Heading,
  Divider,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'

interface IProps {
  bgColor: string
  links: { name: string; path: string; weight?: string }[]
}

const MobileNavbar: FC<IProps> = ({ links, bgColor }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex
      h={24}
      px={2}
      as="nav"
      w="full"
      shadow="sm"
      pos="fixed"
      zIndex={100}
      align="center"
      bgColor={bgColor}
      justify="space-between"
      d={{ base: 'flex', xl: 'none' }}
      color={bgColor == 'white' ? 'gray.900' : 'white'}
    >
      <Box>
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
      </Box>

      <Box>
        <IconButton
          aria-label="toggle menu"
          onClick={() => onToggle()}
          icon={isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          bg="transparent"
          role="button"
        />
        <Box pos="relative">
          <Fade in={isOpen}>
            {isOpen && (
              <Box
                w={52}
                right={4}
                shadow="lg"
                zIndex={10}
                rounded="md"
                pos="absolute"
                bgColor="white"
                color="gray.900"
              >
                <Box py={2}>
                  {links.map((m, idx) => (
                    <Box>
                      <NextLink key={idx} href={m.path} passHref>
                        <Link>
                          <Flex justify="end" pr={5} py={3}>
                            <Text fontWeight={700}>{m.name}</Text>
                          </Flex>
                        </Link>
                      </NextLink>
                      <Divider />
                    </Box>
                  ))}
                  <Box pt={2}>
                    <NextLink
                      href={`${process.env.NEXT_APP_APP_URL || ''}/register`}
                      passHref
                    >
                      <Link
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
                          fontWeight={300}
                          borderWidth={1}
                          borderColor={'#000'}
                          _focus={{ outline: 'none', bg: '#000009' }}
                          fontSize="sm"
                        >
                          Register as a cleaner
                        </Button>
                      </Link>
                    </NextLink>
                  </Box>
                </Box>
              </Box>
            )}
          </Fade>
        </Box>
      </Box>
    </Flex>
  )
}

export default MobileNavbar
