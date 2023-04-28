import Link from 'next/link'
import { CommentIcon } from '../../utils/svg/SVG'
import { PostComponent } from '../Post'
import { openPost } from '../postutils/hooks'
import { useRouter } from 'next/navigation'

const CommentsButton = ({ isListing, isMobile, post, setPostForModal }: PostComponent) => {
  const router = useRouter()
  return (
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
  )
}

export default CommentsButton
