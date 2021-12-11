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
      '“We’ve had bad experiences with call centers. I started with one rep to see how it worked and am continuing to grow my team.”'
  },
  {
    user: 'Eric Abbey',
    title: 'Fullstack Developer',
    description:
      '“Through clean, I hired my own remote team that I have complete control over. I started with one rep to see how it worked and am continuing to grow my team.”'
  },
  {
    user: 'Kojo Q',
    title: 'Accountant',
    description:
      '“We’ve had bad experiences with call centers. Through clean, I hired my own remote team that I have complete control over. ”'
  }
]

const TestimonialItem: FC<{
  data: ITestimonialList
  itemIndex: number
  active: number
}> = ({ data, itemIndex, active }) => (
  <Flex
    right={0}
    bottom={0}
    w={{ xl: '100%' }}
    bgColor="white"
    px={{ base: 8, xl: 56 }}
    flexDir="column"
    d={itemIndex === active ? 'flex' : 'none'}
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
  </Flex>
)

const TestimonialImage: FC<{
  data: ITestimonialList
  itemIndex: number
  active: number
}> = ({ itemIndex, active }) => (
  <Box
    rounded="full"
    w={28}
    h={28}
    borderWidth={itemIndex === active ? 3 : 0}
    borderColor="black"
    p={1}
    mr={4}
  >
    <Box bg="gray.300" w="100%" h="100%" rounded="full"></Box>
  </Box>
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
        zIndex={4}
      ></Box>
      <Box d={{ xl: 'none' }}>
        <Flex
          px={{ base: 4 }}
          justifyContent="space-between"
          flexDir="row"
          h="full"
        >
          {currentSlide > 0 && (
            <Box onClick={() => handleClick(-1)}>
              <Icon as={ArrowCircle} boxSize={20} transform="rotate(270deg)" />
            </Box>
          )}

          {TestimonialList.length - 1 > currentSlide && (
            <Box onClick={() => handleClick(1)}>
              <Icon as={ArrowCircle} boxSize={20} transform="rotate(90deg)" />
            </Box>
          )}
        </Flex>
      </Box>
      <Flex
        as={Grid}
        templateColumns={{ base: 'repeat(1, 1fr)', xl: 'repeat(6, 1fr)' }}
        zIndex={10}
        pos="relative"
        align="center"
      >
        <Box as={GridItem} colSpan={2}>
          <Flex
            pl={{ xl: 16 }}
            justify="center"
            flexDir="column"
            w="50%"
            h="full"
            d={{ base: 'none', xl: 'block' }}
            mr={12}
            mt={52}
          >
            {currentSlide > 0 ? (
              <Box mb={12} onClick={() => handleClick(-1)}>
                <Icon as={ArrowCircle} boxSize={20} />
              </Box>
            ) : (
              <Box mb={12} color="gray.300">
                <Icon as={ArrowCircle} boxSize={20} />
              </Box>
            )}

            <Box my={4} />
            {TestimonialList.length - 1 > currentSlide ? (
              <Box onClick={() => handleClick(1)}>
                <Icon as={ArrowCircle} boxSize={20} transform="scaleY(-1)" />
              </Box>
            ) : (
              <Box color="gray.300">
                <Icon as={ArrowCircle} boxSize={20} transform="scaleY(-1)" />
              </Box>
            )}
          </Flex>
        </Box>
        <Box as={GridItem} colSpan={4}>
          <Box mt={{ xl: 52 }} pt={{ xl: 24 }} pb={24} bg="white">
            <Flex flexDir="column">
              {TestimonialList.map((item, i) => (
                <TestimonialItem
                  data={item}
                  itemIndex={i}
                  active={currentSlide}
                />
              ))}
            </Flex>
            <Flex px={{ base: 8, xl: 56 }} mt={8}>
              {TestimonialList.map((item, i) => (
                <TestimonialImage
                  data={item}
                  itemIndex={i}
                  active={currentSlide}
                />
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Testimonials
