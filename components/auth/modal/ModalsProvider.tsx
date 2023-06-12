'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

type AuthModalType = 'hidden' | 'login' | 'register' | 'reset-your-password'

export interface ModalContextProps {
  showAuth: AuthModalType
  setShowAuth: Dispatch<SetStateAction<AuthModalType>>
  showSearch: boolean
  setShowSearch: Dispatch<SetStateAction<boolean>>
  showUserMenu: boolean
  setShowUserMenu: Dispatch<SetStateAction<boolean>>
  showCommunity: boolean
  setShowCommunity: Dispatch<SetStateAction<boolean>>
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalsContextProvider = ({ children }: ChildrenProps) => {
  const [showAuth, setShowAuth] = useState<AuthModalType>('hidden')
  const [showSearch, setShowSearch] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showCommunity, setShowCommunity] = useState(false)
  return (
    <ModalContext.Provider
      value={{ showAuth, setShowAuth, showSearch, setShowSearch, showUserMenu, setShowUserMenu, showCommunity, setShowCommunity }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModals = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('AuthModal must be used with AuthModalProvider')
  }
  return context
}
