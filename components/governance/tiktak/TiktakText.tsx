import { Dispatch, SetStateAction } from 'react'
import TextareaAutosize from '../../utils/TextareaAutosize'

type TiktakTextProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const TiktakText = ({ value, setValue }: TiktakTextProps) => {
  return (
    <div className="mt-[30px] flex items-center justify-center lg:mx-12">
      <TextareaAutosize
        value={value}
        rows={1}
        className="w-full max-w-[640px] rounded-md bg-bbaby-brighter px-4 py-3 outline-none"
        onChange={(e) => {
          setValue(e.target.value)
        }}
        placeholder={'Insert your text here!'}
      />
    </div>
  )
}

export default TiktakText
