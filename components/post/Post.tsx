'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { openPost } from './postutils/hooks'
import PostContent from './postutils/PostContent'

export interface PostComponent {
  post: PostProps
  isListing: boolean
  setPostForModal?: Dispatch<SetStateAction<PostProps | undefined>>
  isMobile: boolean
  session: SessionProps | null
}

const Post = ({ post, isListing, setPostForModal, session, isMobile }: PostComponent) => {
  const router = useRouter()
  return (
    <div>
      <div>
        {!isMobile ? (
          <div
            className={`post-container relative ${isListing && 'cursor-pointer'}`}
            data-is-listing={`${isListing}`}
            onClick={(e) => {
              if (isListing) {
                openPost(e, post, router, setPostForModal)
              }
            }}
          >
            <PostContent session={session} post={post} isListing={isListing} setPostForModal={setPostForModal} isMobile={isMobile} />
          </div>
        ) : isListing ? (
          <article data-is-listing={'true'} className={`post-container article`} id={post._id}>
            <Link style={{ pointerEvents: 'all' }} href={post.permalink} />
            <div className="pointer-events-none relative">
              <PostContent session={session} post={post} isListing={isListing} isMobile={isMobile} setPostForModal={setPostForModal} />
            </div>
          </article>
        ) : (
          <PostContent session={session} post={post} isListing={isListing} isMobile={isMobile} setPostForModal={setPostForModal} />
        )}
      </div>
    </div>
  )
}

export default Post
