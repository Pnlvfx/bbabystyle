import Link from 'next/link'
import { useModals } from '../../auth/modal/ModalsProvider'
import styles from './section1.module.css'

const Section1 = ({ session }: WithSession) => {
  const modals = useModals()

  const closeDropdown = () => {
    modals.setShowUserMenu(false)
  }

  if (!session?.user) return null

  return (
    <div className="mb-3 border-b border-bbaby-border pb-3">
      <button
        className={`box-border flex h-10 w-full items-center justify-between pl-[52px] pr-4 text-[14px] font-medium leading-[18px] ${styles.active}`}
      >
        <span>Online Status</span>
      </button>
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
