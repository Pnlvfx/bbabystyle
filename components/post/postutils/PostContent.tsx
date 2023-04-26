import Image from 'next/image'
import { LOGO } from '../../../config/config'
import { useSession } from '../../auth/UserContextProvider'
import { PostComponent } from '../Post'
import PostButtons from './PostButtons'
import PostHeader from './PostHeader'
import PostTitle from './PostTitle'
import Voting from './Voting'
import Video from '../../video-player'

const PostContent = ({ post, isListing, setPostForModal }: PostComponent) => {
  const { session } = useSession()
  return (
    <>
      <div className="absolute left-0 top-0 box-border hidden w-10 flex-col items-center border-l-4 border-solid border-transparent py-2 pr-1 md:flex">
        <div className="flex flex-col items-center">
          <Voting ups={post.ups} postId={post._id} liked={post.liked} />
        </div>
      </div>
      <div className="relative bg-bbaby-brighter pt-2">
        {session?.device?.mobile && isListing ? (
          <header>
            <PostHeader post={post} isListing={isListing} />
          </header>
        ) : (
          <PostHeader post={post} />
        )}
        <PostTitle isListing={isListing} post={post} />
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
        {session?.device?.mobile ? (
          <>
            {isListing ? (
              <footer className="pointer-events-none">
                <PostButtons post={post} isListing={isListing} setPostForModal={setPostForModal} />
              </footer>
            ) : (
              <PostButtons post={post} isListing={isListing} setPostForModal={setPostForModal} />
            )}
          </>
        ) : (
          <PostButtons post={post} isListing={isListing} setPostForModal={setPostForModal} />
        )}
      </div>
    </>
  )
}

export default PostContent
