import { MouseEvent } from 'react'
import { RetweetIcon } from '../../utils/svg/SVG'

interface TweetButtonsProps {
  // eslint-disable-next-line no-unused-vars
  translate: (e: MouseEvent<HTMLButtonElement>) => Promise<void>
  numComments: number
}

const TweetButtons = ({ translate, numComments }: TweetButtonsProps) => {
  return (
    <div className="flex h-[40px] flex-row px-[2px]">
      <div className="flex grow items-stretch overflow-hidden pl-1 pr-2 text-[12px] font-bold leading-4 text-reddit_text-darker">
        <div className="mr-1 flex items-center">
          <button
            className="flex h-full min-w-[40px] items-center justify-center rounded-[2px] px-3 py-2 hover:bg-reddit_dark-brightest"
            type="button"
            onClick={translate}
          >
            <span className="max-h-[36px] overflow-hidden text-ellipsis text-left leading-3">Magic</span>
          </button>
          <button
            className="flex h-full min-w-[40px] items-center justify-center rounded-[2px] px-3 py-2 hover:bg-reddit_dark-brightest"
            type="button"
          >
            <span className="flex max-h-[36px] items-center overflow-hidden text-ellipsis text-left leading-3">
              <RetweetIcon className="mr-[10px] h-5 w-5" />
              {numComments}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TweetButtons
