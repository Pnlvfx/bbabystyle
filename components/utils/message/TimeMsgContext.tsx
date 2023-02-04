"use client";

import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import Msg from "./Msg";

interface messageProps {
  value: string;
  status?: "error" | "success";
  time?: number;
}

export interface TimeMsgContextProps {
  message: messageProps;
  setMessage: Dispatch<SetStateAction<messageProps>>;
}

const TimeMsgContext = createContext({});

export const TimeMsgContextProvider = ({ children }: ChildrenProps) => {
  const _status = {
    value: "",
    status: "",
    time: 8000,
  };
  const [message, setMessage] = useState(_status);
  return (
    <TimeMsgContext.Provider value={{ setMessage, message }}>
      {children}
      <Msg />
    </TimeMsgContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(TimeMsgContext) as TimeMsgContextProps;
  if (!context) {
    throw new Error("Message component must be used with TimeMsgProvider component");
  }
  return context;
};
