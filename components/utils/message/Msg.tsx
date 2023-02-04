import { useEffect, useRef } from "react";
import { useMessage } from "./TimeMsgContext";
import { AiOutlineSketch, AiOutlineWarning } from "react-icons/ai";

const Msg = () => {
  const message = useMessage();
  const messageRef = useRef(message);

  useEffect(() => {
    if (!message.message.value) return;
    const ms = message.message.time ? message.message.time : 8000;
    setTimeout(() => {
      messageRef.current.setMessage({ value: "" });
    }, ms);
  }, [message]);

  if (!message.message.value) return null;

  return (
    <div className={`transition-all ${message.message.value ? "block opacity-100" : "hidden opacity-0"}`}>
      <div className="fixed bottom-0 z-30 flex w-full rounded-sm border border-reddit_border bg-[#141415] font-bold lg:left-[35%] lg:right-[50%] lg:bottom-12 lg:w-[700px] ">
        <div className={`w-5 ${message.message.status === "error" ? "bg-reddit_red" : "bg-reddit_blue"}`} />
        <div className="flex p-3 pl-4">
          {message.message.status === "error" ? <AiOutlineWarning className="h-5 w-5" /> : <AiOutlineSketch className="h-5 w-5" />}
          <p className="ml-2 text-[15px]">{message.message.value}</p>
        </div>
      </div>
    </div>
  );
};

export default Msg;
