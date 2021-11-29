import { Box, Icon, Flex } from '@chakra-ui/react'
import { Arrow } from 'theme/Icons'

const ArrowButton = ({ ...rest }) => {
  return (
    <Box {...rest}>
      <Flex
        direction={{ base: 'row', xl: 'column' }}
        justifyContent={{ base: 'space-between', xl: 'space-around' }}
        minH={{ base: 16, xl: 48 }}
        ml={{ base: 4, xl: 20 }}
        mr={{ base: 4, xl: 16 }}
        w={{ base: 'full', xl: 'auto' }}
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
  )
}

export default ArrowButton
