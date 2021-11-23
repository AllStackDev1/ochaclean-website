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

const Hero: FC = () => {
  return (
    <Flex
      w="full"
      pl={{ '2xl': 32 }}
      pb={{ '2xl': 24 }}
      justifyContent="space-between"
      bgImage="./images/Hero.png"
      bgSize="cover"
    >
      <Flex mt={28} flexDir="column" justifyContent="">
        <Box w={{ '2xl': 122 }}>
          <Heading
            fontSize={{ '2xl': 52 }}
            lineHeight={{ '2xl': '1.5em' }}
            mb={{ '2xl': 6 }}
            mt={12}
            fontWeight={500}
            color="white"
            borderBottom={'2px solid white'}
            display="inline-block"
          >
            24 Hours
          </Heading>
          <Heading
            fontSize={{ '2xl': 52 }}
            lineHeight={{ '2xl': '1.5em' }}
            mb={{ '2xl': 6 }}
            fontWeight={500}
            color="white"
            borderBottom={'2px solid white'}
            display="inline-block"
          >
            Cleaning Platform
          </Heading>

          <Text
            mt={8}
            fontSize={{ '2xl': 'lg' }}
            lineHeight={{ '2xl': '160%' }}
            color="white"
            fontWeight={500}
          >
            Free up your closers by tapping into a pool of qualified appointment
            setters ready to take over the tedious tasks of qualifying, warming,
            and appointment setting.
          </Text>
        </Box>

        <Box mt={{ '2xl': 12 }} position="relative">
          <Flex
            h={16}
            width={'125%'}
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
              bg="black"
              w={32}
              rounded="none"
              color="white"
              fontSize="md"
              fontWeight={500}
              py={6}
              px={16}
            >
              Book cleaner
            </Button>
          </Flex>
          <Flex mt={24}>
            <Box mr={4}>
              <Image src="./images/playstore.png" h={12} />
            </Box>
            <Box>
              <Image src="./images/appstore.png" h={12} />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box pos="relative" w={{ '2xl': 120 }} h={{ '2xl': 125 }} mr={32} mt={32}>
        <Image src="./images/home.png" position="absolute" zIndex={5} />
      </Box>
    </Flex>
  )
}

export default Hero
