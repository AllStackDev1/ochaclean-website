import { Flex, Box, Text, Container } from '@chakra-ui/react'
import { FC, useState } from 'react'
import ContentWrapper from '@components/Wrappers/ContentWrapper'
const Content: FC = () => {
  return (
    <Box>
      <ContentWrapper>
        <Flex justify="end">
          <Box bg={'black'} px={12} py={6} w={'2xl'} color="white" mb={36}>
            <Text fontWeight={500}>
              Are you ready to schedule your first cleaning?
            </Text>
            <Text fontWeight={300}>
              Or maybe you still have some questions?
            </Text>
          </Box>
        </Flex>
      </ContentWrapper>
      <Box p={16} bg="rgba(233, 233, 233, 1)">
        <Container minW={{ xl: '4xl' }}>
          <Box>
            <Text fontSize={36} mb={1}>
              We have all the answers
            </Text>
            <Box w={48} h={'2px'} bg="black" mb={6}></Box>
          </Box>
          <Text w={'100%'}>
            Our Support Team is here for you. Give us a call or shoot us an
            email during business hours for immediate support. You can also
            reach out to us after hours and we will get back to you as quickly
            as possible.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}

export default Content
