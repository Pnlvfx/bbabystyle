import Link from "next/link";
import { MouseEvent } from "react";
import { BiLogIn } from "react-icons/bi";
import { useModals } from "../../../auth/modal/ModalsProvider";
import { UserMenuButton } from "./ThemeButton";

const LoginSignUpButton = ({ styles }: UserMenuButton) => {
  const modals = useModals()

  const openAuthModal = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    modals.setShowAuth('login')
  }

  return (
    <Link href={"/"} className={styles.link1Y} onClick={openAuthModal}>
      <BiLogIn className="absolute left-3 top-[13px] w-5 h-5 align-middle" />
      <div className="text-[14px] font-medium leading-[18px] inline-block align-middle">
        Log In / Sign Up
      </div>
    </Link>
  );
};

export default LoginSignUpButton;
