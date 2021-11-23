import { FC } from 'react'
import {
  Box,
  Icon,
  Flex,
  Grid,
  Text,
  GridItem,
  Image,
  Link
} from '@chakra-ui/react'
import { Arrow } from 'theme/Icons'
import ReviewBox from './ReviewBox'
import { GReview } from 'theme/Icons'
const Reviews: FC = () => {
  return (
    <Box mt={24}>
      <Flex
        as={Grid}
        templateColumns={{ xl: 'repeat(6, 1fr)' }}
        mb={12}
        align="center"
      >
        <Box as={GridItem}>
          <Flex
            direction={'column'}
            justifyContent={'space-around'}
            minH={48}
            ml={20}
            mr={16}
          >
            <Flex
              h={12}
              w={12}
              rounded={'full'}
              cursor="pointer"
              bg="gray.050"
              align="center"
              justify="center"
            >
              <Icon as={Arrow} />
            </Flex>

            <Flex
              h={12}
              w={12}
              rounded={'full'}
              cursor="pointer"
              bg="gray.050"
              align="center"
              justify="center"
            >
              <Icon as={Arrow} transform={'rotate(180deg)'} />
            </Flex>
          </Flex>
        </Box>
        <Box as={GridItem}>
          <Flex>
            <ReviewBox {...{ mr: 4 }} />
            <ReviewBox {...{ mr: 4 }} />
            <ReviewBox {...{ mr: 4 }} />
            <ReviewBox {...{ mr: 4 }} />
          </Flex>
        </Box>
      </Flex>
      <Flex justify="center">
        <Box>
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
