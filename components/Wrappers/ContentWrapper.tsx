import { Box, Image } from '@chakra-ui/react'
import { FC } from 'react'

const ContentWrapper: FC = ({ children }) => {
  return (
    <Box pos="relative" p={12} bg={'gray.50'}>
      <Box pos="absolute" right={0} top={0} w={56}>
        <Image src="./images/Rectangle 3843.png" />
      </Box>
      <Box pos="absolute" left={0} top={-24} w={56}>
        <Image src="./images/Rectangle 3842.png" />
      </Box>
      {children}
    </Box>
  )
}

export default ContentWrapper
