'use client'
import { useEffect, useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import tiktokapis from '../../API/tiktokapis/tiktokapis'
import { buttonClass } from '../../utils/buttons/Button'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { Spinner } from '../../utils/Spinner'
import { TiktokIDProps } from './TiktokHome'
import TiktokVideoText from './TiktokVideoText'

const TikTokText = ({ tiktok }: TiktokIDProps) => {
  const [array, setArray] = useState(tiktok.textArray)
  const [loading, setLoading] = useState(false)
  const message = useMessage()
  const [currentTime, setCurrentTime] = useState(0)

  const copyTextToClipboard = async (text: string) => {
    try {
      if ('clipboard' in navigator) {
        await navigator.clipboard.writeText(text)
      } else {
        document.execCommand('copy', true, text)
      }
      message.setMessage({ value: 'Link copied!', time: 8000, status: 'success' })
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  const save = async () => {
    try {
      if (!tiktok || !tiktok.textArray) return
      setLoading(true)
      await tiktokapis.save(tiktok.id, {
        textArray: array,
      })
      setLoading(false)
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  const create = async () => {
    await save()
    await tiktokapis.createVideo(tiktok.id)
    try {
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  useEffect(() => {
    const updateTime = (e: Event) => {
      const time = (e.target as HTMLVideoElement).currentTime.toFixed(2)
      setCurrentTime(Number(time))
    }
    const video = document.getElementsByTagName('video')[0]
    video.addEventListener('timeupdate', updateTime)
    return () => {
      video.removeEventListener('timeupdate', updateTime)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const video = document.getElementsByTagName('video')[0]
      if (e.key === 'ArrowLeft') {
        video.currentTime -= 0.01
      } else if (e.key === 'ArrowRight') {
        video.currentTime += 0.01
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-full max-w-[700px] flex flex-col items-center justify-center mt-6">
          <button
            className="bg-bbaby-brighter rounded-full border border-bbaby-border px-4 py-3"
            onClick={() => {
              copyTextToClipboard(currentTime.toString())
            }}
          >
            {currentTime}
          </button>
          {array &&
            array.map((a, index) => (
              <TiktokVideoText
                key={index}
                text={a.text}
                start={a.start}
                end={a.end}
                array={array}
                setArray={setArray}
                index={index}
                length={array.length}
              />
            ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-[700px] h-full mt-6">
          <div />
          <button
            disabled={loading}
            className={`${buttonClass()} flex h-[35px] w-20 items-center justify-center`}
            onClick={() => {
              save()
            }}
          >
            {loading && <Spinner />}
            {!loading && <p>Save</p>}
          </button>
          <button disabled={loading} className={`${buttonClass()} flex h-[35px] w-20 items-center justify-center`} onClick={create}>
            <AiOutlineArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  )
}

export default TikTokText
