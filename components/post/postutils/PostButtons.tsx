import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "../../auth/UserContextProvider";
import { CommentIcon } from "../../utils/svg/SVG";
import { PostComponent } from "../Post";
import { openPost } from "./hooks";
import MoreButton from "./MoreButton";
import ShareButton from "./ShareButton";
import Voting from "./Voting";

const PostButtons = ({ post, isListing, setPostForModal }: PostComponent) => {
  const { session } = useSession();
  const router = useRouter();
  return (
    <div className="flex h-[40px] flex-row px-[2px]">
      <div className="flex flex-grow items-stretch overflow-hidden pr-2 pl-1 text-[12px] font-bold leading-4 text-reddit_text-darker">
        <div className={`flex flex-row items-center px-[2px] md:hidden ${session?.device?.mobile && isListing && "articleLink"}`}>
          <Voting ups={post.ups} postId={post._id} liked={post.liked} />
        </div>
        <Link
          href={post.permalink}
          scroll={false}
          className={`mr-1 box-border flex items-center p-2 ${isListing && "hover:bg-reddit_dark-brightest"} ${
            session?.device?.mobile && "articleLink"
          }`}
          onClick={(e) => {
            if (isListing) {
              openPost(e, post, router, setPostForModal);
            }
          }}
        >
          <CommentIcon role="presentation" />
          <span className="ml-[6px]">{post.numComments} Comments</span>
        </Link>
        <ShareButton linkToCopy={post.permalink} isListing={isListing} />
        <MoreButton post={post} isListing={isListing} />
      </div>
    </div>
  );
};

export default PostButtons;
