import Link from "next/link";
import { useModals } from "../../auth/modal/ModalsProvider";
import { useSession } from "../../auth/UserContextProvider";
import styles from './section1.module.css'

const Section1 = () => {
  const {session} = useSession();
  const modals = useModals();

  const closeDropdown = () => {
    modals.setShowUserMenu(false)
  }

  if (!session?.user) return null;

  return (
    <div className="border-b border-bbaby-border mb-3 pb-3">
      <button className={`border-box w-full text-[14px] leading-[18px] flex items-center justify-between font-medium pl-[52px] pr-4 h-10 ${styles.active}`}>
        <span>Online Status</span>
      </button>
        <Link href={`/user/${session.user.username}`} className={styles.link} onClick={closeDropdown}>
          <span>Profile</span>
        </Link>
        <Link href={'/settings'} className={styles.link} onClick={closeDropdown}>
        <span>User Settings</span>
      </Link>
    </div>
  );
};

export default Section1;
