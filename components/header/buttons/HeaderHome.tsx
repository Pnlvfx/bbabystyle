"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";
import { useSession } from "../../auth/UserContextProvider";
import { HomeIcon, PlusIcon } from "../../utils/svg/SVG";
import { HiChevronDown } from "react-icons/hi";
import Image from "next/image";

const HeaderHome = () => {
  const [path, setPath] = useState(
    <h1 className="ml-2 text-sm font-bold">Home</h1>
  );
  const [icon, setIcon] = useState(<HomeIcon className="h-5 w-5" />);
  const { session } = useSession();
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const query = useSearchParams();

  useEffect(() => {
    if (pathname === "/" || pathname === "/best") {
      setPath(<h1 className="ml-2 text-sm font-bold">Home</h1>);
      setIcon(<HomeIcon />);
    } else if (query.get("community")) {
      setPath(
        <span className="ml-2 text-sm font-bold">
          b/{query.get("community")}
        </span>
      );
      setIcon(
        <div className="h-5 w-5 rounded-full bg-gray-800">
          {communityInfo.image && (
            <Image
              className="rounded-full"
              src={communityInfo.image}
              alt="Community Icon"
              height={20}
              width={20}
            />
          )}
        </div>
      );
    } else if (router.query.username) {
      setPath(
        <h1 className="ml-2 text-sm font-bold">u/{router.query.username}</h1>
      );
    } else if (session?.user && router.pathname.match("/settings")) {
      setPath(<span className="ml-2 text-sm font-bold">User Settings</span>);
      setIcon(
        <div className="h-5 w-5 rounded-full bg-gray-800">
          <Image
            className="rounded-full"
            src={session.user.avatar}
            alt="User Icon"
            height={20}
            width={20}
          />
        </div>
      );
    } else if (router.pathname.match("/governance")) {
      setPath(<h1 className="ml-2 text-sm font-bold">Gov</h1>);
      setIcon(<TbBabyCarriage className="h-5 w-5" />);
    } else if (router.pathname.match("/submit")) {
      setPath(<span className="ml-2 text-sm font-bold">Create Post</span>);
      setIcon(<PlusIcon className="h-5 w-5" />);
    } else if (router.pathname.match("/bbaby")) {
      setPath(<span className="ml-2 text-sm font-bold">Top Communities</span>);
      setIcon(<AiOutlineOrderedList className="h-5 w-5" />);
    } else if (router.pathname.match("/search")) {
      setPath(<h1 className="ml-2 text-sm font-bold">Search Results</h1>);
      setIcon(<BsSearch className="h-5 w-5" />);
    } else if (router.pathname.match("/news")) {
      setPath(<h1 className="ml-2 text-sm font-bold">News</h1>);
      setIcon(<TiNews className="h-5 w-5" />);
    }
  }, [pathname]);
  return (
    <div
      aria-label="search your community"
      id="home_button"
      className={`lg:w-[270px] border rounded relative h-9 min-w-[72px] hover:border-reddit_border ${
        show ? "border-reddit_border" : "border-transparent"
      }`}
    >
      <ClickOutHandler
        onClickOut={() => {
          setShow(false);
        }}
      >
        <button
          tabIndex={0}
          onClick={(e) => {
            e.preventDefault();
            setShow(!show);
          }}
          className="bottom-0 rounded h-full left-0 leading-[34px] overflow-hidden pl-10 pr-14 absolute text-left text-ellipsis top-0 whitespace-nowrap w-full"
        >
          <div className="ml-1 flex items-center">
            {icon}
            {path}
            <HiChevronDown className="ml-auto mr-2 h-[20px] w-[20px]" />
          </div>
        </button>
      </ClickOutHandler>
      {show && (
        <div
          className="solid absolute left-[-1px] top-[100%] right-0 mt-[-1px] box-border max-h-[482px] overflow-x-hidden overflow-y-scroll rounded-md border border-t-0 border-reddit_border bg-reddit_dark-brighter pb-4 "
          role={"menu"}
        >
          <input
            aria-label="search your community"
            className="mx-4 mt-4 box-border h-[30px] w-[calc(100%_-_32px)] border border-reddit_border bg-reddit_dark-brightest px-[6px] text-[16px] outline-none placeholder:text-reddit_text-darker"
            placeholder="Filter"
          />
          <div className="px-8 pt-4 pb-2 text-[10px] font-semibold uppercase leading-[16px] text-reddit_text-darker">
            Moderating
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderHome;
