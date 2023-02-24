"use client";

import { useRouter } from "next/navigation";

const PostNotFoundButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.push("/");
  };

  return (
    <button
      role={"button"}
      tabIndex={0}
      className="relative bg-bbaby-text text-bbaby-dark text-[14px] font-bold leading-[17px] min-h-[32px] min-w-[32px] py-1 px-4 items-center rounded-full flex justify-center text-center w-auto"
      onClick={goBack}
    >
      Go Home
    </button>
  );
};

export default PostNotFoundButton;
