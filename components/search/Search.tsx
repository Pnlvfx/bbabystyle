import style from "./search-page.module.css";
import style2 from "./search-page-empty.module.css";
import { RiArrowDownSLine } from "react-icons/ri";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SearchPageHeader from "./SearchPageHeader";

interface SearchPageProps {
  posts: PostProps[];
}

const Search = ({ posts }: SearchPageProps) => {
  const router = useRouter();
  const [active, setActive] = useState("posts");
  const array = [
    {
      name: "Posts",
      key: "posts",
    },
    {
      name: "Comments",
      key: "comments",
    },
    {
      name: "Communities",
      key: "communities",
    },
    {
      name: "People",
      key: "people",
    },
  ];

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.type) {
      setActive(router.query.type.toString());
    }
  }, [router]);

  return (
    <div className={style.mainSearch}>
      <div className={style.searchPage}>
        <div>
          <div className={style.searchPage2}>
            <div className={style.searchPage3} role="tablist">
              {array.map((item, index) => (
                <SearchPageHeader
                  key={index}
                  index={index}
                  item={item}
                  active={active}
                />
              ))}
            </div>
          </div>
          <div className={style.subNav}>
            <div>
              <button className={style.subNavSort}>
                Sort
                <i className="icon ml-1">
                  <RiArrowDownSLine className="w-5 h-5" />
                </i>
              </button>
            </div>
          </div>
        </div>
        {active === "posts" && (
          <div className={style.searchPageAll}>
            <div className={style.searchPagePosts}>
              <div tabIndex={0} />
              <div className="mb-4">
                {posts?.length > 0 ? (
                  posts.map((post) => (
                    <div key={post._id} className="h-auto w-full">
                      <Post post={post} isListing={false} />
                    </div>
                  ))
                ) : (
                  <div className={style2.emptyContainer}>
                    {/* <img src="" 

                          /> */}
                    <h2 className={style2.emptyh2}>
                      .. we couldn&apos;t find any results for &quot;
                      {router.query.text}&quot;
                    </h2>
                    <p className={style2.emptyp}>
                      Double-check your spelling or try different keywords to
                      adjust your search
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
