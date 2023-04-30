import Image from 'next/image'
import { LOGO } from '../../../config/config'
import { PostComponent } from '../Post'
import PostButtons from './PostButtons'
import PostHeader from './PostHeader'
import PostTitle from './PostTitle'
import Voting from './Voting'
import Video from '../../video-player'

const PostContent = ({ post, isListing, isMobile, setPostForModal, session }: WithSession & PostComponent) => {
  return (
    <>
      <div className="voting absolute left-0 top-0 box-border w-10 flex-col items-center border-l-4 border-solid border-transparent py-2 pr-1">
        <div className="flex flex-col items-center">
          <Voting ups={post.ups} postId={post.id} liked={post.liked} session={session} />
        </div>
      </div>
      <div className="relative bg-bbaby-brighter pt-2">
        {isMobile && isListing ? (
          <header>
            <PostHeader
              author={post.author}
              community={post.community}
              communityIcon={post.communityIcon}
              createdAt={post.createdAt}
              isListing={isListing}
              isMobile={isMobile}
            />
          </header>
        ) : (
          <PostHeader
            author={post.author}
            community={post.community}
            communityIcon={post.communityIcon}
            createdAt={post.createdAt}
            isListing={isListing}
            isMobile={isMobile}
          />
        )}
        <PostTitle isListing={isListing} isMobile={isMobile} title={post.title} permalink={post.permalink} />
        <div className="mt-2">
          <div className="relative max-h-[512px] overflow-hidden">
            {post?.mediaInfo?.isImage && post?.mediaInfo?.image && (
              <Image src={`${post.mediaInfo.image}`} alt="Post image" height={post.mediaInfo.dimension[0]} width={post.mediaInfo.dimension[1]} />
            )}
            {post?.mediaInfo?.isVideo && post?.mediaInfo?.video && (
              <>
                <div className="w-full pb-[105.35%]" />
                <div className="absolute inset-0">
                  <Video url={post.mediaInfo.video.url} poster={post.mediaInfo.video.url.replace('mp4', 'jpg')} scroll={isListing} Logo={LOGO} />
                </div>
              </>
            )}
          </div>
          {post.body && (
            <div className="--max-h-[250px] overflow-hidden px-2 pb-[10px] pt-[5px]">
              <div className="mb-[-1px] break-words pb-[1px] text-[14px] leading-[21px] ">
                <p className="whitespace-pre-wrap">{post.body}</p>
              </div>
            </div>
          )}
        </div>
        {isMobile && isListing ? (
          <footer className="pointer-events-none">
            <PostButtons post={post} isListing={isListing} isMobile={isMobile} setPostForModal={setPostForModal} session={session} />
          </footer>
        ) : (
          <PostButtons post={post} isListing={isListing} isMobile={isMobile} setPostForModal={setPostForModal} session={session} />
        )}
      </div>
    </>
  )
}

export default PostContent
