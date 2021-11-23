import { FC } from 'react'
import {
  Box,
  Icon,
  Flex,
  Image,
  Text,
  Heading,
  GridItem,
  Container
} from '@chakra-ui/react'
import { IoStar } from 'react-icons/io5'
import avatar from 'public/images/avatar.png'

interface IReviewBox {
  [rest: string]: any
}
const ReviewBox: FC<IReviewBox> = ({ ...rest }) => {
  return (
    <Box w={96} minH={48} borderWidth={2} rounded={'md'} p={8} {...rest}>
      <Flex mb={8}>
        <Image
          src={'./images/avatar.png'}
          objectFit="cover"
          boxSize="70px"
          rounded="full"
        />
        <Box mt={2} ml={2}>
          <Heading fontSize={16} fontWeight="bold">
            Brain Lim
          </Heading>
          <Text mt={1} color={'gray.400'} fontWeight={500}>
            CEO AT EMAZING GROUP
          </Text>
        </Box>
      </Flex>
      <Text fontWeight={500}>
        I’ve used before tidy choice which it was great, until a cleaner
        cancelled on me and they said couldn’t find anyone with my requirements
        which are a simple standard cleaning!
      </Text>
      <Flex mt={4}>
        {['x', 'x', 'x', 'x', 'b'].map((item, i) => (
          <Icon
            as={IoStar}
            mr={1}
            boxSize={5}
            color={
              item === 'b' ? 'rgba(196, 196, 196, 1)' : ' rgba(81, 178, 126, 1)'
            }
          />
        ))}
      </Flex>
    </Box>
  )
}

export default ReviewBox