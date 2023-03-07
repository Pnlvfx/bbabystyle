'use client'

import { useEffect } from 'react'
import { useMessage } from './TimeMsgContext'

const ServerMsg = ({ error }: { error?: string }) => {
  const message = useMessage()

  useEffect(() => {
    if (!error) return
    message.setMessage({ value: error, status: 'error' })
  }, [error])

  return null
}

export default ServerMsg
