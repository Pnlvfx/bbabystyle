'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import tiktakapis from '../../API/tiktakapis/tiktakapis'
import { TiktakProps } from '../../API/tiktakapis/types/tiktypes'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { Spinner } from '../../utils/Spinner'
import TiktakText from './TiktakText'

interface TiktakHomeProps {
  tiktak: TiktakProps
}

const TiktakHome = ({ tiktak }: TiktakHomeProps) => {
  const [title, setTitle] = useState(tiktak.title)
  const [translated, setTranslated] = useState(tiktak.body)
  const [loading, setLoading] = useState(false)
  const message = useMessage()
  const router = useRouter()
  const pathname = usePathname()
  const [synthetize, setSynthetize] = useState(tiktak.synthetize || '')

  const createBgVideo = async () => {
    try {
      if (!translated || !synthetize) {
        message.showMessage('Missing text or image search parameters', { status: 'error' })
        return
      }
      setLoading(true)
      await tiktakapis.createBgVideo(tiktak.permalink, title, translated, synthetize)
      router.push(`${pathname}/video`)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      catchErrorWithMessage(err, message)
    }
  }

  const goBack = () => {
    router.back()
  }

  return (
    <div>
      <TiktakText value={title} setValue={setTitle} />
      <TiktakText value={translated} setValue={setTranslated} />
      <div className="mx-2 mt-6 flex justify-between">
        <button
          onClick={goBack}
          className={`flex h-[35px] w-16 items-center justify-center rounded-full border border-bbaby-border bg-bbaby-brighter`}
        >
          <AiOutlineArrowLeft className="h-6 w-6" />
        </button>
        <input
          value={synthetize}
          onChange={(e) => setSynthetize(e.target.value)}
          className="rounded-md bg-reddit_dark-brighter p-2 text-center font-bold outline-none"
        />
        <button
          disabled={loading}
          className={`flex h-[35px] w-16 items-center justify-center rounded-full border border-bbaby-border bg-bbaby-brighter`}
          onClick={createBgVideo}
        >
          {loading ? <Spinner /> : <AiOutlineArrowRight className="h-6 w-6" />}
        </button>
      </div>
    </div>
  )
}

export default TiktakHome
