import { Dispatch, SetStateAction } from 'react'
import Adsense from '../../google/Adsense'
import Post from '../Post'
const ads = [3, 12, 24, 36, 48, 97]

interface PostsProps {
  posts: PostProps[]
  isMobile: boolean
  session: SessionProps | null
  setPostForModal: Dispatch<SetStateAction<PostProps | undefined>>
  enableAds: boolean
}

const Posts = ({ posts, isMobile, session, setPostForModal, enableAds }: PostsProps) => {
  return (
    <>
      {posts?.length >= 1 ? (
        posts.map((post, index) => {
          if (enableAds && process.env.NODE_ENV === 'production' && ads.find((ad) => ad === index)) {
            return (
              <div key={index}>
                <div className="post-container" data-is-listing={'true'}>
                  <Adsense />
                </div>
              </div>
            )
          }
          return <Post key={post._id} post={post} isListing={true} isMobile={isMobile} setPostForModal={setPostForModal} session={session} />
        })
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Posts
