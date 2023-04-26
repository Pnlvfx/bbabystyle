import { usePathname } from 'next/navigation'
import { AiOutlineEye } from 'react-icons/ai'
import { BiLogIn, BiUserCircle } from 'react-icons/bi'
import { GiBabyFace } from 'react-icons/gi'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import oauthapis from '../../API/oauthapis'
import { useModals } from '../../auth/modal/ModalsProvider'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { UserMenuButton } from './buttons/notuser/ThemeButton'
import UserPoliciesButton from './buttons/user/UserPoliciesButton'
import Section1 from './Section1'

const UserMenuIn = ({ styles }: UserMenuButton) => {
  const message = useMessage()
  const modals = useModals()
  const pathname = usePathname()

  const doLogout = async () => {
    try {
      await oauthapis.logout()
      window.location.href = pathname
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  const openCommunityForm = () => {
    modals.setShowUserMenu(false)
    modals.setShowCommunity(true)
  }

  return (
    <div>
      <div className="block h-10 w-full text-bbaby-text_darker">
        <span className="flex h-full items-center px-5">
          <span className="mr-3 h-5 w-5">
            <BiUserCircle className="icon" />
          </span>
          <span className="w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[14px] font-medium leading-[18px]">My Stuff</span>
        </span>
      </div>
      <Section1 />
      <div className="h-10 w-full text-bbaby-text_darker">
        <span className="flex h-full items-center px-5">
          <span className="mr-3 h-5 w-5">
            <AiOutlineEye className="icon" />
          </span>
          <span className="w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[14px] font-medium leading-[18px]">View Options</span>
        </span>
      </div>
      <div className="mb-3 border-b border-bbaby-border pb-3">
        <div
          className={`${styles.active} box-border flex h-10 w-full cursor-pointer items-center justify-between pl-[52px] pr-4 text-[14px] font-medium leading-[18px]`}
        >
          <span>Dark Mode</span>
        </div>
      </div>
      <button className={`block h-10 w-full ${styles.active}`} onClick={openCommunityForm}>
        <span className="flex h-full items-center px-5">
          <span className="mr-3 h-5 w-5">
            <GiBabyFace className="icon" />
          </span>
          <span className="w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left text-[14px] font-medium leading-[18px]">
            Create a Community
          </span>
        </span>
      </button>
      <UserPoliciesButton styles={styles} />
      <button className={`box-border block h-10 w-full border-none ${styles.active}`} onClick={doLogout}>
        <span className="flex h-full items-center px-5">
          <span className="mr-3 h-5 w-5 grow-0">
            <BiLogIn className="icon" />
          </span>
          <span className="w-full flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left text-[14px] font-medium leading-[18px]">
            Log Out
          </span>
        </span>
      </button>
      <div className="flex min-h-[40px] w-full items-center px-5 py-3 text-bbaby-text_darker">
        <span className="text-[12px] font-normal leading-4">© 2023 Bbabystyle, Inc. All rights reserved</span>
      </div>
    </div>
  )
}

export default UserMenuIn
