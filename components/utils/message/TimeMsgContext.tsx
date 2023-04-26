'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Msg from './Msg'
import MobileMsg from './MobileMsg'

interface MessageProps {
  value: string
  status: 'error' | 'success'
  time: number
  isMobile: boolean
}

interface ShowMessageOptions {
  status?: 'error' | 'success'
  isMobile?: boolean
  time?: number
}

export interface TimeMsgContextProps {
  message?: MessageProps
  // eslint-disable-next-line no-unused-vars
  showMessage: (value: string, options?: ShowMessageOptions) => void
}

const TimeMsgContext = createContext({})

export const TimeMsgContextProvider = ({ children, isMobile: contextMobile }: ChildrenProps & { isMobile: boolean }) => {
  const [message, setMessage] = useState<MessageProps | undefined>()
  const messageMobileRef = useRef<HTMLDivElement>(null)

  const triggerMobile = (type: 'open' | 'close') => {
    const ms = type === 'open' ? 5 : 10
    const interval = setInterval(() => {
      if (!messageMobileRef.current) return
      const currentBottom = parseInt(messageMobileRef.current.style.bottom, 10)
      if (type === 'open') {
        if (currentBottom < 0) {
          messageMobileRef.current.style.bottom = `${currentBottom + 1}px`
        } else {
          clearInterval(interval)
        }
      } else {
        if (currentBottom > -80) {
          messageMobileRef.current.style.bottom = `${currentBottom - 1}px`
        } else {
          setMessage(undefined)
          clearInterval(interval)
        }
      }
    }, ms)
  }

  const showMessage = (value: string, options?: ShowMessageOptions) => {
    const status = options?.status || 'success'
    const time = options?.time || 10000
    const isMobile = options?.isMobile || contextMobile || false
    closeMsg()
    setMessage({ value, status, time, isMobile })
    if (isMobile) {
      triggerMobile('open')
    }
  }

  const closeMsg = () => {
    setMessage(undefined)
    if (messageMobileRef.current) {
      messageMobileRef.current.style.bottom = '-80px'
    }
  }

  useEffect(() => {
    if (!message) return
    const timeout = setTimeout(() => {
      if (message.isMobile) {
        triggerMobile('close')
      } else {
        setMessage(undefined)
      }
    }, message.time)

    return () => {
      clearTimeout(timeout)
    }
  }, [message])

  return (
    <TimeMsgContext.Provider value={{ message, showMessage }}>
      {children}
      {message?.isMobile ? <MobileMsg messageMobileRef={messageMobileRef} closeMsg={closeMsg} /> : <Msg closeMsg={closeMsg} />}
    </TimeMsgContext.Provider>
  )
}

export const useMessage = () => {
  const context = useContext(TimeMsgContext) as TimeMsgContextProps
  if (!context) {
    throw new Error('Message component must be used with TimeMsgProvider component')
  }
  return context
}
