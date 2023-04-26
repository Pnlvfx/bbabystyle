import { useState } from 'react'
import { ClickOutHandler } from 'react-clickout-ts'
import { useRouter } from 'next/navigation'
import { BsTrashFill } from 'react-icons/bs'
import postapis from '../../API/postapis/postapis'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import { MoreIcon } from '../../utils/svg/SVG'

type MoreButtonProps = {
  post: PostProps
  session: SessionProps | null
  isMobile: boolean
  isListing?: boolean
}

const MoreButton = ({ post, isMobile, session, isListing }: MoreButtonProps) => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const message = useMessage()

  const deletePost = async () => {
    try {
      await postapis.deletePost(post._id)
      router.refresh()
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <div className={`flex items-center ${isMobile && isListing && 'articleLink'}`}>
      <ClickOutHandler onClickOut={() => setShow(false)}>
        <div>
          <button
            aria-label="more options"
            aria-haspopup="true"
            className="flex h-full items-center rounded-sm p-2 hover:bg-reddit_dark-brightest"
            type="button"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              setShow(!show)
            }}
          >
            <MoreIcon />
          </button>
          <div className={`absolute z-20 ${show ? 'block' : 'hidden'}`}>
            <div className="flex rounded-md border border-reddit_border bg-reddit_dark-brighter">
              {session?.user?.username === post.author ||
                (session?.user?.role === 1 && (
                  <button
                    className="flex w-auto p-2 text-reddit_text-darker hover:bg-blue-900 lg:w-[200px]"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      deletePost()
                    }}
                  >
                    <BsTrashFill className="mr-2 mt-1 h-4 w-4" />
                    <p className="text-sm">Delete</p>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </ClickOutHandler>
    </div>
  )
}

export default MoreButton
