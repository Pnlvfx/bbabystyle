import { Dispatch, SetStateAction } from 'react'

type CheckBoxProps = {
  title: string
  check: boolean
  setCheck: Dispatch<SetStateAction<boolean>>
}

const CheckBox = ({ title, check, setCheck }: CheckBoxProps) => {
  const callback = () => {
    setCheck(!check)
  }
  return (
    <div className="flex items-center">
      <div className="mb-2 text-[14px] font-medium leading-[18px]">
        <div
          aria-checked={check}
          aria-disabled="false"
          className="flex cursor-pointer select-none items-center"
          aria-labelledby="post-to-telegram"
          role={'checkbox'}
          tabIndex={0}
          onClick={callback}
        >
          <input
            type="checkbox"
            id="telegram"
            checked={check}
            onChange={callback}
            className="h-[20px] w-[16px] bg-reddit_dark-brighter"
            style={{ filter: 'invert(85%)' }}
          />
          <p className="ml-2">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default CheckBox
