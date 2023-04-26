import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CommentIcon } from '../../utils/svg/SVG'
import { PostComponent } from '../Post'
import { openPost } from './hooks'
import MoreButton from './MoreButton'
import ShareButton from './ShareButton'
import Voting from './Voting'

const PostButtons = ({ post, isListing, setPostForModal, session, isMobile }: PostComponent) => {
  const router = useRouter()
  return (
    <div className="flex h-[40px] flex-row px-[2px]">
      <div className="flex grow items-stretch overflow-hidden pl-1 pr-2 text-[12px] font-bold leading-4 text-reddit_text-darker">
        <div className={`bar-voting ${isMobile && isListing && 'articleLink'}`}>
          <Voting ups={post.ups} postId={post._id} liked={post.liked} session={session} />
        </div>
        <Link
          href={post.permalink}
          scroll={false}
          className={`mr-1 box-border flex items-center p-2 ${isListing && 'hover:bg-reddit_dark-brightest'} ${isMobile && 'articleLink'}`}
          onClick={(e) => {
            if (isListing) {
              openPost(e, post, router, setPostForModal)
            }
          }}
        >
          <CommentIcon role="presentation" />
          <span className="ml-[6px]">{post.numComments} Comments</span>
        </Link>
        <ShareButton linkToCopy={post.permalink} isListing={isListing} isMobile={isMobile} />
        <MoreButton post={post} isListing={isListing} isMobile={isMobile} session={session} />
      </div>
    </div>
  )
}

export default PostButtons
