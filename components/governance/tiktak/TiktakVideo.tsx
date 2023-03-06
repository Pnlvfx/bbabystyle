'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
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

  const download = async () => {
    try {
      setLoading(true)
      setLoading(false)
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <div className="mx-4 mt-6 flex justify-between">
      <button
        onClick={goBack}
        className={`flex h-[35px] w-16 items-center justify-center rounded-full border border-reddit_border bg-reddit_dark-brighter`}
      >
        <AiOutlineArrowLeft className="h-6 w-6" />
      </button>
      <div />
      <button
        disabled={loading}
        className={`flex h-[35px] w-16 items-center justify-center rounded-full border border-reddit_border bg-reddit_dark-brighter`}
        onClick={download}
      >
        {loading && <Spinner />}
        {!loading && <AiOutlineArrowRight className="h-6 w-6" />}
      </button>
    </div>
  )
}

export default TiktakVideo
