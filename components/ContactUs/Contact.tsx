import { FC } from 'react'
import { Text, Box, Grid, GridItem, Heading, Icon } from '@chakra-ui/react'
import { Home, Envelope } from 'theme/Icons'

const Contact: FC = () => {
  return (
    <Box py={24} px={20}>
      <Heading fontWeight={500} mb={2}>
        Contact us
      </Heading>
      <Box w={48} h={'2px'} bg="black" mb={6}></Box>
      <Grid templateColumns={{ xl: 'repeat(2, 1fr)' }}>
        <Box as={GridItem} mb={12}>
          <Icon as={Envelope} boxSize={10} mb={4} />
          <Text fontWeight={500} fontSize={20} mb={2}>
            Contact Info
          </Text>
          <Text fontWeight={400} fontSize={20} mb={2}>
            support@ochaclean.com
          </Text>
          <Text fontWeight={400} fontSize={20} mb={2}>
            +234(0)979-7937-734
          </Text>
          <Text fontWeight={400} fontSize={20} mb={1}>
            155 E 26th St, 5B Ethosa Lekki Phase II
          </Text>
        </Box>
        <Box as={GridItem} mb={12}>
          <Icon as={Home} boxSize={10} mb={4} />
          <Text fontWeight={500} fontSize={20} mb={2}>
            Business hours are in WAT
          </Text>
          <Text fontWeight={400} fontSize={20} mb={2}>
            Monday — Friday 8am — 9pm
          </Text>
          <Text fontWeight={400} fontSize={20} mb={2}>
            Saturday — Sunday 9am — 6pm
          </Text>
        </Box>
      </Grid>
    </Box>
  )
}

export default Contact
