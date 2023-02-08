"use client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import postapis from "../API/postapis/postapis";
import { useSession } from "../auth/UserContextProvider";
import Donations from "../widget/Donations";
import PolicyWidget from "../widget/PolicyWidget";
import Widget from "../widget/Widget";
import BestPost from "./BestPost";
import Post from "./Post";
import PostForm from "./PostForm";
import PostModal from "./PostModal";

type FeedProps = {
  posts: PostProps[];
  community?: CommunityProps
  author?: string;
};

const Feed = ({ posts: ssrPost, community, author }: FeedProps) => {
  const { session } = useSession();
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
      <div className="mx-auto flex max-w-full justify-center md:py-5 md:px-6">
        <div className="w-full lg:w-[640px]">
          {session?.user && !author && (
          <div className="mb-[18px]">
            <PostForm community={community} />
          </div>
        )}
          <div className="mb-4">
            <BestPost />
          </div>
          <div>
            <InfiniteScroll dataLength={posts?.length || 1} next={getMorePosts} hasMore={hasMore} loader={<div />} endMessage={<></>}>
              {posts?.length >= 1 ? (
                posts.map((post) => {
                  return <Post key={post._id} post={post} isListing={true} setPostForModal={setPostForModal} />;
                })
              ) : (
                <div></div>
              )}
            </InfiniteScroll>
          </div>
        </div>
        {!session?.device?.mobile && (
          <div className="ml-6 hidden lg:block">
            <Widget community={community} />
            <Donations />
            <PolicyWidget />
          </div>
        )}
      </div>
    </>
  );
};

export default Feed;
