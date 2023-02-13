"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import categoryapis from "../API/categoryapis";
import { catchErrorWithMessage } from "../API/config/apiErrors";
import { useMessage } from "../utils/message/TimeMsgContext";

const LeaderboardMenu = () => {
  const [totalShow, setTotalShow] = useState(12);
  const [active, setActive] = useState(-1);
  const [showMore, setShowMore] = useState(false);
  const [categoriesLists, setCategoriesLists] = useState<CategoryProps[]>([]);
  const message = useMessage();

  useEffect(() => {
    const r = async () => {
      try {
        const categories = await categoryapis.getCategories();
        setCategoriesLists(categories);
      } catch (err) {
        catchErrorWithMessage(err, message);
      }
    };
    r();
  }, []);

  return (
    <div className="mr-6 hidden md:block">
      <div className="flex h-full flex-col">
        <div className="w-[192px] overflow-visible break-words rounded-md border border-reddit_border bg-reddit_dark-brighter">
          <div className="flex h-[40px] items-center border-b border-reddit_border bg-reddit_dark-brightest pl-4 text-[16px] font-extrabold leading-5">
            <h2>Categories</h2>
          </div>
          <div>
            <ul
              className={`${
                totalShow === 12
                  ? "h-[432px] overflow-hidden"
                  : "h-[1188px] overflow-auto"
              }`}
            >
              <li key={-1}>
                <Link
                  href={`/bbaby/leaderboard`}
                  scroll={false}
                  className="text-[12px] capitalize"
                  onClick={() => {
                    setActive(-1);
                  }}
                >
                  <div
                    className={`flex h-[40px] ${
                      active === -1
                        ? "bg-reddit_dark-brightest font-extrabold"
                        : "hover:bg-reddit_dark-brightest"
                    }`}
                  >
                    <div
                      className={`w-[6px] ${active === -1 && "bg-reddit_blue"}`}
                    />
                    <p className="ml-3 self-center">All Communities</p>
                  </div>
                </Link>
              </li>
              {categoriesLists.length > 0 &&
                categoriesLists.map((category, index) => {
                  if (index > totalShow) return;
                  return (
                    <li key={index}>
                      <Link
                        href={`/bbaby/leaderboard/${category.name
                          .replaceAll(" ", "_")
                          .toLowerCase()}`}
                        scroll={false}
                        className="text-[12px] capitalize"
                        onClick={() => {
                          setActive(index);
                        }}
                      >
                        <div
                          className={`flex h-[40px] ${
                            active === index
                              ? "bg-reddit_dark-brightest font-extrabold"
                              : "hover:bg-reddit_dark-brightest"
                          }`}
                        >
                          <div
                            className={`w-[6px] ${
                              active === index && "bg-reddit_blue"
                            }`}
                          />
                          <p className="ml-3 self-center">{category.name}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="w-full items-center text-center">
            <button
              onClick={() => {
                setTotalShow(totalShow === 12 ? categoriesLists.length : 12);
                setShowMore(!showMore);
              }}
              className="w-full rounded-full px-3 text-sm hover:bg-reddit_dark-brightest"
            >
              <p className="py-1 font-bold">
                {showMore ? "Show Less" : "Show More"}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardMenu;
