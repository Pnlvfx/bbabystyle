import { use } from "react";
import ssrapis from "../../../../../../components/API/ssrapis";
import Comment from "../../../../../../components/comment/Comment";
import Post from "../../../../../../components/post/Post";
import Donations from "../../../../../../components/widget/Donations";
import Widget from "../../../../../../components/widget/Widget";

interface PostPageProps {
  params: {
    community: string;
    id: string;
  };
  searchParams: {};
}

const PostPage = ({ params }: PostPageProps) => {
  const session = use(ssrapis.getSession());
  const post = use(ssrapis.getPost(params.id));

  if (!post) {
    return <div></div>;
  }

  return (
    <>
      {session?.device?.mobile ? (
        <div className="mb-2 bg-reddit_dark-brighter pt-2">
          <Post post={post} isListing={false} />
          <Comment post={post} />
        </div>
      ) : (
        <div className="flex min-h-[calc(100vh_-_48px)] flex-col">
          <div className="flex max-w-[1600px] flex-row justify-center md:py-5 md:px-6 lg:mx-auto">
            <div className="w-full max-w-[750px] flex-none break-words rounded-md bg-reddit_dark-brighter lg:mr-4 lg:w-7/12 xl:w-8/12 2xl:w-[750px]">
              <Post post={post} isListing={false} />
              <Comment post={post} />
            </div>
            <div className="hidden lg:block">
              <Widget community={post.community_detail} />
              <Donations />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostPage;
