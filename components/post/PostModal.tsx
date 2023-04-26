import { useRouter } from 'next/navigation'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { GrDocumentText } from 'react-icons/gr'
import communityapis from '../API/communityapis'
import Comment from '../comment/Comment'
import { CloseIcon } from '../utils/svg/SVG'
import CommunityInfo from '../widget/communityinfo/CommunityInfo'
import Donations from '../widget/Donations'
import Widget from '../widget/Widget'
import Post from './Post'

type PostModalProps = {
  session: SessionProps | null
  post: PostProps
  isMobile: boolean
  onClickOut: () => void
}

const PostModal = ({ post, onClickOut, isMobile, session }: PostModalProps) => {
  const router = useRouter()
  const clickOut = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    router.back()
    onClickOut()
  }
  const postRef = useRef(post)
  const [community, setCommunity] = useState<CommunityProps>()

  useEffect(() => {
    const get = async () => {
      try {
        const c = await communityapis.getCommunity(postRef.current.community)
        setCommunity(c)
      } catch (err) {}
    }
    get()
  }, [])

  if (!community) {
    //create a cool loader
    return <div></div>
  }

  return (
    <div className="fixed inset-x-0 bottom-0 top-12 z-20 h-full w-full bg-[rgb(25,25,25)]">
      <div className="relative h-full w-full overflow-y-auto" onClick={clickOut}>
        <div
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            //prevent closing modal
          }}
          tabIndex={-1}
          className="sticky inset-x-0 top-0 mx-auto box-border h-12 w-[calc(100%_-_160px)] max-w-[1280px] bg-reddit_dark"
        >
          <div className="m-auto flex h-full w-full max-w-[1128px] items-center md:px-8">
            <div className={`flex w-full max-w-[calc(100%_-_324px)] grow items-center`}>
              <div className=""></div>
              <i className="icon mr-2">
                <GrDocumentText className="icon h-5 w-5 text-reddit_text" />
              </i>
              <div className="relative flex min-w-0 break-words">
                <div className="inline overflow-hidden text-ellipsis whitespace-nowrap break-words pr-[5px] text-[14px] font-medium leading-[18px]">
                  <h1 className="inline">{post.title}</h1>
                </div>
              </div>
            </div>
            <div className="ml-3 flex w-[312px] justify-end text-[12px] font-bold leading-4">
              <button
                role={'button'}
                tabIndex={0}
                title="Close"
                aria-label="Close"
                className="relative box-border flex min-h-[24px] w-auto min-w-[24px] items-center justify-center rounded-full border border-transparent px-2 py-1 text-center text-[12px] font-bold hover:bg-reddit_dark-brighter"
                onClick={clickOut}
              >
                <i className="inline-block pr-1">
                  <CloseIcon className="h-4 w-4 fill-bbaby-text_darker" />
                </i>
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
        <div
          tabIndex={-1}
          className="relative mx-auto box-border flex w-[calc(100%_-_160px)] max-w-[1280px] justify-center bg-reddit_dark pb-8"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            //prevent closing modal
          }}
        >
          <div className="m-8 mr-3 min-h-[100vh] w-full grow break-words rounded-md bg-bbaby-brighter pb-[1px] md:max-w-[740px]">
            <Post session={session} post={post} isListing={false} isMobile={isMobile} />
            <Comment post={post} session={session} />
          </div>
          {!isMobile && (
            <div className="m-8 ml-0 hidden lg:block">
              <Widget>
                <CommunityInfo community={community} session={session} />
              </Widget>
              <Donations />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostModal
