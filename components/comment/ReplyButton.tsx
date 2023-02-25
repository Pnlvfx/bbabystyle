import { ButtonHTMLAttributes } from 'react'
import { CommentIcon } from '../utils/svg/SVG'

const ReplyButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...props} className={'flex items-center text-[#717273] hover:bg-bbaby-brightest rounded-sm p-2 pl-0' + props.className}>
      <div className="mr-1">
        <CommentIcon className="h-5 w-5" />
      </div>
      <p>Reply</p>
    </button>
  )
}

export default ReplyButton
