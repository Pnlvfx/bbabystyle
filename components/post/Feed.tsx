'use client'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import postapis from '../API/postapis/postapis'
import PostModal from './PostModal'
import Posts from './postutils/Posts'

type FeedProps = {
  posts: PostProps[]
  community?: CommunityProps
  author?: string
  isMobile: boolean
  session: SessionProps | null
}

const Feed = ({ posts: ssrPost, community, author, isMobile, session }: FeedProps) => {
  const [posts, setPosts] = useState(ssrPost)
  const [hasMore, setHasMore] = useState(true)
  const [postForModal, setPostForModal] = useState<PostProps>()
  const enableAds = false

  const getMorePosts = async () => {
    try {
      const newPosts = await postapis.getPosts(posts.length, {
        community: community?.name,
        author,
        limit: 10,
      })
      if (newPosts.length < 10) {
        setHasMore(false)
      }
      setPosts([...posts, ...newPosts])
    } catch (err) {}
  }

  const closeModal = () => {
    setPostForModal(undefined)
  }

  return (
    <>
      {postForModal && <PostModal post={postForModal} isMobile={isMobile} onClickOut={closeModal} session={session} />}
      <div>
        <InfiniteScroll dataLength={posts.length} next={getMorePosts} hasMore={hasMore} loader={<div />} endMessage={<></>}>
          <Posts isMobile={isMobile} posts={posts} session={session} setPostForModal={setPostForModal} enableAds={enableAds} />
        </InfiniteScroll>
      </div>
    </>
  )
}

export default Feed
