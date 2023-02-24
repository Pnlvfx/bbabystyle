import { FaHeartBroken } from "react-icons/fa";
import PostNotFoundButton from "./PostNotFoundButton";

const PostNotFound = () => {
  return (
    <div className="bg-bbaby-brighter min-h-[calc(100vh-48px)] w-full pt-[48px]">
      <div className="rounded h-[500px] mx-auto mb-[60px] max-w-[95%] relative w-[1200px] items-center flex flex-col justify-center min-h-[340px]">
        <div className="flex items-center flex-col justify-center min-h-[340px] mt-[81px]">
          <FaHeartBroken className="h-[28px] w-[28px] mb-5" />
          <p className="text-center mb-5 mx-[50px] text-[18px] font-medium leading-[22px] text-bbaby-text_darker opacity-60">
            Sorry there doesn&apos;t seem to be anything here.
          </p>
          <PostNotFoundButton />
        </div>
      </div>
    </div>
  );
};

export default PostNotFound;
