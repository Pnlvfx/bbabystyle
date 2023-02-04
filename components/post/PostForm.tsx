import Link from "next/link";
import { useSession } from "../auth/UserContextProvider";

type PostFormProps = {
  community?: string;
};

function PostForm({ community }: PostFormProps) {
  const { session } = useSession();
  if (!session?.user) return null;

  return (
    <div className="mx-auto flex rounded border border-reddit_border bg-reddit_dark-brighter p-2">
      <div className="h-[38px] w-[38px] overflow-hidden">
        <Link href={`/user/${session.user.username.toLowerCase()}`} className="h-[38px] w-[38px]">
          <div className="relative h-full">
            <div className="relative h-[38px] w-[38px] rounded-[50%]">
              <div className="h-full w-full rounded-[50%] bg-[#343536]" />
              <picture className="absolute bottom-0 h-full w-full rounded-[50%]">
                <img
                  src={session.user.avatar}
                  className="h-full w-full rounded-[50%]"
                  style={{ transformOrigin: "bottom center" }}
                  alt="User Avatar"
                />
              </picture>
            </div>
          </div>
        </Link>
      </div>
      <form className="ml-4 mr-2 flex-grow rounded-md border border-reddit_border bg-reddit_dark-brightest hover:border-reddit_text">
        <Link href={!community ? "/submit" : `/b/${community.toLowerCase()}/submit`}>
          <input
            type="text"
            className="text-[16px] md:text-[14px] leading-5 bg-reddit_dark-brightest p-2 px-3 block w-full rounded-md placeholder:text-reddit_text-darker"
            placeholder="Create Post"
          />
        </Link>
      </form>
    </div>
  );
}

export default PostForm;
