import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineRead } from "react-icons/ai";
import { FcVideoProjector } from "react-icons/fc";
import { useSession } from "../auth/UserContextProvider";
import ShareButton from "../post/postutils/ShareButton";

interface NewsButtonsProps {
  news: NewsProps;
  isListing: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  openNews: () => void;
}

const NewsButtons = ({ news, isListing, setEditMode, openNews }: NewsButtonsProps) => {
  const { session } = useSession();
  const router = useRouter();
  return (
    <div id="buttons" className="mt-2 mr-2 flex items-center rounded-sm text-xs font-bold text-reddit_text-darker">
      {isListing ? (
        <Link
          href={news.permalink}
          type="button"
          className="flex items-center rounded-md p-[10px] hover:bg-reddit_dark-brightest"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            openNews();
          }}
        >
          <AiOutlineRead className="h-5 w-5" />
          <p className="ml-1">News</p>
        </Link>
      ) : (
        <div className="flex items-center rounded-md p-[10px] hover:bg-reddit_dark-brightest">
          <AiOutlineRead className="h-5 w-5" />
          <p className="ml-1 text-xs">News</p>
        </div>
      )}
      {session?.user?.role === 1 && (
        <div className="flex md:items-center">
          <Link
            href={`/governance/youtube?permalink=${news.permalink}`}
            className="flex items-center rounded-md p-[10px] hover:bg-reddit_dark-brightest"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const url = `/governance/youtube?permalink=${news.permalink.replace("/news/", "")}`;
              router.push(url);
            }}
          >
            <FcVideoProjector className="h-5 w-5" />
            <p className="ml-1 text-xs">Create video</p>
          </Link>
          {!isListing && (
            <button
              className="flex items-center rounded-md p-[10px] hover:bg-reddit_dark-brightest"
              onClick={(e) => {
                e.preventDefault();
                setEditMode(true);
              }}
            >
              <AiOutlineRead className="h-5 w-5" />
              <p className="ml-1 text-xs">Edit News</p>
            </button>
          )}
        </div>
      )}
      <ShareButton linkToCopy={news.permalink} isListing={isListing} />
    </div>
  );
};

export default NewsButtons;
