'use client'

import { useEffect, useRef } from 'react'
import { useMessage } from './TimeMsgContext'

const ServerMsg = ({ error }: { error?: string }) => {
  const messageRef = useRef(useMessage())

  useEffect(() => {
    if (!error) return
    messageRef.current.showMessage(error, { status: 'error' })
  }, [error])

  return null
}

export default ServerMsg
