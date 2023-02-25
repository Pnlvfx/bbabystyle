import Link from "next/link";
import { useEffect, useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";
import commentapis from "../API/commentapis";
import { catchErrorWithMessage } from "../API/config/apiErrors";
import { useModals } from "../auth/modal/ModalsProvider";
import { useSession } from "../auth/UserContextProvider";
import { buttonClass } from "../utils/buttons/Button";
import { useMessage } from "../utils/message/TimeMsgContext";

interface CommentFormProps {
  rootId: string;
  parentId: string;
  showAuthor: boolean;
  getComments: () => Promise<void>;
  onCancel?: () => void;
}

const CommentForm = ({ rootId, parentId, showAuthor, getComments, onCancel }: CommentFormProps) => {
  const { session } = useSession();
  const [commentBody, setCommentBody] = useState("");
  const [commentBodyLength, setCommentBodyLength] = useState(0);
  const [enableComment, setEnableComment] = useState(false);
  const [active, setActive] = useState(false);
  const message = useMessage();
  const authModal = useModals();

  const doPostComment = async () => {
    try {
      await commentapis.postComment(commentBody, parentId, rootId, authModal);
      setCommentBody("");
      getComments();
    } catch (err) {
      catchErrorWithMessage(err, message);
    }
  };

  useEffect(() => {
    if (commentBodyLength >= 1) {
      setEnableComment(true);
    }
  }, [commentBodyLength]);

  return (
    <>
      {session?.user && showAuthor && (
        <div className="mx-1 mb-1">
          <span className="text-[16px] leading-[18px] lg:text-[12px]">
            Comment as{" "}
            <Link className="text-[16px] leading-[16px] text-[#4fbcff] lg:text-[12px]" href={`/user/${session.user.username.toLowerCase()}`}>
              {session.user.username}
            </Link>
          </span>
        </div>
      )}
      <div className="left-[33px]">
        <div className="relative">
          <ClickOutHandler
            onClickOut={() => {
              setActive(false);
            }}
          >
            <div
              className={`solid relative mt-2 rounded-[4px] border border-bbaby-border bg-bbaby-brighter ${active && "border-bbbay-text"}`}
              onClick={() => {
                setActive(true);
              }}
            >
              <textarea
                className="h-[130px] max-h-[270px] min-h-[150px] w-full bg-bbaby-brighter p-2 pl-3 text-[16px] outline-none placeholder:text-bbaby-text_darker lg:placeholder:text-sm"
                onChange={(e) => {
                  setCommentBody(e.target.value);
                  setCommentBodyLength(e.target.value.length);
                }}
                value={commentBody}
                placeholder={"What are your thoughts?"}
              />
              <div className="h-[34px] w-full bg-bbaby-brightest">
                <div className="text-right">
                  {!!onCancel && (
                    <button className={`${buttonClass()} mr-4 h-[24px] border-none hover:bg-bbaby-hover`} onClick={onCancel}>
                      Cancel
                    </button>
                  )}
                  <button
                    disabled={!enableComment}
                    onClick={doPostComment}
                    className={`my-1 mr-2 h-[24px] ${buttonClass()} ${enableComment ? "text-opacity-100" : "cursor-not-allowed text-opacity-40"}`}
                  >
                    <p>Comment</p>
                  </button>
                </div>
              </div>
            </div>
          </ClickOutHandler>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
