'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import tiktakapis from '../../API/tiktakapis/tiktakapis'
import { TiktakProps } from '../../API/tiktakapis/types/tiktypes'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { Spinner } from '../../utils/Spinner'

interface TiktakVideoProps {
  tiktak: TiktakProps
}

const TiktakVideo = ({ tiktak }: TiktakVideoProps) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const message = useMessage()

  const goBack = async () => {
    try {
      await tiktakapis.delete(tiktak.permalink, {
        video: tiktak.video,
      })
      router.refresh()
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  const send = async () => {
    try {
      setLoading(true)
      const msg = await tiktakapis.send(tiktak.permalink)
      message.showMessage(msg.msg, { status: 'success' })
      setLoading(false)
    } catch (err) {
      setLoading(false)
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <div className="mx-4 mt-6 flex justify-between">
      <button onClick={goBack} className={`flex h-[35px] w-16 items-center justify-center rounded-full border border-bbaby-border bg-bbaby-brighter`}>
        <AiOutlineArrowLeft className="h-6 w-6" />
      </button>
      <div />
      <button
        disabled={loading}
        className={`flex h-[35px] min-w-[150px] items-center justify-center rounded-full border border-bbaby-border bg-bbaby-brighter px-4 py-3`}
        onClick={send}
      >
        {loading ? <Spinner /> : <p className="text-[14px] font-semibold">Send to telegram</p>}
      </button>
    </div>
  )
}

export default TiktakVideo
