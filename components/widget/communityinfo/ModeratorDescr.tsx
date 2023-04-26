import { useState } from 'react'
import { ClickOutHandler } from 'react-clickout-ts'
import communityapis from '../../API/communityapis'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import { useMessage } from '../../utils/message/TimeMsgContext'
interface ModeratorDescrProps {
  name: string
  description?: string
}

const ModeratorDescr = ({ name, description: initialDescription }: ModeratorDescrProps) => {
  const [showTextarea, setShowTextarea] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [description, setDescription] = useState(initialDescription)
  const message = useMessage()

  const updateDescription = async () => {
    try {
      if (!description || !isFocus) return
      await communityapis.updateDescription(name, description)
      message.showMessage('Description updated successfully!', { status: 'success' })
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  const close = () => {
    if (!description) {
      setShowTextarea(false)
    } else {
      updateDescription()
    }
  }

  const open = () => {
    setShowTextarea(true)
  }

  return (
    <div>
      <ClickOutHandler onClickOut={close}>
        <div
          className={`mb-3 mt-2 rounded border ${
            showTextarea ? 'border-bbaby-text' : 'border-bbaby-dark'
          } cursor-pointer bg-bbaby-brightest p-2 transition-all`}
          tabIndex={0}
        >
          {showTextarea ? (
            <textarea
              className="w-full resize-none bg-transparent text-[14px] text-bbaby-text_darker outline-none"
              placeholder="Tell us about your community"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          ) : (
            <div className="text-[12px] font-bold leading-4" onClick={open}>
              {description || 'Add description'}
            </div>
          )}
        </div>
      </ClickOutHandler>
    </div>
  )
}

export default ModeratorDescr
