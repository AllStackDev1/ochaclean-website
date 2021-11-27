import { FC } from 'react'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { ArrowCircle } from 'theme/Icons'

const Testimonials: FC = () => {
  return (
    <Flex h={{ xl: 125 }} pos="relative" w="full" bgColor="#F9FAFB">
      <Flex pl={{ xl: 16 }} justify="center" flexDir="column" w="50%" h="full">
        <Box>
          <Icon as={ArrowCircle} boxSize={20} />
        </Box>
        <Box my={4} />
        <Box>
          <Icon as={ArrowCircle} boxSize={20} transform="scaleY(-1)" />
        </Box>
      </Flex>
      <Box w="50%" h="full" bgColor="white"></Box>
      <Flex
        right={0}
        bottom={0}
        w={{ xl: '85%' }}
        bgColor="white"
        pos="absolute"
        py={{ xl: 28 }}
        px={{ xl: 56 }}
        flexDir="column"
      >
        <Box>
          <Text
            fontSize={{ xl: '26px' }}
            lineHeight="43px"
            linespacing="0.0115em"
          >
            “We’ve had bad experiences with call centers. Through clean, I hired
            my own remote team that I have complete control over. I started with
            one rep to see how it worked and am continuing to grow my team.”
          </Text>
        </Box>
        <Flex mt={5} align="center" fontSize="md">
          <Text fontWeight={700}>Nathalie Grossman</Text>
          <Text ml={4}>Sales Manager at National Cellular</Text>
        </Flex>
        <Box mt={8}>
          <Box
            borderWidth={3}
            borderColor="gray.700"
            rounded="full"
            w={28}
            h={28}
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Testimonials
