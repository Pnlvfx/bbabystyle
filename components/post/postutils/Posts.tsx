import { Dispatch, SetStateAction } from 'react'
import Adsense from '../../google/Adsense'
import Post from '../Post'
const ads = [3, 12, 24, 36, 48, 97]

interface PostsProps {
  posts: PostProps[]
  isMobile: boolean
  setPostForModal: Dispatch<SetStateAction<PostComponentProps | undefined>>
  enableAds: boolean
}

const Posts = ({ posts, isMobile, session, setPostForModal, enableAds }: WithSession & PostsProps) => {
  return (
    <>
      {posts?.length > 0 ? (
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
          return (
            <Post
              key={post._id}
              isListing={true}
              isMobile={isMobile}
              setPostForModal={setPostForModal}
              session={session}
              post={{
                author: post.author,
                community: post.community,
                communityIcon: post.communityIcon,
                createdAt: post.createdAt,
                id: post._id,
                liked: post.liked,
                numComments: post.numComments,
                permalink: post.permalink,
                title: post.title,
                ups: post.ups,
                body: post.body,
                mediaInfo: post.mediaInfo,
              }}
            />
          )
        })
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Posts
