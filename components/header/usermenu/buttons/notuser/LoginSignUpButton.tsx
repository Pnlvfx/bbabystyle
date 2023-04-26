import Link from 'next/link'
import { MouseEvent } from 'react'
import { BiLogIn } from 'react-icons/bi'
import { useModals } from '../../../../auth/modal/ModalsProvider'
import styles from '../../usermenu.module.css'

const LoginSignUpButton = () => {
  const modals = useModals()

  const openAuthModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    modals.setShowAuth('login')
    modals.setShowUserMenu(false)
  }

  return (
    <Link href={'/'} className={styles.link1Y} onClick={openAuthModal}>
      <BiLogIn className="icon absolute left-3 top-[13px]" />
      <div className="inline-block align-middle text-[14px] font-medium leading-[18px]">Log In / Sign Up</div>
    </Link>
  )
}

export default LoginSignUpButton
