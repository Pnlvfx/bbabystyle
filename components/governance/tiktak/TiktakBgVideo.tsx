'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import tiktakapis from '../../API/tiktakapis/tiktakapis'
import { TiktakProps } from '../../API/tiktakapis/types/tiktypes'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { Spinner } from '../../utils/Spinner'

interface TiktakVideoProps {
  tiktak: TiktakProps
}

const TiktakBgVideo = ({ tiktak }: TiktakVideoProps) => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const message = useMessage()
  const inputRef = useRef<HTMLInputElement>(null)
  const [color, setColor] = useState('rgb(255, 201, 51)')
  const pathname = usePathname()

  const goBack = async () => {
    try {
      await tiktakapis.delete(tiktak.permalink, {
        background_video: tiktak.background_video,
      })
      const segments = pathname.split('/')
      const newSegments = segments.slice(0, -1)
      const newStr = newSegments.join('/')
      router.push(newStr)
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  const create = async () => {
    try {
      setLoading(true)
      await tiktakapis.create(tiktak.permalink, color)
      router.refresh()
      setLoading(false)
    } catch (err) {
      setLoading(false)
      catchErrorWithMessage(err, message)
    }
  }

  const chooseColor = () => {
    inputRef.current?.click()
  }

  useEffect(() => {
    const colorEl = document.getElementById('text-color')
    if (!colorEl) return
    colorEl.style.color = color
  }, [color])

  return (
    <div className="mx-2 mt-6 flex justify-between">
      <button onClick={goBack} className={`flex h-[35px] w-16 items-center justify-center rounded-full border border-bbaby-border bg-bbaby-brighter`}>
        <AiOutlineArrowLeft className="h-6 w-6" />
      </button>
      <div>
        <button
          onClick={chooseColor}
          className={`flex h-[35px] items-center justify-center rounded-full border border-bbaby-border bg-bbaby-brighter px-4 py-3`}
        >
          Choose color
        </button>
        <input
          type={'color'}
          ref={inputRef}
          className="h-0 w-0"
          style={{ visibility: 'hidden' }}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <button
        disabled={loading}
        className={`flex h-[35px] w-16 items-center justify-center rounded-full border border-bbaby-border bg-bbaby-brighter`}
        onClick={create}
      >
        {loading && <Spinner />}
        {!loading && <AiOutlineArrowRight className="h-6 w-6" />}
      </button>
    </div>
  )
}

export default TiktakBgVideo
