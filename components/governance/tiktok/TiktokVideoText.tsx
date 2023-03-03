import { Dispatch, SetStateAction } from 'react'
import { TextArrayProps } from '../../API/tiktokapis/types/TTtypes'
import { PlusIcon } from '../../utils/svg/SVG'
import TextareaAutosize from '../../utils/TextareaAutosize'

interface TiktokVideoTextProps {
  text: string
  start: number
  end: number
  array: TextArrayProps[]
  setArray: Dispatch<SetStateAction<TextArrayProps[] | undefined>>
  index: number
  length: number
}

const TiktokVideoText = ({ text, start, end, index, array, setArray, length }: TiktokVideoTextProps) => {
  const addText = () => {
    setArray((a) => {
      if (!a) return a
      return [...a, { text: '', start: a[index].end + 0.01, end: a[index].end + 5 }]
    })
  }
  return (
    <div className="w-full max-w-[700px] flex items-center justify-center mt-6">
      <TextareaAutosize
        value={text}
        className="w-full max-w-[640px] outline-none resize-none px-4 py-3 rounded-md bg-bbaby-brighter"
        onChange={(e) => {
          const newArr = [...array]
          newArr[index] = { text: e.target.value, start: newArr[index].start, end: newArr[index].end }
          setArray(newArr)
        }}
      />
      <div className="flex items-center justify-center space-x-2">
        <input
          type={'text'}
          value={start}
          className="bg-bbaby-brighter outline-none w-10 mx-2 rounded-md text-center"
          onChange={(e) => {
            const newArr = [...array]
            newArr[index] = { text: newArr[index].text, start: Number(e.target.value), end: newArr[index].end }
            setArray(newArr)
          }}
        />
        <input
          type={'text'}
          value={end}
          className="bg-bbaby-brighter outline-none w-10 mx-2 rounded-md text-center"
          onChange={(e) => {
            const newArr = [...array]
            newArr[index] = { text: newArr[index].text, start: newArr[index].start, end: Number(e.target.value) }
            setArray(newArr)
          }}
        />
      </div>
      {index === length - 1 ? (
        <button className="pl-4 py-3 h-full" onClick={addText}>
          <PlusIcon className="w-7 h-7" />
        </button>
      ) : (
        <div className="pl-4 py-3 h-full opacity-0">
          <div className="w-7 h-7" />
        </div>
      )}
    </div>
  )
}

export default TiktokVideoText
