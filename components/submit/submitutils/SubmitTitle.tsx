import { ChangeEvent, useState } from 'react'
import { ClickOutHandler } from 'react-clickout-ts'
import TextareaAutosize from '../../utils/TextareaAutosize'
import { useSubmitProvider } from '../SubmitProvider'
import style from './submit-title.module.css'

const SubmitTitle = () => {
  const [active, setActive] = useState(false)

  const { title, setTitle, session } = useSubmitProvider()

  const maxLength = session?.user?.role === 1 ? 999 : 300

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value)
  }

  return (
    <div className="mb-2">
      <ClickOutHandler
        onClickOut={() => {
          setActive(false)
        }}
      >
        <div className="relative">
          <TextareaAutosize
            className={`${style.submitTitle} text-[16px] md:text-[14px] ${active ? 'border-reddit_text' : 'border-reddit_border'}`}
            placeholder={'Title'}
            onClick={() => {
              setActive(true)
            }}
            onChange={(e) => {
              onChange(e)
            }}
            maxLength={maxLength}
            value={title}
          />
          <div className={style.titleLength}>
            {title.length}/{maxLength}
          </div>
        </div>
      </ClickOutHandler>
    </div>
  )
}

export default SubmitTitle
