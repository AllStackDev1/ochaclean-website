import { FC, useState } from 'react'
import { Box, Flex, Icon, Text, Grid, GridItem } from '@chakra-ui/react'
import { ArrowCircle } from 'theme/Icons'

interface ITestimonialList {
  user: string
  title: string
  description: string
}

const TestimonialList = [
  {
    user: 'Nathalie Grossman',
    title: 'Sales Manager at National Cellular',
    description:
      '“We’ve had bad experiences with call centers. Through clean, I hired my own remote team that I have complete control over. I started with one rep to see how it worked and am continuing to grow my team.”'
  }
]

const TestimonialItem: FC<{ data: ITestimonialList }> = ({ data }) => (
  <Flex
    right={0}
    bottom={0}
    w={{ xl: '100%' }}
    bgColor="white"
    py={{ xl: 28 }}
    px={{ base: 8, xl: 56 }}
    flexDir="column"
  >
    <Box>
      <Text fontSize={{ xl: '26px' }} lineHeight="43px" linespacing="0.0115em">
        {data.description}
      </Text>
    </Box>
    <Flex
      mt={5}
      align={{ base: 'start', xl: 'center' }}
      fontSize="md"
      direction={{ base: 'column', xl: 'row' }}
    >
      <Text fontWeight={700}>{data.user}</Text>
      <Text ml={{ xl: 4 }}>{data.title}</Text>
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
)

const Testimonials: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const handleClick = (direction: number) => {
    const len = TestimonialList ? TestimonialList.length : 0
    setCurrentSlide(prev => {
      const translate = (len + prev + direction) % len
      return isNaN(translate) ? prev : translate
    })
  }

  return (
    <Box bgColor="#F9FAFB" h={{ xl: 125 }} pos="relative">
      <Box
        w="50%"
        h="full"
        bgColor="white"
        right={0}
        pos="absolute"
        zindex={4}
      ></Box>
      <Box d={{ xl: 'none' }}>
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
      </Box>
      <Flex
        as={Grid}
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(6, 1fr)' }}
        zindex={10}
        pos="relative"
        align="center"
      >
        <Box as={GridItem} colSpan={1}>
          <Flex
            pl={{ xl: 16 }}
            justify="center"
            flexDir="column"
            w="50%"
            h="full"
            d={{ base: 'none', xl: 'block' }}
          >
            <Box onClick={() => handleClick(-1)}>
              <Icon as={ArrowCircle} boxSize={20} />
            </Box>
            <Box my={4} />
            <Box onClick={() => handleClick(1)}>
              <Icon as={ArrowCircle} boxSize={20} transform="scaleY(-1)" />
            </Box>
          </Flex>
        </Box>
        <Box as={GridItem} colSpan={5}>
          <Flex flexDir="column">
            {TestimonialList.map(item => (
              <TestimonialItem data={item} />
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Testimonials
