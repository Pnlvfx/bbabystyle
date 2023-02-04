"use client";
import { BsSearch } from "react-icons/bs";
import { MouseEvent, useState } from "react";
import { useModals } from "../../auth/modal/ModalsProvider";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const modals = useModals()
  const router = useRouter()

  const doSearch = (ev: MouseEvent<HTMLFormElement>) => {
    ev.preventDefault();
    router.push(`/search?text=${searchText}`)
    modals.setShowSearch(false);
  };

  return (
    <div id="searchDropdown" className="mx-4 h-auto w-auto border border-transparent rounded relative min-w-[72px]">
      <div
        onClick={(e) => {
          e.preventDefault();
          modals.setShowSearch(true);
        }}
        className={`flex items-center bg-reddit_dark-brightest border border-reddit_border h-[40px] hover:border-reddit_text rounded-[20px] ${modals.showSearch && 'rounded-b-none'}`}
      >
        <form action="/search/" autoComplete="off" method="get" role={'search'} onSubmit={doSearch} className="w-full flex">
          <label className="flex" htmlFor="header-search-bar">
            <div className="flex items-center pr-[9px] pl-[15px]">
              <BsSearch className="h-5 w-5 align-middle text-[20px] leading-5 text-[#818384]" />
            </div>
          </label>
          <input
            type="search"
            id="header-search-bar"
            name="b"
            className="w-full appearance-none text-[14px] leading-[14px] bg-reddit_dark-brightest mr-4 text-reddit_text placeholder:text-reddit_text-darker outline-none"
            placeholder="Search Bbaby"
            value={searchText}
            onChange={(ev) => setSearchText(ev.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
