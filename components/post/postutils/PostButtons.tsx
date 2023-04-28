import { PostComponent } from '../Post'
import MoreButton from '../buttons/MoreButton'
import ShareButton from '../buttons/ShareButton'
import Voting from './Voting'
import CommentsButton from '../buttons/CommentsButton'

const PostButtons = ({ post, isListing, setPostForModal, session, isMobile }: WithSession & PostComponent) => {
  return (
    <div className="flex h-[40px] flex-row px-[2px]">
      <div className="flex grow items-stretch overflow-hidden pl-1 pr-2 text-[12px] font-bold leading-4 text-reddit_text-darker">
        <div className={`bar-voting ${isMobile && isListing && 'articleLink'}`}>
          <Voting ups={post.ups} postId={post.id} liked={post.liked} session={session} />
        </div>
        <CommentsButton isListing={isListing} isMobile={isMobile} post={post} setPostForModal={setPostForModal} />
        <ShareButton linkToCopy={post.permalink} isListing={isListing} isMobile={isMobile} />
        <MoreButton postId={post.id} author={post.author} isListing={isListing} isMobile={isMobile} session={session} />
      </div>
    </div>
  )
}

export default PostButtons
