"use client";
import { BsSearch } from "react-icons/bs";
import Router from "next/router";
import { MouseEvent, useState } from "react";
import SearchDropdown from "./SearchDropdown";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [show, setShow] = useState(false);

  const doSearch = (ev: MouseEvent<HTMLFormElement>) => {
    ev.preventDefault();
    Router.push({
      pathname: "/search",
      query: { text: searchText },
    });
    setShow(false);
  };

  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          setShow(true);
        }}
        className="mr-3 flex-grow rounded-md h-[36px] ml-1 bg-reddit_dark-brightest 2xl:ml-64 2xl:mr-64 border border-reddit_border hover:border-reddit_text"
      >
        <form onSubmit={doSearch} className="h-full flex items-center text-reddit_text-darker">
          <BsSearch className="h-5 w-5 flex-none ml-3" />
          <input
            type="text"
            className="w-full bg-reddit_dark-brightest p-1 pl-2 text-sm text-reddit_text placeholder:text-sm placeholder:text-reddit_text-darker focus:outline-none text-[16px]"
            placeholder="Search Bbaby"
            value={searchText}
            onChange={(ev) => setSearchText(ev.target.value)}
          />
        </form>
        <SearchDropdown show={show} setShow={setShow} />
      </div>
    </>
  );
};

export default SearchBar;
