"use client";

import Link from "next/link";
import { useModals } from "../../auth/modal/ModalsProvider";

const LoginButtons = () => {
  const modals = useModals();
  return (
    <>
      <Link href={'/account/register'} role={'button'} tabIndex={0}
        className="relative border border-[#d7dadc] text-white fill-white lg:w-[120px] ml-1 lg:ml-4 py-1 px-4 text-[14px] font-bold leading-[17px] min-h-[32px] min-w-[32px] items-center rounded-full flex justify-center text-center bg-transparent w-auto"
        onClick={(e) => {
          e.preventDefault()
          modals.setShowAuth("register")
        }}
      >
        <p>Sign Up</p>
      </Link>
      <Link href={'account/login'} role={'button'} tabIndex={0}
        className="relative bg-white border-none lg:w-[120px] ml-1 lg:ml-4 text-[14px] font-bold leading-[17px] min-h-[32px] min-w-[32px] py-1 px-4 items-center rounded-full flex justify-center text-center text-black w-auto"
        onClick={(e) => {
          e.preventDefault()
          modals.setShowAuth("login")
        }}
      >
        <p>Log In</p>
      </Link>
    </>
  );
};

export default LoginButtons;
