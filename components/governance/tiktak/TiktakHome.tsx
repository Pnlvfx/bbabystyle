'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import tiktakapis from '../../API/tiktakapis/tiktakapis'
import { buttonClass } from '../../utils/buttons/Button'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { Spinner } from '../../utils/Spinner'
import TiktakText from './TiktakText'

const TiktakHome = () => {
  const [originalText, setOriginalText] = useState('')
  const [loading, setLoading] = useState(false)
  const message = useMessage()
  const router = useRouter()

  const newTiktak = async () => {
    try {
      setLoading(true)
      const tiktak = await tiktakapis.newTiktak(originalText, 'en')
      router.push(tiktak.permalink)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      catchErrorWithMessage(err, message)
    }
  }
  return (
    <div>
      <TiktakText value={originalText} setValue={setOriginalText} />
      <div className="mt-6 flex justify-center">
        <button disabled={loading} className={`${buttonClass()} flex h-[35px] w-20 items-center justify-center`} onClick={newTiktak}>
          {loading && <Spinner />}
          {!loading && <p className="text-right">Translate</p>}
        </button>
      </div>
    </div>
  )
}

export default TiktakHome
