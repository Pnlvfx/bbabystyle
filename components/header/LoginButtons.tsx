"use client";

import { useAuthModal } from "../auth/modal/AuthModalProvider";

const LoginButtons = () => {
  const authModal = useAuthModal();
  return (
    <>
      <button className={`ml-4 mr-2 h-8 w-20 md:mr-4 md:w-24 buttonClassOutline`} onClick={() => authModal.setShow("login")}>
        <p>Log In</p>
      </button>
      <button className={`h-8 w-20 md:w-24 buttonClass`} onClick={() => authModal.setShow("register")}>
        <p>Sign Up</p>
      </button>
    </>
  );
};

export default LoginButtons;
