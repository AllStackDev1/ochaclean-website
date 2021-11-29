import { FC } from 'react'
import {
  Box,
  Tab,
  Icon,
  Flex,
  Grid,
  Text,
  Tabs,
  Image,
  Heading,
  TabList,
  TabPanel,
  GridItem,
  TabPanels
} from '@chakra-ui/react'
import { IoCheckmark } from 'react-icons/io5'

const Services: FC = () => {
  const service = [
    'Dusting all accessible surfaces',
    'Dusting all accessible surfaces',
    'Wiping mirrors and glass fixtures',
    'Wiping appliances',
    'Folding clothes and arranging things',
    'Wiping doors, door handles, and switches',
    'Cleaning lighting appliances, and chandeliers',
    'Taking out rubbish'
  ]
  return (
    <Box pos="relative" mt={12} minH={120}>
      <Box pos="absolute" d={{ base: 'none', xl: 'block' }}>
        <Image src="./images/abstract.png" boxSize={48} />
      </Box>
      <Heading as="h3" textAlign="center" fontWeight={500}>
        What is included in Ocha cleaning?
      </Heading>
      <Flex justify="center" mt={12}>
        <Tabs maxW={{ lg: '6xl', '4xl': '4xl' }} align="center">
          <TabList border={'none'}>
            <Box
              as={Tab}
              color="gray.500"
              borderColor="transparent"
              _selected={{ color: '#000', outline: 'none' }}
              _focus={{ outline: 'none' }}
            >
              Home Cleaning
            </Box>
            <Box
              as={Tab}
              color="gray.500"
              borderColor="transparent"
              _selected={{ color: '#000', outline: 'none' }}
              _focus={{ outline: 'none' }}
            >
              Office Cleaning
            </Box>
          </TabList>
          <TabPanels>
            <TabPanel mt={8}>
              <Text fontWeight={500} fontSize={14}>
                Our standard cleaning service includes everything you need to
                get your home in order as quickly as possible. You can book
                additional services when you make your booking.
              </Text>
              <Grid templateColumns={{ xl: 'repeat(2, 1fr)' }} mt={12}>
                {service.map(item => (
                  <Flex as={GridItem} align="center" mb={6} key={item}>
                    <Flex
                      w={5}
                      h={5}
                      rounded={'full'}
                      bg={'rgba(39, 110, 241, 1)'}
                      align="center"
                      justify="center"
                      mr={4}
                    >
                      <Icon as={IoCheckmark} color="white" />
                    </Flex>
                    <Text fontWeight={500}>{item}</Text>
                  </Flex>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel mt={8}>
              <Text fontWeight={500} fontSize={14}>
                You can book additional services when you make your booking. Our
                standard cleaning service includes everything you need to get
                your home in order as quickly as possible.
              </Text>
              <Grid templateColumns={{ xl: 'repeat(2, 1fr)' }} mt={12}>
                {service.map(item => (
                  <Flex key={item} as={GridItem} align="center" mb={6}>
                    <Flex
                      w={5}
                      h={5}
                      rounded={'full'}
                      bg={'rgba(39, 110, 241, 1)'}
                      align="center"
                      justify="center"
                      mr={4}
                    >
                      <Icon as={IoCheckmark} color="white" />
                    </Flex>
                    <Text fontWeight={500}>{item}</Text>
                  </Flex>
                ))}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  )
}

export default Services
