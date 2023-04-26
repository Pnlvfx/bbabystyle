'use client'

import { UserIcon } from '../../utils/svg/SVG'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useModals } from '../../auth/modal/ModalsProvider'
import Image from 'next/image'

const UserDropdownButton = ({ session }: WithSession) => {
  const modals = useModals()

  const triggerUserMenu = () => {
    modals.setShowUserMenu(!modals.showUserMenu)
  }

  return (
    <button
      className={`${!session?.user && 'justify-center lg:w-[70px]'} border border-transparent hover:border-bbaby-border ${
        modals.showUserMenu && 'border-bbaby-border'
      } relative flex min-h-[32px] flex-row items-center rounded py-[2px] md:ml-2`}
      id="USER_DROPDOWN_ID"
      onClick={triggerUserMenu}
    >
      <span className="flex flex-row items-center">
        {session?.user ? (
          <span className="ml-2 flex items-center md:w-[175px]">
            <div className="relative mr-[5px] h-full flex-none">
              <Image
                src={session.user.avatar}
                alt="User avatar"
                width={24}
                height={24}
                className="float-left h-6 w-6 rounded border border-bbaby-border object-cover object-center"
              />
            </div>
            <span className="hidden md:block">
              <span className="block whitespace-nowrap text-[14px] font-medium leading-4">{session.user.username}</span>
            </span>
          </span>
        ) : (
          <span className="flex items-center text-left">
            <UserIcon className="h-5 w-5 align-middle" />
          </span>
        )}
        <RiArrowDownSLine className="h-5 w-5 align-middle text-bbaby-text_darker" />
      </span>
    </button>
  )
}

export default UserDropdownButton
