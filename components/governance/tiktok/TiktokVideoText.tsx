import { useState } from 'react'
import { PlusIcon } from '../../utils/svg/SVG'

interface TiktokVideoTextProps {
  text: string
  index: number
  // eslint-disable-next-line no-unused-vars
  addText: (index: number) => void
}

const TiktokVideoText = ({ text: req_text, index, addText }: TiktokVideoTextProps) => {
  const [text, setText] = useState(req_text)

  return (
    <div className="w-full max-w-[700px] flex items-center justify-center mt-6">
      <textarea
        value={text}
        className="w-full max-w-[640px] outline-none resize-none px-4 py-3 rounded-md bg-bbaby-brighter"
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button className="px-4 py-3 h-full" onClick={() => addText(index)}>
        <PlusIcon className="w-7 h-7" />
      </button>
    </div>
  )
}

export default TiktokVideoText
