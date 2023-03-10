import { CSSProperties, useEffect, useRef, useState } from 'react'
import { useMessage } from './TimeMsgContext'
import { AiOutlineSketch, AiOutlineWarning } from 'react-icons/ai'
import { useSession } from '../../auth/UserContextProvider'
import styles from './msg.module.css'
import { CloseIcon } from '../svg/SVG'
import Image from 'next/image'
import { LOGO } from '../../../config/config'

const Msg = () => {
  const message = useMessage()
  const messageRef = useRef(message)
  const { session } = useSession()
  const sessionRef = useRef(session)
  const [toClose, setToClose] = useState(false)
  const messageMobileRef = useRef<HTMLDivElement>(null)

  const triggerMobile = (type: 'open' | 'close') => {
    const ms = type === 'open' ? 5 : 10
    const interval = setInterval(() => {
      if (!messageMobileRef.current) return
      const currentBottom = parseInt(messageMobileRef.current.style.bottom, 10)
      if (type === 'open') {
        if (currentBottom < 0) {
          messageMobileRef.current.style.bottom = `${currentBottom + 1}px`
        } else {
          clearInterval(interval)
        }
      } else {
        if (currentBottom > -80) {
          messageMobileRef.current.style.bottom = `${currentBottom - 1}px`
        } else {
          messageRef.current.setMessage({ value: '' })
          clearInterval(interval)
        }
      }
    }, ms)
  }

  useEffect(() => {
    if (!message.message.value) return
    const ms = message.message.time ? message.message.time : 8000
    //open mobile
    if (sessionRef.current?.device?.mobile) {
      triggerMobile('open')
    }
    //
    setTimeout(() => {
      if (!sessionRef.current?.device?.mobile) {
        messageRef.current.setMessage({ value: '' })
      } else {
        triggerMobile('close')
      }
    }, ms)
  }, [message])

  useEffect(() => {
    if (!toClose) return
    const interval = setInterval(() => {
      if (!messageMobileRef.current) return
      const currentBottom = parseInt(messageMobileRef.current.style.bottom, 10)
      if (currentBottom > -80) {
        messageMobileRef.current.style.bottom = `${currentBottom - 1}px`
      } else {
        messageRef.current.setMessage({ value: '' })
        setToClose(false)
        clearInterval(interval)
      }
    }, 10)
  }, [toClose])

  const closeMsg = () => {
    message.setMessage({ value: '' })
    if (messageMobileRef.current) {
      messageMobileRef.current.style.bottom = '-80px'
    }
  }

  return (
    <>
      {session?.device?.mobile ? (
        <div ref={messageMobileRef} className="h-20 w-full fixed z-50" style={{ bottom: -80 }}>
          <div className="bg-bbaby-brighter flex flex-row items-center justify-start">
            <div
              className={`w-20 h-20 flex-shrink-0 flex-grow-0 flex items-center justify-center ${
                message.message.status === 'error' ? 'bg-[#ab1e0e]' : 'bg-[#040222]'
              }`}
            >
              <Image src={LOGO} width={65} height={65} alt="Logo" />
            </div>
            <div className="overflow-hidden text-ellipsis leading-[18px] max-h-[54px] pl-4 text-[16px]">{message.message.value}</div>
            <div onClick={closeMsg} className="ml-auto mr-[5px] p-[10px] align-middle">
              <CloseIcon className="fill-bbaby-text_darker w-4 h-4" />
            </div>
          </div>
        </div>
      ) : (
        <>
          {message.message.value && (
            <div
              style={{ '--color': message.message.status === 'error' ? '#ab1e0e' : '#24a0ed' } as CSSProperties}
              className={'flex-col items-center bottom-0 flex justify-center left-0 m-auto fixed right-0 w-0 z-[200]'}
            >
              <div className={styles.msgContainer}>
                <div className="flex flex-grow items-center">
                  {message.message.status === 'error' ? <AiOutlineWarning className="h-6 w-6 ml-3" /> : <AiOutlineSketch className="h-6 w-6 ml-3" />}
                  <span className="ml-3 text-[14px] text-[#d7dadc] leading-[21px] flex-1">{message.message.value}</span>
                </div>
                <CloseIcon onClick={closeMsg} className={styles.closeIcon} />
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Msg
