import Link from 'next/link'
import { useState } from 'react'
import { CgFileDocument } from 'react-icons/cg'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useModals } from '../../../../auth/modal/ModalsProvider'
import styles from '../../usermenu.module.css'

const TermsPoliciesButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const modals = useModals()

  const triggerDropdown = () => {
    setIsOpen(!isOpen)
  }

  const closeDropdown = () => {
    setIsOpen(false)
    modals.setShowUserMenu(false)
  }

  return (
    <>
      <button className={`${styles.button2K} h-10 border-none`} onClick={triggerDropdown}>
        <span className="absolute left-[-4px] box-border flex h-full w-full flex-row items-center px-5" tabIndex={-1}>
          <span className="mr-3 h-5 w-5">
            <CgFileDocument className="h-5 w-5 align-middle" />
          </span>
          <span className="w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left text-[14px] font-medium leading-[18px]">
            Terms & Policies
          </span>
          <RiArrowDownSLine className={`icon ${isOpen ? 'rotate-180' : 'rotate-0'} ${styles.rotateIcon}`} />
        </span>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <Link href={'/policies/user-agreement'} className={`${styles.policiesLink} ${styles.link1Y}`} onClick={closeDropdown}>
          User Agreement
        </Link>
        <Link href={'/policies/privacy-policy'} className={`${styles.policiesLink} ${styles.link1Y}`} onClick={closeDropdown}>
          Privacy Policy
        </Link>
      </div>
    </>
  )
}

export default TermsPoliciesButton
