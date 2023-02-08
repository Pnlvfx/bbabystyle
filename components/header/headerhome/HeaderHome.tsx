"use client";

import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";
import { HomeIcon } from "../../utils/svg/SVG";
import { HiChevronDown } from "react-icons/hi";
import styles from './hesderhome.module.css';

const HeaderHome = () => {
  const [path, setPath] = useState(<h1 className="inline">Home</h1>);
  const [icon, setIcon] = useState(<HomeIcon className="h-5 w-5" />);
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const openDropdown = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(!show);
  };

  useEffect(() => {
    if (pathname === "/" || pathname === "/best") {
      setPath(<h1 className="ml-2 text-sm font-bold">Home</h1>);
      setIcon(<HomeIcon className="leading-5 align-middle h-5 w-5 left-[10px] mt-[-10px] absolute top-[50%]" />);
    }
  }, [pathname]);

  return (
    <ClickOutHandler
      onClickOut={() => {
        setShow(false);
      }}
    >
      <div
        aria-label="search your community"
        id="home_button"
        className={`hidden md:block lg:w-[270px] border relative h-9 min-w-[72px] hover:border-reddit_border ${
          show ? "border-reddit_border rounded-t-[4px]" : "border-transparent rounded"
        }`}
      >
        <button
          className={styles.button}
          tabIndex={0}
          onClick={openDropdown}
        >
          <span className="hidden lg:inline text-[14px] leading-[18px] font-medium">{path}</span>
          {icon}
          <HiChevronDown className="icon mt-[-10px] pointer-events-none absolute right-2 top-[50%]" />
        </button>
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
            <div className="px-8 pt-4 pb-2 text-[10px] font-semibold uppercase leading-[16px] text-reddit_text-darker">Moderating</div>
          </div>
        )}
      </div>
    </ClickOutHandler>
  );
};

export default HeaderHome;
