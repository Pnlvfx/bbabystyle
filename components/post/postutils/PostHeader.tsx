import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { useSession } from "../../auth/UserContextProvider";
import TimeAgo from "react-timeago";

type PostHeaderProps = {
  post: PostProps;
  isListing?: boolean;
};

const PostHeader = ({ post, isListing }: PostHeaderProps) => {
  const { session } = useSession();
  const router = useRouter();

  const linkToCommunity = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/b/${post.community.toLowerCase()}`);
  };

  const linkToAuthor = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/user/${post.author.toLowerCase()}`);
  };
  return (
    <div className={`relative mx-2 mb-2 flex items-start text-[12px] leading-4`}>
      <div className="flex-none align-baseline">
        <Link
          href={`/b/${post.community.toLowerCase()}`}
          aria-label="Community"
          className={`inline align-baseline font-bold leading-5 ${session?.device?.mobile && isListing && "articleLink"}`}
          onClick={linkToCommunity}
        >
          {post.communityIcon && (
            <div className="relative mr-1 inline-block h-5 w-5 rounded-full bg-[#4c075a] align-middle">
              <Image role={"presentation"} src={post.communityIcon} alt="Community Icon" className="rounded-full" width={20} height={20} />
            </div>
          )}
        </Link>
      </div>
      <div className="flex flex-shrink flex-grow flex-wrap items-center overflow-hidden">
        <div className="inline items-center font-normal leading-4">
          <div className="inline-block flex-none">
            <Link
              href={`/b/${post.community.toLowerCase()}`}
              className={`inline align-baseline font-bold leading-5 hover:underline ${session?.device?.mobile && isListing && "articleLink"}`}
              onClick={linkToCommunity}
            >
              {`b/${post.community}`}
            </Link>
          </div>
          <span className="mx-1 align-middle text-[6px] leading-5">-</span>
          <span className="flex-none align-baseline text-reddit_text-darker">Posted by</span>{" "}
          <div className=" inline-block flex-none text-reddit_text-darker">
            <div>
              <Link
                href={`/user/${post.author.toLowerCase()}`}
                className={`hover:underline ${session?.device?.mobile && isListing && "articleLink"}`}
                onClick={linkToAuthor}
              >
                {"u/" + post.author}
              </Link>
            </div>
          </div>
          <TimeAgo className="ml-[3px] font-normal text-reddit_text-darker" date={post.createdAt} />
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
