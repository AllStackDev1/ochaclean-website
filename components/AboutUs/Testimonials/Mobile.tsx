import { FC } from 'react'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { ArrowCircle } from 'theme/Icons'

const Testimonials: FC = () => {
  return (
    <Box
      h={{ xl: 125 }}
      w="full"
      bgColor="#F9FAFB"
      d={{ base: 'flex', xl: 'none' }}
    >
      <Flex
        px={{ base: 4 }}
        justifyContent="space-between"
        flexDir="row"
        h="full"
      >
        <Box>
          <Icon as={ArrowCircle} boxSize={20} transform="rotate(270deg)" />
        </Box>
        <Box>
          <Icon as={ArrowCircle} boxSize={20} transform="rotate(90deg)" />
        </Box>
      </Flex>
      <Box w="50%" h="full" bgColor="white"></Box>
      <Flex
        right={0}
        bottom={0}
        w={{ xl: '85%' }}
        bgColor="white"
        py={{ xl: 28 }}
        px={{ base: 6 }}
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
        <Flex mt={8} pb={6}>
          <Box
            borderWidth={3}
            borderColor="gray.700"
            rounded="full"
            w={28}
            h={28}
          />
          <Box ml={12}>
            <Text fontWeight={700} mt={4}>
              Nathalie Grossman
            </Text>
            <Text fontSize={14}>Sales Manager at National Cellular</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Testimonials
