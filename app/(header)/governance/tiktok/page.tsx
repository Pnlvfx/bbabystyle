'use client'

import { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { catchErrorWithMessage } from '../../../../components/API/config/apiErrors'
import govapis from '../../../../components/API/govapis'
import tiktokapis, { Tiktok } from '../../../../components/API/tiktokapis'
import { buttonClass } from '../../../../components/utils/buttons/Button'
import { useMessage } from '../../../../components/utils/message/TimeMsgContext'
import { Spinner } from '../../../../components/utils/Spinner'
import TextareaAutosize from '../../../../components/utils/TextareaAutosize'

const TiktokPage = () => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [tiktok, setTiktok] = useState<Tiktok>()
  const [text, setText] = useState('')
  const [translated, setTranslated] = useState('')
  const message = useMessage()

  const downloadVideo = async () => {
    try {
      setLoading(true)
      const tt = await tiktokapis.downloadVideo(url)
      setTiktok(tt)
      setText(tt.text)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      catchErrorWithMessage(err, message)
    }
  }

  const translate = async () => {
    try {
      if (!text || !tiktok) return
      const t = await govapis.translate(text, 'en')
      setTranslated(t)
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  const save = async () => {
    try {
      if (!tiktok) return
      setLoading2(true)
      await tiktokapis.createVideo(tiktok.id, translated)
      setLoading2(false)
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <div className="mt-[30px] flex items-center justify-center flex-col lg:mx-12">
      {!tiktok ? (
        <>
          <textarea
            value={url}
            className="costum-shadow w-full max-w-[640px] rounded-md bg-reddit_dark-brighter px-4 pt-4 outline-none resize-none"
            onChange={(e) => setUrl(e.target.value)}
            placeholder={'Insert the url here!'}
          />
          <div className="mt-6 flex justify-center">
            <button disabled={loading} className={`${buttonClass()} flex h-[35px] w-20 items-center justify-center`} onClick={downloadVideo}>
              {loading && <Spinner />}
              {!loading && <p className="text-right">Download</p>}
            </button>
          </div>
        </>
      ) : (
        <div className="h-full w-full">
          <div className="flex items-center justify-center">
            <video className={`aspect-video`} src={tiktok.video.url} id="video_pre-share" controls={true} width={1080} height={1920} />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-full max-w-[700px] flex items-center justify-center mt-6">
              <TextareaAutosize
                value={translated || text}
                className="w-full max-w-[640px] outline-none resize-none px-4 py-3 rounded-md bg-bbaby-brighter"
                onChange={(e) => {
                  if (translated) {
                    setTranslated(e.target.value)
                  } else {
                    setText(e.target.value)
                  }
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-full mt-6">
            {translated ? (
              <button disabled={loading2} className={`${buttonClass()} flex h-[35px] w-20 items-center justify-center`} onClick={save}>
                {loading2 && <Spinner />}
                {!loading2 && <AiOutlineArrowRight className="h-6 w-6" />}
              </button>
            ) : (
              <button className={`${buttonClass()} flex h-[35px] w-20 items-center justify-center`} onClick={translate}>
                {' '}
                <p>Translate</p>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TiktokPage
