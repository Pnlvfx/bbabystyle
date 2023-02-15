import Link from "next/link";
import { use } from "react";
import ssrapis from "../../../../components/API/ssrapis";
import BoardHeader from "../../../../components/community/BoardHeader";
import BestPost from "../../../../components/post/BestPost";
import Feed from "../../../../components/post/Feed";
import PostForm from "../../../../components/post/PostForm";
import Donations from "../../../../components/widget/Donations";
import PolicyWidget from "../../../../components/widget/PolicyWidget";
import Widget from "../../../../components/widget/Widget";

interface CommunityPageProps {
  params: {
    community: string;
  };
}

const CommunityPage = ({ params }: CommunityPageProps) => {
  const posts = use(ssrapis.getPosts(15, 0, "community", params.community));
  const community = use(ssrapis.getCommunity(params.community));
  const session = use(ssrapis.getSession());

  if (!community) {
    return <div></div>;
  }

  return (
    <>
      <span
        className={`mx-auto block min-w-[260px] flex-row p-2 px-4`}
        style={{
          background: `url(${community.cover}) center center / cover no-repeat rgb(0, 108, 189)`,
          filter: "none",
          height: "228px",
        }}
      >
        <Link href={`/b/${community.name?.toLowerCase()}`}>
          <div className="relative m-auto h-full max-w-[1200px]">
            <div className="left-[50%] h-[176px]" style={{ transform: "translate(-50%, -50%)" }}>
              {community.name}
            </div>
          </div>
        </Link>
      </span>
      <div className="block w-full bg-reddit_dark-brighter">
        <div className="mx-auto flex max-w-[984px] flex-col items-start justify-between pr-4 pl-6">
          <div className="relative mb-3 mt-[-14px] flex items-start">
            <BoardHeader community={community} />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-full justify-center md:py-5 md:px-6">
        <div className="w-full lg:w-[640px]">
          {session?.user && (
            <div className="mb-[18px]">
              <PostForm session={session} />
            </div>
          )}
          <div className="mb-4">
            <BestPost />
          </div>
          <Feed posts={posts} community={community} />
        </div>
        {!session?.device?.mobile && (
          <div className="ml-6 hidden lg:block">
            <Widget />
            <Donations />
            <PolicyWidget />
          </div>
        )}
      </div>
    </>
  );
};

export default CommunityPage;
