"use client";

import { UserIcon } from "../../utils/svg/SVG";
import { RiArrowDownSLine } from "react-icons/ri";
import { useModals } from "../../auth/modal/ModalsProvider";

const UserDropdownButton = () => {
  const modals = useModals();
  
  const triggerUserMenu = () => {
    modals.setShowUserMenu(!modals.showUserMenu);
  };

  return (
    <button
      className={`justify-center lg:w-[70px] border border-transparent hover:border-bbaby-border ${modals.showUserMenu && 'border-bbaby-border'} rounded py-[2px] relative min-h-[32px] ml-2 items-center flex flex-row text-left`}
      id="USER_DROPDOWN_ID"
      onClick={triggerUserMenu}
    >
      <span className="flex items-center flex-row">
        <span className="items-center flex text-left">
          <UserIcon className="w-5 h-5 align-middle" />
        </span>
        <RiArrowDownSLine className="text-bbaby-text_darker w-5 h-5 align-middle" />
      </span>
    </button>
  );
};

export default UserDropdownButton;
