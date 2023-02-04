"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface AuthModalContextProps {
  show: "hidden" | "login" | "register" | "reset-your-password";
  setShow: Dispatch<SetStateAction<"hidden" | "login" | "register" | "reset-your-password">>;
}

const AuthModalContext = createContext({});

export const AuthModalContextProvider = ({ children }: ChildrenProps) => {
  const [show, setShow] = useState("hidden");
  return <AuthModalContext.Provider value={{ show, setShow }}>{children}</AuthModalContext.Provider>;
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext) as AuthModalContextProps;
  if (!context) {
    throw new Error("AuthModal component must be used with AuthModalProvider component");
  }
  return context;
};
