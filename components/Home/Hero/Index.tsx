import { FC } from 'react'
import {
  Box,
  Icon,
  Flex,
  Text,
  Image,
  Input,
  Button,
  Heading,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

const HeroDesktop: FC = () => {
  return (
    <Flex
      w="full"
      px={{ base: 4, sm: 12, '2xl': 32 }}
      pb={{ '2xl': 24 }}
      justifyContent="space-between"
      bgImage="./images/Hero.png"
      bgSize="cover"
    >
      <Flex mt={28} flexDir="column" justifyContent="">
        <Box w={{ '2xl': 122 }}>
          <Heading
            mt={{ base: 6, xl: 12 }}
            color="white"
            fontWeight={500}
            mb={{ base: 6 }}
            d={{ base: 'block', xl: 'inline-block' }}
            fontSize={{ base: 32, md: 48, xl: '68px' }}
            textDecoration="underline"
            textUnderlineOffset="10px"
            textDecorationThickness="3px"
            lineHeight={{ xl: '88px' }}
          >
            24 Hours
          </Heading>
          <Heading
            color="white"
            mb={{ '2xl': 6 }}
            fontWeight={500}
            display="inline-block"
            fontSize={{ base: 32, md: 48, xl: '68px' }}
            textDecoration="underline"
            textUnderlineOffset="10px"
            textDecorationThickness="3px"
            lineHeight={{ xl: '88px' }}
          >
            Cleaning Platform
          </Heading>

          <Text
            mt={8}
            fontSize={{ base: 16, '2xl': 'lg' }}
            lineHeight={{ '2xl': '160%' }}
            color="white"
            fontWeight={500}
            mb={{ base: 4, xl: 0 }}
          >
            Free up your closers by tapping into a pool of qualified appointment
            setters ready to take over the tedious tasks of qualifying, warming,
            and appointment setting.
          </Text>
        </Box>

        <Box mt={{ '2xl': 12 }} position="relative">
          <Flex
            h={16}
            width={{ base: '100%', xl: '125%' }}
            bg="white"
            align="center"
            p={4}
            position="absolute"
            zIndex={6}
          >
            <InputGroup>
              <InputLeftElement
                children={<Icon as={FiSearch} color="gray.300" boxSize={6} />}
              />
              <Input
                placeholder="Enter post Code"
                _focus={{ outline: 'none' }}
                border={'none'}
                fontWeight={500}
              />
            </InputGroup>
            <Button
              py={6}
              color="white"
              rounded="none"
              fontWeight={500}
              px={{ base: 8, xl: 16 }}
              w={{ base: 24, xl: 32 }}
              colorScheme="buttonDarkScheme"
              fontSize={{ base: 12, xl: 'md' }}
            >
              Book cleaner
            </Button>
          </Flex>
          <Flex mt={24} mb={4}>
            <Box mr={4}>
              <Image src="./images/playstore.png" h={12} />
            </Box>
            <Box>
              <Image src="./images/appstore.png" h={12} />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box pos="relative" w={{ '2xl': 120 }} h={{ '2xl': 125 }} mt={32}>
        <Image src="./images/home.png" position="absolute" zIndex={5} />
      </Box>
    </Flex>
  )
}

export default HeroDesktop
