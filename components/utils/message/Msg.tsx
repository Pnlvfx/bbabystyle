import { CSSProperties } from 'react'
import { useMessage } from './TimeMsgContext'
import { AiOutlineSketch, AiOutlineWarning } from 'react-icons/ai'
import styles from './msg.module.css'
import { CloseIcon } from '../svg/SVG'

export interface MsgProps {
  closeMsg: () => void
}

const Msg = ({ closeMsg }: MsgProps) => {
  const message = useMessage()
  if (!message.message) return null

  return (
    <div
      style={{ '--color': message.message.status === 'error' ? '#ab1e0e' : '#24a0ed' } as CSSProperties}
      className={'fixed inset-x-0 bottom-0 z-[200] m-auto flex w-0 flex-col items-center justify-center'}
    >
      <div className={styles.msgContainer}>
        <div className="flex grow items-center">
          {message.message.status === 'error' ? <AiOutlineWarning className="ml-3 h-6 w-6" /> : <AiOutlineSketch className="ml-3 h-6 w-6" />}
          <span className="ml-3 flex-1 text-[14px] leading-[21px] text-[#d7dadc]">{message.message.value}</span>
        </div>
        <CloseIcon onClick={closeMsg} className={styles.closeIcon} />
      </div>
    </div>
  )
}

export default Msg
