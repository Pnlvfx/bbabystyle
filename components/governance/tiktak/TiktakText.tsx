import { Dispatch, SetStateAction } from 'react'
import TeaxtareaAutosize from '../../utils/TeaxtareaAutosize'

type TiktakTextProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const TiktakText = ({ value, setValue }: TiktakTextProps) => {
  return (
    <div className="mt-[30px] flex items-center justify-center lg:mx-12">
      <TeaxtareaAutosize
        value={value}
        className="costum-shadow block w-full max-w-[640px] rounded-md bg-reddit_dark-brighter px-4 py-3 outline-none"
        onChange={(e) => {
          setValue(e.target.value)
        }}
        placeholder={'Insert your text here!'}
      />
    </div>
  )
}

export default TiktakText
