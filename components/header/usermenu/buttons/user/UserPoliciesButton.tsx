import Link from "next/link"
import { useState } from "react"
import { CgFileDocument } from "react-icons/cg"
import { RiArrowDownSLine } from "react-icons/ri"
import { UserMenuButton } from "../notuser/ThemeButton"

const UserPoliciesButton = ({ styles }: UserMenuButton) => {
  const [isOpen, setIsOpen] = useState(false)

  const triggerDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`w-full block h-10 border-none box-border ${styles.active}`}
        onClick={triggerDropdown}
      >
        <span
          className="items-center flex h-full px-5"
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
      <div className={`${isOpen ? "block" : "hidden"} border-b border-bbaby-border mb-3 pb-3`}>
        <Link href={"/policies/user-agreement"} className={`${styles.userPoliciesLink} ${styles.active}`}>
          User Agreement
        </Link>
        <Link href={"/policies/privacy-policy"} className={`${styles.userPoliciesLink} ${styles.active}`}>
          Privacy Policy
        </Link>
      </div>
    </>
  )
}

export default UserPoliciesButton