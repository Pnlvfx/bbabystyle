'use client'

import Link from 'next/link'
import { useModals } from '../../auth/modal/ModalsProvider'
import { clientUrl } from '../../../config/config'

const LoginButtons = () => {
  const modals = useModals()
  return (
    <>
      <Link
        href={`${clientUrl}/account/register`}
        role={'button'}
        tabIndex={0}
        className="relative ml-1 flex min-h-[32px] w-auto min-w-[32px] items-center justify-center rounded-full border border-[#d7dadc] bg-transparent fill-white px-4 py-1 text-center text-[14px] font-bold leading-[17px] text-white lg:ml-4 lg:w-[120px]"
        onClick={(e) => {
          e.preventDefault()
          modals.setShowAuth('register')
        }}
      >
        <p>Sign Up</p>
      </Link>
      <Link
        href={`${clientUrl}/account/login`}
        role={'button'}
        tabIndex={0}
        className="relative ml-1 flex min-h-[32px] w-auto min-w-[32px] items-center justify-center rounded-full border-none bg-white px-4 py-1 text-center text-[14px] font-bold leading-[17px] text-black lg:ml-4 lg:w-[120px]"
        onClick={(e) => {
          e.preventDefault()
          modals.setShowAuth('login')
        }}
      >
        <p>Log In</p>
      </Link>
    </>
  )
}

export default LoginButtons
