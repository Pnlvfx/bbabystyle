import Image from 'next/image'
import { LOGO } from '../config/config'

const LoadingSession = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Image priority src={LOGO} width={56} height={56} alt="LOADING_LAYOUT" />
    </div>
  )
}

export default LoadingSession
