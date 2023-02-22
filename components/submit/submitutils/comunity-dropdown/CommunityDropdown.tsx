import style from "./community-dropdown.module.css";
import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useSession } from "../../../auth/UserContextProvider";
import { useSubmitProvider } from "../../SubmitProvider";
import CommunityList from "./CommunityList";
import { ClickOutHandler } from "react-clickout-ts";
import communityapis from "../../../API/communityapis";
import { useModals } from "../../../auth/modal/ModalsProvider";

const CommunityDropdown = () => {
  const { session } = useSession();
  const [show, setShow] = useState(false);
  const [activeClass, setActiveClass] = useState(false);
  const [allCommunity, setAllCommunity] = useState<CommunityProps[] | []>([]);
  const { selectedCommunity, initialCommunity } = useSubmitProvider();
  const initialCommunityRef = useRef(initialCommunity);
  const [searchValue, setSearchValue] = useState(selectedCommunity?.name || "");
  const modals = useModals();

  const chooseCommunity = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e?.currentTarget.value);
  };

  const openDropdown = () => {
    setActiveClass(true);
    setShow(true);
  };

  const closeDropdown = () => {
    setShow(false);
    setActiveClass(false);
  };

  const openCommunityForm = () => {
    setShow(false);
    modals.setShowCommunity(true);
  };

  useEffect(() => {
    ///FIRST CALL USER PREF COMMUNITY.
    if (initialCommunityRef.current) return;
    const get = async () => {
      try {
        let communities = await communityapis.getUserPrefCommunities();
        if (communities.length === 0) {
          communities = await communityapis.getCommunities(11);
        }
        setAllCommunity(communities);
      } catch (err) {}
    };
    get();
  }, []);

  useEffect(() => {
    ///SEARCH
    if (!searchValue) return;
    const timer = setTimeout(async () => {
      try {
        const res = await communityapis.searchCommunity(searchValue);
        setAllCommunity(res);
      } catch (err) {}
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  useEffect(() => {
    if (!selectedCommunity) return;
    setSearchValue(selectedCommunity.name);
  }, [selectedCommunity]);

  return (
    <div className={style.dropdownContainer}>
      <ClickOutHandler onClickOut={closeDropdown}>
        <div className={`${style.dropdownContainer2} ${activeClass && style.opendropdownContainer2} min-w-[300px]`}>
          <div className={`flex h-full items-center px-2`} onClick={openDropdown}>
            {!selectedCommunity?.image && show ? (
              <BiSearch className="h-[22px] w-[22px] text-reddit_text-darker" />
            ) : !selectedCommunity?.image && !show ? (
              <span className="box-border h-[22px] w-[22px] rounded-[22px] border border-dashed text-[22px] leading-[22px]" />
            ) : selectedCommunity?.image && show ? (
              <BiSearch className="h-[22px] w-[22px] text-reddit_text-darker" />
            ) : (
              selectedCommunity && <Image src={selectedCommunity.image} width={22} height={22} className="rounded-full" alt="Community Icon" />
            )}
            <div className="flex-1 pl-2">
              <input
                spellCheck="false"
                className={`w-full bg-reddit_dark-brighter bg-transparent align-middle text-[16px] font-medium leading-[18px] outline-none placeholder:text-[#d7dadc] md:text-[14px]`}
                placeholder={show ? "Search communities" : "Choose a community"}
                value={searchValue}
                onChange={chooseCommunity}
              />
            </div>
            <HiChevronDown className="h-[22px] w-[22px] cursor-pointer align-middle text-[20px] leading-5 text-reddit_text-darker" />
          </div>
          {show && (
            <div className={"absolute z-30 w-[300px] overflow-hidden bg-reddit_dark-brighter"}>
              <div className={`solid max-h-[400px] overflow-y-scroll border border-reddit_border bg-reddit_dark-brighter`}>
                <div className="p-3 text-sm font-bold">
                  <p className="px-2 py-1 text-[11px] font-bold text-reddit_text-darker">YOUR PROFILE</p>
                  {session?.user && (
                    <button className="my-1 flex w-full items-center space-x-2 hover:bg-reddit_dark-brightest">
                      <div className="overflow-hidden rounded-md border border-reddit_border">
                        <Image src={session.user.avatar} alt="User Icon" width={25} height={25} />
                      </div>
                      <p>u/{session.user.username}</p>
                    </button>
                  )}
                  <hr className="my-2 border-reddit_border" />
                  <div className="flex items-center">
                    <p className="px-2 py-1 text-[11px] font-bold text-reddit_text-darker">YOUR COMMUNITIES</p>
                    <button onClick={openCommunityForm} className="ml-auto rounded-full hover:bg-reddit_dark-brightest">
                      <p className="px-2 py-1 text-[13px] font-bold">Create new</p>
                    </button>
                  </div>
                  {allCommunity.map((community) => (
                    <CommunityList key={community._id} community={community} setActiveClass={setActiveClass} setShow={setShow} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </ClickOutHandler>
    </div>
  );
};

export default CommunityDropdown;
