import Link from "next/link";
import { useState } from "react";
import { CgFileDocument } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";
import { useModals } from "../../../../auth/modal/ModalsProvider";
import { UserMenuButton } from "./ThemeButton";

const TermsPoliciesButton = ({ styles }: UserMenuButton) => {
  const [isOpen, setIsOpen] = useState(false);
  const modals = useModals();

  const triggerDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false)
    modals.setShowUserMenu(false)
  }

  return (
    <>
      <button
        className={`${styles.button2K} h-10 border-none`}
        onClick={triggerDropdown}
      >
        <span
          className="box-border left-[-4px] absolute w-full items-center flex flex-row h-full px-5"
          tabIndex={-1}
        >
          <span className="w-5 h-5 mr-3">
            <CgFileDocument className="h-5 w-5 align-middle" />
          </span>
          <span className="flex-1 text-[14px] leading-[18px] text-left w-full text-ellipsis whitespace-nowrap overflow-hidden font-medium">
            Terms & Policies
          </span>
          <RiArrowDownSLine
            className={`icon ${
              isOpen ? "rotate-180" : "rotate-0"
            } ${styles.rotateIcon}`}
          />
        </span>
      </button>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <Link href={"/policies/user-agreement"} className={`${styles.policiesLink} ${styles.link1Y}`} onClick={closeDropdown}>
          User Agreement
        </Link>
        <Link href={"/policies/privacy-policy"} className={`${styles.policiesLink} ${styles.link1Y}`} onClick={closeDropdown}>
          Privacy Policy
        </Link>
      </div>
    </>
  );
};

export default TermsPoliciesButton;
