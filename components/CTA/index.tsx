import { FC } from 'react'
import {
  Box,
  Text,
  Link,
  Flex,
  Grid,
  Image,
  Heading,
  GridItem,
  Container,
  Divider
} from '@chakra-ui/react'

const CTA: FC = () => {
  return (
    <Box w="full" pt={{ base: 10, xl: 24 }} pos="relative" bgColor="#F4F5FA">
      <Container w="full" minW={{ lg: '7xl', '4xl': '8xl' }}>
        <Grid templateColumns={{ xl: '50% 50%' }}>
          <GridItem
            d="flex"
            flexDir={{ base: 'column', xl: 'row' }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box mb={{ base: 5, xl: 0 }} w={{ xl: 80 }} textAlign="center">
              <Heading fontWeight={700} fontSize={{ base: '2xl', xl: '45px' }}>
                Download our mobile app
              </Heading>
              <Text mt={{ xl: 2 }} fontSize={{ xl: 'lg' }}>
                The first list that you see on the next screen is your last
              </Text>
            </Box>
            <Divider
              h={20}
              borderWidth={1}
              borderColor="gray.300"
              orientation="vertical"
              d={{ base: 'none', xl: 'block' }}
            />
            <Divider
              borderWidth={1}
              borderColor="gray.300"
              orientation="horizontal"
              d={{ base: 'block', xl: 'none' }}
            />
            <Flex my={{ base: 5, xl: 0 }} flexDir={{ xl: 'column' }}>
              <Link href="#">
                <Image h={12} src="/images/playstore.png" />
              </Link>
              <Box mx={{ base: 2, xl: 0 }} my={{ xl: 2 }} />
              <Link href="#">
                <Image h={12} src="/images/appstore.png" />
              </Link>
            </Flex>
          </GridItem>
          <GridItem d="flex" pos="relative" justifyContent="flex-end">
            <Box
              pos="absolute"
              w={{ base: '60%', xl: 'full' }}
              left={{ base: 0, xl: 20 }}
              bottom={0}
            >
              <Image src="/images/phone-2.png" />
            </Box>
            <Flex w={{ base: '60%', xl: 'full' }} justify={{ xl: 'flex-end' }}>
              <Image src="/images/phone-1.png" />
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default CTA
