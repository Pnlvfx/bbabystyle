import Link from 'next/link'
import { useState } from 'react'
import { CgFileDocument } from 'react-icons/cg'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useModals } from '../../../../auth/modal/ModalsProvider'
import styles from '../../usermenu.module.css'

const UserPoliciesButton = () => {
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
      <button className={`box-border block h-10 w-full border-none ${styles.active}`} onClick={triggerDropdown}>
        <span className="flex h-full items-center px-5" tabIndex={-1}>
          <span className="mr-3 h-5 w-5">
            <CgFileDocument className="h-5 w-5 align-middle" />
          </span>
          <span className="w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left text-[14px] font-medium leading-[18px]">
            Terms & Policies
          </span>
          <RiArrowDownSLine className={`icon ${isOpen ? 'rotate-180' : 'rotate-0'} ${styles.rotateIcon}`} />
        </span>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} mb-3 border-b border-bbaby-border pb-3`}>
        <Link href={'/policies/user-agreement'} className={`${styles.userPoliciesLink} ${styles.active}`} onClick={closeDropdown}>
          User Agreement
        </Link>
        <Link href={'/policies/privacy-policy'} className={`${styles.userPoliciesLink} ${styles.active}`} onClick={closeDropdown}>
          Privacy Policy
        </Link>
      </div>
    </>
  )
}

export default UserPoliciesButton
