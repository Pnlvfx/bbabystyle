"use client";

import { UserIcon } from "../../utils/svg/SVG";
import { RiArrowDownSLine } from "react-icons/ri";
import { useModals } from "../../auth/modal/ModalsProvider";
import { useSession } from "../../auth/UserContextProvider";
import Image from "next/image";

const UserDropdownButton = () => {
  const modals = useModals();
  const { session } = useSession();

  const triggerUserMenu = () => {
    modals.setShowUserMenu(!modals.showUserMenu);
  };

  return (
    <button
      className={`${!session?.user && 'justify-center lg:w-[70px]'} border border-transparent hover:border-bbaby-border ${
        modals.showUserMenu && "border-bbaby-border"
      } rounded py-[2px] relative min-h-[32px] md:ml-2 items-center flex flex-row`}
      id="USER_DROPDOWN_ID"
      onClick={triggerUserMenu}
    >
      <span className="flex items-center flex-row">
        {session?.user ? (
          <span className="md:w-[175px] items-center flex ml-2">
            <div className="mr-[5px] relative h-full flex-none">
              <Image src={session.user.avatar} alt="User avatar" width={24} height={24} className='rounded float-left w-6 h-6 border border-bbaby-border object-cover object-center' />
            </div>
            <span className="hidden md:block">
              <span className="text-[14px] leading-4 font-medium block whitespace-nowrap">{session.user.username}</span>
            </span>
          </span>
        ) : (
          <span className="items-center flex text-left">
            <UserIcon className="w-5 h-5 align-middle" />
          </span>
        )}
        <RiArrowDownSLine className="text-bbaby-text_darker w-5 h-5 align-middle" />
      </span>
    </button>
  );
};

export default UserDropdownButton;
