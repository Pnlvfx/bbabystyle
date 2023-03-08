'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { useSession } from '../auth/UserContextProvider'
import { openPost } from './postutils/hooks'
import PostContent from './postutils/PostContent'

interface ExtendPostProps {
  post: PostProps
  isListing: boolean
}

export interface PostComponent extends ExtendPostProps {
  setPostForModal?: Dispatch<SetStateAction<PostProps | undefined>>
}

const Post = ({ post, isListing, setPostForModal }: PostComponent) => {
  const { session } = useSession()
  const router = useRouter()
  return (
    <div>
      <div>
        {!session?.device?.mobile ? (
          <div
            className={`post-container ${isListing && 'cursor-pointer'}`}
            data-is-listing={`${isListing}`}
            onClick={(e) => {
              if (isListing) {
                openPost(e, post, router, setPostForModal)
              }
            }}
          >
            <PostContent post={post} isListing={isListing} setPostForModal={setPostForModal} />
          </div>
        ) : (
          <>
            {isListing ? (
              <article data-is-listing={'true'} className={`post-container article`} id={post._id}>
                <Link style={{ pointerEvents: 'all' }} href={post.permalink} />
                <PostContent post={post} isListing={isListing} setPostForModal={setPostForModal} />
              </article>
            ) : (
              <PostContent post={post} isListing={isListing} setPostForModal={setPostForModal} />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Post
