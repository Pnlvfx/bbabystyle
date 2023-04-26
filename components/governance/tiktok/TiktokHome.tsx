'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import govapis from '../../API/govapis'
import tiktokapis from '../../API/tiktokapis/tiktokapis'
import { TiktokProps } from '../../API/tiktokapis/types/TTtypes'
import { buttonClass } from '../../utils/buttons/Button'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { Spinner } from '../../utils/Spinner'
import TextareaAutosize from '../../utils/TextareaAutosize'

export interface TiktokIDProps {
  tiktok: TiktokProps
}

const TiktokHome = ({ tiktok }: TiktokIDProps) => {
  const [loading, setLoading] = useState(false)
  const [translated, setTranslated] = useState(tiktok.translated || '')
  const message = useMessage()
  const [text, setText] = useState(tiktok.text || '')
  const [showOriginal, setShowOriginal] = useState(tiktok.translated ? false : true)

  const translate = async () => {
    try {
      if (!text || !tiktok) return
      if (showOriginal) {
        const t = await govapis.translate(text, 'en')
        setTranslated(t)
        await save(text, t)
        setShowOriginal(false)
      } else {
        setShowOriginal(true)
      }
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  const save = async (tx: string, ts: string) => {
    try {
      if (!tiktok) return
      setLoading(true)
      await tiktokapis.save(tiktok.id, {
        text: tx,
        translated: ts,
      })
      setLoading(false)
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="mt-6 flex w-full max-w-[700px] items-center justify-center">
          <TextareaAutosize
            value={showOriginal ? text : translated}
            className="w-full max-w-[640px] resize-none rounded-md bg-bbaby-brighter px-4 py-3 outline-none"
            onChange={(e) => {
              if (showOriginal) {
                setText(e.target.value)
              } else {
                setTranslated(e.target.value)
              }
            }}
          />
          <button className={`${buttonClass()} mx-4 flex h-[35px] items-center justify-center`} onClick={translate}>
            {' '}
            <p>{showOriginal ? 'Translated' : 'Back'}</p>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="mt-6 flex h-full w-full max-w-[640px] items-center justify-between">
          <div />
          <button
            disabled={loading}
            className={`${buttonClass()} flex h-[35px] w-20 items-center justify-center`}
            onClick={() => {
              save(text, translated)
            }}
          >
            {loading && <Spinner />}
            {!loading && <p>Save</p>}
          </button>
          <Link href={`/governance/tiktok/${tiktok.id}/text`} className={`${buttonClass()} flex h-[35px] w-20 items-center justify-center`}>
            <AiOutlineArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default TiktokHome
