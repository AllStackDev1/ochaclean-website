import { FC } from 'react'
import {
  Box,
  Icon,
  Flex,
  Grid,
  Text,
  Heading,
  GridItem,
  Container
} from '@chakra-ui/react'
import { Arrow } from 'theme/Icons'
import ReviewBox from './ReviewBox'

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
    </Box>
  )
}

export default Reviews
