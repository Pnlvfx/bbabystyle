"use client";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import twitterapis from "../../API/twitterapis";
import Tweet from "./Tweet";

interface TwitterFeedProps {
  tweets: TweetProps[];
  language: "it" | "en";
}

const TwitterFeed = ({ tweets: ssr_tweets, language }: TwitterFeedProps) => {
  const [tweets, setTweets] = useState(ssr_tweets);

  const getMoreTweets = async () => {
    try {
      const newTweets = await twitterapis.getHome(tweets.length, 10);
      setTweets([...tweets, ...newTweets]);
    } catch (err) {}
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={tweets.length}
        next={getMoreTweets}
        hasMore={tweets.length >= 100 ? false : true}
        loader={<div>Loading</div>}
        endMessage={<></>}
      >
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <div>
              <div className="mb-3 w-full cursor-pointer rounded-md border border-reddit_border bg-[#141415] hover:border-reddit_text">
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
                />
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default TwitterFeed;
