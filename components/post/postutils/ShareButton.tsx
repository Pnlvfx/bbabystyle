import { AiOutlineLink } from "react-icons/ai";
import { catchErrorWithMessage } from "../../API/config/apiErrors";
import { useSession } from "../../auth/UserContextProvider";
import { useMessage } from "../../utils/message/TimeMsgContext";
import { ShareIcon } from "../../utils/svg/SVG";
import { ClickOutHandler } from "react-clickout-ts";
import { useState } from "react";

type ShareButtonProps = {
  linkToCopy: string;
  isListing: boolean;
};

const ShareButton = ({ linkToCopy, isListing }: ShareButtonProps) => {
  const { session } = useSession();
  const [show, setShow] = useState(false);
  const message = useMessage();

  const copyTextToClipboard = async (text: string) => {
    try {
      if ("clipboard" in navigator) {
        await navigator.clipboard.writeText(text);
      } else {
        document.execCommand("copy", true, text);
      }
      setShow(false);
      message.setMessage({ value: "Link copied!", time: 8000, status: "success" });
      //shareAnalytics()
    } catch (err) {
      catchErrorWithMessage(err, message);
    }
  };
  return (
    <div className={`mr-1 flex items-center ${session?.device?.mobile && isListing && "articleLink"}`}>
      <ClickOutHandler onClickOut={() => setShow(false)}>
        <div>
        <button
          className="flex h-full items-center rounded-sm p-2 hover:bg-reddit_dark-brightest"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            if (session?.device?.mobile) {
              copyTextToClipboard(`${window.location.origin}${linkToCopy}`.toLowerCase());
            } else {
              setShow(!show);
            }
          }}
        >
          <ShareIcon className="mr-[6px] leading-4" />
          <span className="max-h-[36px] overflow-hidden text-ellipsis text-left leading-3 ">Share</span>
        </button>
        <div className={`absolute z-20 ${show ? "block" : "hidden"} `}>
          <div className="z-10 flex overflow-hidden rounded-md border border-reddit_border bg-reddit_dark-brighter">
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                copyTextToClipboard(`${window.location.origin}${linkToCopy}`.toLowerCase());
              }}
            >
              <div className="flex py-2 pl-2 pr-12 text-reddit_text-darker">
                <AiOutlineLink className="mr-1 mt-[3px] h-5 w-5" />
                <button className="block">Copy Link</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </ClickOutHandler>
    </div>
  );
};

export default ShareButton;
