"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import twitterapis from "../../API/twitterapis";
import Tweet from "./Tweet";

interface TwitterFeedProps {
  tweets: TweetProps[];
  language: "it" | "en";
  list?: {
    listId: string
    owner_screen_name: string
  }
}

const TwitterFeed = ({ tweets: ssr_tweets, language, list }: TwitterFeedProps) => {
  const [tweets, setTweets] = useState(ssr_tweets);
  const query = useSearchParams();

  const getMoreTweets = async () => {
    try {
      if (!list) {
        const newTweets = await twitterapis.getHome(tweets.length, 10);
        setTweets([...tweets, ...newTweets]);
      } else {
        const newTweets = await twitterapis.getMyListTweets(list.listId, list.owner_screen_name, tweets.length, 10);
        setTweets([...tweets, ...newTweets]);
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (!query.get('sort')) return;
    if (query.get('sort') === 'best') {
      setTweets(t => t.sort((a, b) => b.favorite_count - a.favorite_count))
    } else {
      setTweets(t => t.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()))
    }
  }, [query]);

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
