"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Tweet from "./Tweet";

interface TwitterFeedProps {
  tweets: TweetProps[];
  language: "it" | "en";
}

const TwitterFeed = ({ tweets: ssr_tweets, language }: TwitterFeedProps) => {
  const allTweets = useRef(ssr_tweets);
  const [tweets, setTweets] = useState(allTweets.current.slice(0, 15));
  const sort = useSearchParams().get("sort");

  const getMoreTweets = async () => {
    try {
      const response = allTweets.current.slice(tweets.length, tweets.length + 10);
      setTweets((t) => [...t, ...response]);
    } catch (err) {}
  };

  useEffect(() => {
    if (!sort) return;
    if (sort === "best") {
      allTweets.current = allTweets.current.sort((a, b) => b.favorite_count - a.favorite_count);
    } else if (sort === "recently") {
      allTweets.current = allTweets.current.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }
    setTweets((t) => allTweets.current.slice(0, t.length));
  }, [sort]);

  return (
    <>
      <InfiniteScroll
        dataLength={tweets.length}
        next={getMoreTweets}
        hasMore={tweets.length >= 100 ? false : true}
        loader={<div></div>}
        endMessage={<></>}
      >
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <div>
              <div className="rounded-md border mb-3 w-full border-reddit_border bg-[#141415] hover:border-reddit_text">
                <Tweet
                  username={tweet?.user.name}
                  screen_name={tweet.user.screen_name}
                  created_at={tweet.created_at}
                  title={tweet.full_text}
                  type={tweet?.extended_entities?.media[0]?.type}
                  videoInfo={tweet?.extended_entities?.media[0]?.video_info}
                  image={tweet?.extended_entities?.media[0]?.media_url_https}
                  width={tweet?.extended_entities?.media[0]?.sizes.large.w}
                  height={tweet?.extended_entities?.media[0]?.sizes.large.h}
                  user_avatar={tweet.user.profile_image_url_https}
                  language={language}
                  retweet_count={tweet.retweet_count}
                  like_count={tweet.favorite_count}
                  id={tweet.id_str}
                />
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default TwitterFeed;
