import Link from 'next/link'
import { useModals } from '../../auth/modal/ModalsProvider'
import styles from './section1.module.css'
import { useState } from 'react'
import SwitchButton from '../../utils/buttons/switch/SwitchButton'

const Section1 = ({ session }: WithSession) => {
  const [onlineStatus, setOnlineStatus] = useState(false)

  const triggerOnlineStatus = () => {
    setOnlineStatus(!onlineStatus)
  }

  const modals = useModals()

  const closeDropdown = () => {
    modals.setShowUserMenu(false)
  }

  if (!session?.user) return null

  return (
    <div className="mb-3 border-b border-bbaby-border pb-3">
      <SwitchButton content="Online Status" extraClass={styles.active} checked={onlineStatus} callback={triggerOnlineStatus} />
      <Link href={`/user/${session.user.username}`} className={styles.link} onClick={closeDropdown}>
        <span>Profile</span>
      </Link>
      <Link href={'/settings'} className={styles.link} onClick={closeDropdown}>
        <span>User Settings</span>
      </Link>
    </div>
  )
}

export default Section1
