import { FC } from 'react'
import {
  Box,
  Text,
  Link,
  Grid,
  Image,
  Heading,
  GridItem,
  Container,
  Divider
} from '@chakra-ui/react'

const CTA: FC = () => {
  return (
    <Box w="full" pt={{ xl: 24 }} pos="relative" bgColor="#F4F5FA">
      <Container w="full" minW={{ lg: '7xl', '4xl': '8xl' }}>
        <Grid templateColumns={{ xl: '50% 50%' }}>
          <GridItem d="flex" alignItems="center" justifyContent="space-between">
            <Box w={{ xl: 80 }}>
              <Heading fontWeight={700} fontSize={{ xl: '45px' }}>
                Download our mobile app
              </Heading>
              <Text mt={{ xl: 2 }}>
                The first list that you see on the next screen is your last
              </Text>
            </Box>
            <Divider
              borderWidth={1}
              borderColor="gray.300"
              orientation="vertical"
              h={{ xl: 20 }}
            />
            <Box>
              <Link href="#">
                <Image h={12} src="/images/playstore.png" />
              </Link>
              <Box my={2} />
              <Link href="#">
                <Image h={12} src="/images/appstore.png" />
              </Link>
            </Box>
          </GridItem>
          <GridItem d="flex" pos="relative" justifyContent="flex-end">
            <Box pos="absolute" bottom={0} left={20}>
              <Image src="/images/phone-2.png" />
            </Box>
            <Box>
              <Image src="/images/phone-1.png" />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default CTA
