import { FC } from 'react'
import { Box, Flex, Grid, Text, GridItem, Image, Link } from '@chakra-ui/react'
import ReviewBox from './ReviewBox'
import ArrowButton from '../../Buttons/ArrowButton'

const Reviews: FC = () => {
  return (
    <Box mt={24}>
      <ArrowButton d={{ base: 'flex', xl: 'none' }} />
      <Flex
        as={Grid}
        templateColumns={{ xl: 'repeat(6, 1fr)' }}
        mb={12}
        align="center"
      >
        <ArrowButton d={{ base: 'none', xl: 'flex' }} />
        <Flex as={GridItem}>
          {[1, 2, 3, 4].map(e => (
            <ReviewBox key={e} {...{ mr: 4 }} />
          ))}
        </Flex>
      </Flex>
      <Flex justify="center">
        <Box mb={12}>
          <Flex mb={4}>
            <Text>Rated 4.2 out of 5 based on 309 </Text>
            <Image src={'./images/G-review.png'} h={6} mt={0} ml={2} />
          </Flex>
          <Flex justify="center">
            <Link color="rgba(39, 110, 241, 1)" fontWeight={600}>
              See our 149 reviews on{' '}
            </Link>
            <Image src={'./images/Trustpilot_logo.png'} h={10} mt={-2} ml={2} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Reviews
