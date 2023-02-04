"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ModalContextProps {
  showAuth: "hidden" | "login" | "register" | "reset-your-password";
  setShowAuth: Dispatch<
    SetStateAction<"hidden" | "login" | "register" | "reset-your-password">
  >;
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
  showUserMenu: boolean;
  setShowUserMenu: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext({});

export const AuthModalContextProvider = ({ children }: ChildrenProps) => {
  const [showAuth, setShowAuth] = useState("hidden");
  const [showSearch, setShowSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  return (
    <ModalContext.Provider
      value={{ showAuth, setShowAuth, showSearch, setShowSearch, showUserMenu, setShowUserMenu }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext) as ModalContextProps;
  if (!context) {
    throw new Error(
      "AuthModal component must be used with AuthModalProvider component"
    );
  }
  return context;
};
