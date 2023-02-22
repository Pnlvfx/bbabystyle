"use client";

import { useRouter } from "next/navigation";
import { PlusIcon } from "../../utils/svg/SVG";

const SubmitButton = () => {
  const router = useRouter();

  const click = () => {
    router.push("/submit");
  };
  return (
    <div className="md:ml-2 h-8">
      <button aria-label="Create Post" className={`w-8 h-8 rounded-[2px] items-center flex flex-row relative `} onClick={click}>
        <PlusIcon className="icon absolute top-0 bottom-0 left-0 right-0 m-auto" />
      </button>
    </div>
  );
};

export default SubmitButton;
