import Image from 'next/image'
import { CloseIcon } from '../svg/SVG'
import { LOGO } from '../../../config/config'
import { useMessage } from './TimeMsgContext'
import { RefObject } from 'react'
import { MsgProps } from './Msg'

interface MobileMsgProps extends MsgProps {
  messageMobileRef: RefObject<HTMLDivElement>
}

const MobileMsg = ({ closeMsg, messageMobileRef }: MobileMsgProps) => {
  const message = useMessage()
  if (!message.message) return null
  return (
    <div ref={messageMobileRef} className="fixed z-50 h-20 w-full" style={{ bottom: -80 }}>
      <div className="flex flex-row items-center justify-start bg-bbaby-brighter">
        <div
          className={`flex h-20 w-20 shrink-0 grow-0 items-center justify-center ${
            message.message.status === 'error' ? 'bg-[#ab1e0e]' : 'bg-[#040222]'
          }`}
        >
          <Image src={LOGO} width={65} height={65} alt="Logo" />
        </div>
        <div className="max-h-[54px] overflow-hidden text-ellipsis pl-4 text-[16px] leading-[18px]">{message.message.value}</div>
        <div onClick={closeMsg} className="ml-auto mr-[5px] p-[10px] align-middle">
          <CloseIcon className="h-4 w-4 fill-bbaby-text_darker" />
        </div>
      </div>
    </div>
  )
}

export default MobileMsg
