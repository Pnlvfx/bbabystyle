"use client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import postapis from "../API/postapis/postapis";
import Post from "./Post";
import PostModal from "./PostModal";

type FeedProps = {
  posts: PostProps[];
  community?: CommunityProps;
  author?: string;
};

const Feed = ({ posts: ssrPost, community, author }: FeedProps) => {
  const [posts, setPosts] = useState(ssrPost);
  const [hasMore, setHasMore] = useState(true);
  const [postForModal, setPostForModal] = useState<PostProps>();

  const getMorePosts = async () => {
    try {
      const newPosts = await postapis.getPosts(posts.length, {
        community: community?.name,
        author,
        limit: 10,
      });
      if (newPosts.length < 10) {
        setHasMore(false);
      }
      setPosts([...posts, ...newPosts]);
    } catch (err) {}
  };
  return (
    <>
      {postForModal && (
        <PostModal
          post={postForModal}
          onClickOut={() => {
            setPostForModal(undefined);
          }}
        />
      )}
      <div>
        <InfiniteScroll
          dataLength={posts?.length || 1}
          next={getMorePosts}
          hasMore={hasMore}
          loader={<div />}
          endMessage={<></>}
        >
          {posts?.length >= 1 ? (
            posts.map((post) => {
              return (
                <Post
                  key={post._id}
                  post={post}
                  isListing={true}
                  setPostForModal={setPostForModal}
                />
              );
            })
          ) : (
            <div></div>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Feed;
