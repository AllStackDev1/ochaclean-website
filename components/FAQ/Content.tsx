import { Box, Icon, Image } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { HiOutlinePlus, HiOutlineMinusSm } from 'react-icons/hi'
import ContentWrapper from '@components/Wrappers/ContentWrapper'

const Content: FC = () => {
  const Faqs = [
    {
      title:
        'How is the free Personal Plan different from the Personal Pro and Team Plans?',
      description:
        'Upgrade to the Personal Pro Plan for unlimited guests, or the Team Plan if you collaborate with the same group of people automatically. You can also review and remove inactive guests in Settings & Members.'
    },
    {
      title: 'What happens when I go over the guest limit on my Personal Plan?',
      description:
        'Upgrade to the Personal Pro Plan for unlimited guests, or the Team Plan if you collaborate with the same group of people automatically. You can also review and remove inactive guests in Settings & Members.'
    },
    {
      title: 'How do I try out the Team Plan for free?',
      description:
        'Upgrade to the Personal Pro Plan for unlimited guests, or the Team Plan if you collaborate with the same group of people automatically. You can also review and remove inactive guests in Settings & Members.'
    },
    {
      title: 'Can I use Notion for free?',
      description:
        'Upgrade to the Personal Pro Plan for unlimited guests, or the Team Plan if you collaborate with the same group of people automatically. You can also review and remove inactive guests in Settings & Members.'
    }
  ]

  const [clicked, setClicked] = useState(0)
  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(0)
    }
    setClicked(index)
  }

  interface IFaqItem {
    onToggle: () => void
    active: boolean
  }

  const FaqItem: FC<IFaqItem> = ({ onToggle, active }) => (
    <Box
      px={{ base: 6, xl: 12 }}
      py={6}
      w={{ base: '100%', xl: '4xl' }}
      borderBottomWidth={1}
      borderColor="gray.200"
      bg={'white'}
      pos="relative"
    >
      <Box pos={'absolute'} right={8} onClick={onToggle}>
        {active ? <Icon as={HiOutlineMinusSm} /> : <Icon as={HiOutlinePlus} />}
      </Box>
      <Box fontWeight={'bold'} w="60%">
        How is the free Personal Plan different from the Personal Pro and Team
        Plans?
      </Box>
      <Box
        mt={4}
        fontWeight={300}
        overflow="hidden"
        {...(!active ? { h: 0 } : {})}
      >
        Upgrade to the Personal Pro Plan for unlimited guests, or the Team Plan
        if you collaborate with the same group of people automatically. You can
        also review and remove inactive guests in Settings & Members.
      </Box>
    </Box>
  )

  return (
    <ContentWrapper>
      <Box w={{ base: '100%', xl: '3xl' }} mx={'auto'}>
        {Faqs.map((item, index) => (
          <FaqItem
            onToggle={() => handleToggle(index)}
            active={clicked === index}
          />
        ))}
      </Box>
    </ContentWrapper>
  )
}

export default Content
