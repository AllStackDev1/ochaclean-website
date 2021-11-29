import { FC } from 'react'
import DesktopHowItWorks from './Desktop'
import MobileHowItWorks from './Mobile'

const HowItWorks: FC = () => {
  return (
    <>
      <DesktopHowItWorks />
      <MobileHowItWorks />
    </>
  )
}

export default HowItWorks
