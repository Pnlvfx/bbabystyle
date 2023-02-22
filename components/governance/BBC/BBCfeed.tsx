"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import govapis from "../../API/govapis";
import LinkPreview, { LinkPreviewLoader } from "./LinkPreview";

interface BBCfeedProps {
  news: ExternalNews[];
}

const BBCfeed = ({ news }: BBCfeedProps) => {
  const [BBCnews, setBBCnews] = useState(news);
  const [hasMore, setHasMore] = useState(news.length < 16 ? false : true);

  const getMore = async () => {
    try {
      const news = await govapis.news.getArticles(10, BBCnews.length);
      if (news.length < 10) {
        setHasMore(false);
      }
      setBBCnews((oldNews) => [...oldNews, ...news]);
    } catch (err) {}
  };

  return (
    <InfiniteScroll
      className="xl:space-x-auto mt-5 w-full xl:grid xl:grid-cols-3"
      dataLength={BBCnews.length}
      next={getMore}
      hasMore={hasMore}
      loader={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, idx) => (
        <LinkPreviewLoader key={idx} />
      ))}
      endMessage={<div />}
    >
      {BBCnews.map((news, key) => (
        <LinkPreview key={key} title={news.title} url={news.permalink} description={news.description} image={news.image} date={news.date} />
      ))}
    </InfiniteScroll>
  );
};

export default BBCfeed;
