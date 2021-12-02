import { FC } from 'react'
import React from 'react'
import { Box, Flex, Text, GridItem, Image, Link } from '@chakra-ui/react'
import ReviewBox from './ReviewBox'
import { motion } from 'framer-motion'
import ArrowButton from '../../Buttons/ArrowButton'
import { useMediaQuery } from 'react-responsive'

const MotionFlex = motion(Flex)
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

export interface IReviewList {
  user: {
    name: string
    title: string
  }
  desc: string
}

const reviewList: IReviewList[] = [
  {
    user: {
      name: 'Eric Abbey',
      title: 'Fullstack Developer at OurGhana'
    },
    desc: 'I’ve used before tidy choice which it was great, until a cleaner cancelled on me and they said couldn’t find anyone with my requirements which are a simple standard cleaning!'
  },
  {
    user: {
      name: 'Brian Lim',
      title: 'CEO at Emazing Group'
    },
    desc: 'I’ve used before tidy choice which it was great, until a cleaner cancelled on me and they said couldn’t find anyone with my requirements which are a simple standard cleaning!'
  },
  {
    user: {
      name: 'Chinedu Ekene',
      title: 'Fullstack Developer at GhanaPays'
    },
    desc: 'I’ve used before tidy choice which it was great, until a cleaner cancelled on me and they said couldn’t find anyone with my requirements which are a simple standard cleaning!'
  },
  {
    user: {
      name: 'Lim Brain',
      title: 'CEO at Emazing Group'
    },
    desc: 'I’ve used before tidy choice which it was great, until a cleaner cancelled on me and they said couldn’t find anyone with my requirements which are a simple standard cleaning!'
  },
  {
    user: {
      name: 'Lim Brain K',
      title: 'CEO at Emazing Group'
    },
    desc: 'I’ve used before tidy choice which it was great, until a cleaner cancelled on me and they said couldn’t find anyone with my requirements which are a simple standard cleaning!'
  }
]

const Reviews: FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0)
  const isMobile = useMediaQuery({ query: '(max-width: 680px' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1004px' })

  const handleClick = (direction: number) => {
    const len = reviewList ? reviewList.length : 0
    setCurrentSlide(prev => {
      const translate = (len + prev + direction) % len
      return isNaN(translate) ? prev : translate
    })
  }

  return (
    <Box mt={24}>
      <ArrowButton
        d={{ base: 'flex', xl: 'none' }}
        handleClick={handleClick}
        current={currentSlide}
        length={reviewList ? reviewList.length : 0}
        cols={isTabletOrMobile ? (isMobile ? 1 : 2) : 3}
      />
      <Flex templateColumns={{ xl: 'repeat(6, 1fr)' }} mb={12} align="center">
        <Box as={GridItem} colSpan={1}>
          <ArrowButton
            d={{ base: 'none', xl: 'flex' }}
            handleClick={handleClick}
            current={currentSlide}
            length={reviewList ? reviewList.length : 0}
            cols={isTabletOrMobile ? (isMobile ? 1 : 2) : 3}
          />
        </Box>
        <Box as={GridItem} colSpan={5} overflow="hidden">
          <MotionFlex
            as={GridItem}
            animate={{
              x: `-${(96 / (isTabletOrMobile ? 5 : 4)) * currentSlide}em`,
              transition: { ...transition }
            }}
          >
            {reviewList.map(item => (
              <ReviewBox key={item?.user?.name} {...{ mr: 4 }} data={item} />
            ))}
          </MotionFlex>
        </Box>
      </Flex>
      <Flex justify="center">
        <Box mb={12}>
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
