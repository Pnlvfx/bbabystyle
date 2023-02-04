"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface UserContextProps {
  session: SessionProps | null;
  setSession: Dispatch<SetStateAction<SessionProps | null>>;
}

const UserContext = createContext<UserContextProps | {}>({});

interface UserContextProvider extends ChildrenProps {
  session: SessionProps | null;
}

export const UserContextProvider = ({ children, session: ssrSession }: UserContextProvider) => {
  const [session, setSession] = useState(ssrSession);
  return (
    <UserContext.Provider
      value={{
        session,
        setSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(UserContext) as UserContextProps;
  if (!context) {
    throw new Error("Session component must be used with UserContextProvider component");
  }
  return context;
};
