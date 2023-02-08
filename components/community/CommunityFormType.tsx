import { ReactNode } from 'react'
import { Checkbox, CheckboxChecked } from '../utils/svg/SVG'

type CommunityType = {
  icon: ReactNode
  checked: boolean
  text: {
    title: string
    body: string
  }
}

const CommunityFormType = ({ icon, checked, text }: CommunityType) => {
  return (
    <div className="mb-4 flex items-start " aria-checked={checked} role={'radio'} tabIndex={0}>
      {checked ? (
        <CheckboxChecked role={'presentation'} className="mr-[6px] h-4 w-4" />
      ) : (
        <Checkbox role={'presentation'} className="mr-[6px] h-4 w-4" />
      )}
      <div className="flex">
        <div>{icon}</div>
        <div className="flex">
          <div className="mt-[-1px] inline-block pl-1 align-top text-[14px] font-medium leading-[18px]">{text.title}</div>
          <div className="mt-[1px] ml-1 text-[12px] font-normal leading-4 text-reddit_text-darker">{text.body}</div>
        </div>
      </div>
    </div>
  )
}

export default CommunityFormType