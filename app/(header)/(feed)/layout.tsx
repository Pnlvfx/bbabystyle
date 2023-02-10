import { use } from "react";
import ssrapis from "../../../components/API/ssrapis";
import BestPost from "../../../components/post/BestPost";
import PostForm from "../../../components/post/PostForm";
import Donations from "../../../components/widget/Donations";
import PolicyWidget from "../../../components/widget/PolicyWidget";
import Widget from "../../../components/widget/Widget";

const FeedLayout = ({ children }: ChildrenProps) => {
  const session = use(ssrapis.getSession());
  return (
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
        {children}
      </div>
      {!session?.device?.mobile && (
        <div className="ml-6 hidden lg:block">
          <Widget />
          <Donations />
          <PolicyWidget />
        </div>
      )}
    </div>
  );
};

export default FeedLayout;
