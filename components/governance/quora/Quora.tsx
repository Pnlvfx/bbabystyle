'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import { QuoraProps } from '../../API/quoraapis/types/qtypes'
import tiktakapis from '../../API/tiktakapis/tiktakapis'
import Voting from '../../post/postutils/Voting'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { Spinner } from '../../utils/Spinner'

type QuoraPageProps = {
  quora: QuoraProps
}

const Quora = ({ quora }: QuoraPageProps) => {
  const message = useMessage()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const toTiktak = async () => {
    try {
      setLoading(true)
      const tiktak = await tiktakapis.newTiktak(quora.title, quora.description, 'en')
      router.push(tiktak.permalink)
      setLoading(false)
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <div className="relative flex max-h-[800px] rounded-[6px] md:pl-10">
      <div className="absolute left-0 top-0 box-border hidden w-10 flex-col items-center border-l-4 border-solid border-transparent py-2 pr-1 md:flex">
        <div className="hidden flex-col items-center md:flex">
          <Voting ups={quora.ups} postId={quora._id} liked={null} />
        </div>
      </div>
      <div className="w-full bg-reddit_dark-brighter pt-2">
        <div className="mx-2">
          <div className="inline align-baseline">
            <h1 className="mb-4 break-words text-lg">{quora.title}</h1>
          </div>
        </div>
        <div className="relative mt-2 max-h-[512px] overflow-hidden">
          <div className="resize-x-none flex-none break-words text-sm leading-6">
            <p className="whitespace-pre-wrap">{quora.description}</p>
          </div>
        </div>
        <div className="flex h-[40px] flex-row px-[2px]">
          <div className="flex flex-grow items-stretch overflow-hidden pr-2 pl-1 text-[12px] font-bold leading-4 text-reddit_text-darker">
            <div className="mr-1 flex items-center">
              <Voting ups={quora.ups} postId={quora._id} liked={null} />
              <button
                className="flex h-full justify-center items-center rounded-[2px] min-w-[40px] py-2 px-3 hover:bg-reddit_dark-brightest"
                type="button"
                onClick={toTiktak}
              >
                {loading ? <Spinner /> : <span className="max-h-[36px] overflow-hidden text-ellipsis text-left leading-3">Magic</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quora
