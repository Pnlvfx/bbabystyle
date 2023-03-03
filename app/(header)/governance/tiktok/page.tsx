'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { catchErrorWithMessage } from '../../../../components/API/config/apiErrors'
import tiktokapis from '../../../../components/API/tiktokapis/tiktokapis'
import { buttonClass } from '../../../../components/utils/buttons/Button'
import { useMessage } from '../../../../components/utils/message/TimeMsgContext'
import { Spinner } from '../../../../components/utils/Spinner'

const TiktokPage = () => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const message = useMessage()
  const router = useRouter()

  const downloadVideo = async () => {
    try {
      setLoading(true)
      const tt = await tiktokapis.downloadVideo(url)
      router.push(`/governance/tiktok/${tt.id}`)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <div className="mt-[30px] flex items-center justify-center flex-col lg:mx-12">
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
    </div>
  )
}

export default TiktokPage
