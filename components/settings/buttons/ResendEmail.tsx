'use client'

import { server } from '../../../config/config'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import { useMessage } from '../../utils/message/TimeMsgContext'

const ResendEmail = () => {
  const message = useMessage()

  const resendEmail = async () => {
    try {
      const url = `${server}/send_verification_email`
      const res = await fetch(url, {
        method: 'get',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) return message.showMessage(data?.msg || 'Sorry for this error, we are working to fix it!', { status: 'error' })
      message.showMessage(data?.msg, { status: 'success' })
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <button
      role={'button'}
      tabIndex={0}
      className="relative box-border flex min-h-[32px] w-auto min-w-[32px] items-center justify-center rounded border border-transparent px-1 py-[3px] text-center text-[12px] leading-4 text-[#4fbcff] underline"
      onClick={resendEmail}
    >
      Click to resend
    </button>
  )
}

export default ResendEmail
