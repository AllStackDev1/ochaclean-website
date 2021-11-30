import { Box, Icon, Flex, BoxProps } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Arrow } from 'theme/Icons'

interface IProps extends BoxProps {
  handleClick: (item: number) => void
  current: number
  length: number
  cols: any
  controlIcons?: ReactNode[]
}

const ArrowButton: React.FC<IProps> = ({
  handleClick,
  current,
  length,
  cols,
  controlIcons,
  ...rest
}) => {
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
        {current > 0 ? (
          <Flex
            h={12}
            w={12}
            rounded={'full'}
            cursor="pointer"
            bg="gray.050"
            align="center"
            justify="center"
            onClick={() => handleClick(-1)}
          >
            {controlIcons ? controlIcons[0] : <Icon as={Arrow} />}
          </Flex>
        ) : (
          <Box></Box>
        )}

        {length - cols > current ? (
          <Flex
            h={12}
            w={12}
            rounded={'full'}
            cursor="pointer"
            bg="gray.050"
            align="center"
            justify="center"
            onClick={() => handleClick(1)}
          >
            {controlIcons ? (
              controlIcons[1]
            ) : (
              <Icon as={Arrow} transform={'rotate(180deg)'} />
            )}
          </Flex>
        ) : (
          <Box></Box>
        )}
      </Flex>
    </Box>
  )
}

export default ArrowButton
