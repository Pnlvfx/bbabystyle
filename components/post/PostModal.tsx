import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { GrDocumentText } from "react-icons/gr";
import { CloseIcon } from "../utils/svg/SVG";
import Comment from "./singlepost/Comment";

type PostModalProps = {
  post: PostProps;
  onClickOut: () => void;
};

const PostModal = ({ post, onClickOut }: PostModalProps) => {
  const router = useRouter();
  const clickOut = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push("/");
    onClickOut();
  };
  return (
    <div className="fixed top-12 bottom-0 left-0 right-0 z-20 h-full w-full bg-[rgb(25,25,25)]">
      <div className="relative h-full w-full overflow-y-auto" onClick={clickOut}>
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            //prevent closing modal
          }}
          tabIndex={-1}
          className="sticky left-0 right-0 top-0 mx-auto box-border h-12 w-[calc(100%_-_160px)] max-w-[1280px] bg-reddit_dark"
        >
          <div className="m-auto flex h-full w-full max-w-[1128px] items-center md:px-8">
            <div className={`flex w-full max-w-[calc(100%_-_324px)] flex-grow items-center `}>
              <div className=""></div>
              <i className="icon mr-2">
                <GrDocumentText className="icon h-5 w-5 text-reddit_text" />
              </i>
              <div className="relative flex min-w-0 break-words">
                <div className="inline overflow-hidden text-ellipsis whitespace-nowrap break-words pr-[5px] text-[14px] font-medium leading-[18px]">
                  <h1 className="inline">{post.title}</h1>
                </div>
              </div>
            </div>
            <div className="ml-3 flex w-[312px] justify-end text-[12px] font-bold leading-4">
              <button
                role={"button"}
                tabIndex={0}
                title="Close"
                aria-label="Close"
                className="relative box-border flex min-h-[24px] w-auto min-w-[24px] items-center justify-center rounded-full border border-transparent py-1 px-2 text-center text-[12px] font-bold hover:bg-reddit_dark-brighter"
                onClick={clickOut}
              >
                <i className="inline-block pr-1">
                  <CloseIcon className="h-4 w-4" />
                </i>
                <span>Close</span>
              </button>
            </div>
          </div>
        </div>
        <div
          tabIndex={-1}
          className="relative mx-auto box-border flex w-[calc(100%_-_160px)] max-w-[1280px] justify-center bg-reddit_dark pb-8"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            //prevent closing modal
          }}
        >
          <div className="m-8 mr-3 min-h-[100vh] w-full flex-grow break-words rounded-md bg-reddit_dark-brighter pb-[1px] md:max-w-[740px]">
            <Comment post={post} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
