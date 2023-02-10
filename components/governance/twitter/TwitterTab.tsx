"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSpaceShuttle } from "react-icons/fa";
import { ITflagIcon, USFlagIcon } from "../../utils/svg/SVG";

const TwitterTab = () => {
  const pathname = usePathname();
  return (
    <div className="flex space-x-3 rounded-md border border-reddit_border bg-reddit_dark-brighter py-[13px] px-2">
      <Link
        href={"/governance/twitter"}
        className={`rounded-full py-1 px-3 hover:bg-reddit_dark-brightest ${
          pathname === "/governance/twitter"
            ? "bg-reddit_dark-brightest text-bbaby-text"
            : "text-bbaby-text_darker"
        }`}
      >
        <div className="flex h-5 items-center space-x-1">
          <FaSpaceShuttle className="h-5 w-5 -rotate-90" />
          <p className="text-sm font-bold">Home</p>
        </div>
      </Link>
      <Link
        href={"/governance/twitter/english"}
        className={`rounded-full py-1 px-3 hover:bg-reddit_dark-brightest ${
          pathname === "/governance/twitter/english"
            ? "bg-reddit_dark-brightest text-bbaby-text"
            : "text-bbaby-text_darker"
        }`}
      >
        <div className="flex h-5 items-center space-x-1">
          <USFlagIcon className="h-5 w-5" />
          <p className="text-sm font-bold">English</p>
        </div>
      </Link>
      <Link
        href={"/governance/twitter/italian"}
        className={`rounded-full py-1 px-3 hover:bg-reddit_dark-brightest ${
          pathname === "/governance/twitter/italian"
            ? "bg-reddit_dark-brightest text-bbaby-text"
            : "text-bbaby-text_darker"
        }`}
      >
        <div className="flex h-5 items-center space-x-1">
          <ITflagIcon className="h-5 w-5" />
          <p className="text-sm font-bold">Italian</p>
        </div>
      </Link>
    </div>
  );
};

export default TwitterTab;
