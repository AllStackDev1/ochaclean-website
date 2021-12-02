import { FC } from 'react'
import { Box, Icon, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { Reload, User, Speed, Wallet } from 'theme/Icons'

const whys = [
  {
    icon: Reload,
    title: 'Dedicated Customer Service',
    description:
      'pleasures to secure other greater pleasures, or else he endures'
  },
  {
    icon: User,
    title: ' Top Rated Cleaners',
    description:
      'Tracking, than just a financial ins assets that are-driven qualified'
  },
  {
    icon: Speed,
    title: ' We’re Faster',
    description: 'when our power of choice is untrammelled and when nothing'
  },
  {
    icon: Wallet,
    title: 'Pay as you go',
    description:
      'with righteous indignation and dislike men who are so beguiled'
  },
  {
    icon: Speed,
    title: 'Transparent Pricing',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus'
  }
]

const WhyUs: FC = () => {
  return (
    <Box pos={'relative'} minH={96} overflow="hidden">
      <Box
        pos="absolute"
        w={{ base: '100%', xl: '60%' }}
        bg="#000"
        right={{ base: 0, xl: -20 }}
        minH={'full'}
        top={0}
        transform={{ base: 'skew(0deg, 0)', xl: 'skew(9deg, 0)' }}
      ></Box>
      <Grid
        gap={12}
        pos={'relative'}
        top={0}
        left={0}
        py={16}
        px={12}
        w={'full'}
        h={'full'}
        templateColumns={{ xl: 'repeat(3, 1fr)' }}
      >
        <Box
          as={GridItem}
          p={12}
          h={{ base: 72, xl: 'full' }}
          bg={'#fff'}
          shadow="md"
        >
          <Heading as={'h4'} fontSize={48}>
            Why Us?
          </Heading>
          <Text mt={6} fontWeight={500}>
            SaaS product is an internet software that all users have access to
          </Text>
        </Box>
        {whys.map(item => (
          <Box
            key={item.title}
            x
            as={GridItem}
            p={12}
            gap={6}
            h={{ base: 72, xl: 64 }}
            bg={'#fff'}
            shadow={{ base: 'md' }}
          >
            <Icon as={item.icon} boxSize={10} />
            <Text fontWeight={'bold'} mt={10} fontSize={20}>
              {item.title}
            </Text>
            <Text fontWeight={300} mt={3}>
              {item.description}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default WhyUs
