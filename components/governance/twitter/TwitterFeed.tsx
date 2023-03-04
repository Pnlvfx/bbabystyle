'use client'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { MediaObjectV2, TweetV2, UserV2 } from 'twitter-api-v2'
import Tweet from './Tweet'

interface TwitterFeedProps {
  tweets: {
    data: TweetV2[]
    users: UserV2[]
    media: MediaObjectV2[]
  }
  language: 'it' | 'en'
}

const TwitterFeed = ({ tweets: ssr_tweets, language }: TwitterFeedProps) => {
  const [tweets, setTweets] = useState(ssr_tweets.data)
  const sort = useSearchParams().get('sort')

  const getMoreTweets = async () => {
    try {
      // const response = allTweets.current.data.slice(tweets.length, tweets.length + 10)
      // setTweets((t) => [...t, ...response])
    } catch (err) {}
  }

  // useEffect(() => {
  //   if (!sort) return
  //   if (sort === 'best') {
  //     allTweets.current = allTweets.current.tweets.sort((a, b) => {
  //       if (!a.public_metrics || !b.public_metrics) return 0
  //       return b.public_metrics?.like_count - a.public_metrics?.like_count
  //     })
  //   } else if (sort === 'recently') {
  //     allTweets.current.tweets = allTweets.current.tweets.sort((a, b) => {
  //       if (!a.created_at || !b.created_at) return 0
  //       return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  //     })
  //   }
  //   setTweets((t) => allTweets.current.slice(0, t.length))
  // }, [sort])

  return (
    <>
      <InfiniteScroll
        dataLength={tweets.length}
        next={getMoreTweets}
        hasMore={tweets.length >= 100 ? false : true}
        loader={<div></div>}
        endMessage={<></>}
      >
        {tweets.map((tweet) => {
          const user = ssr_tweets.users.find((user) => user.id === tweet.author_id)
          const media = ssr_tweets.media.find((m) => {
            if (!tweet.attachments?.media_keys) return
            return m.media_key === tweet.attachments?.media_keys[0]
          })
          if (!user) return
          return (
            <div key={tweet.id}>
              <div>
                <div className="rounded-md border mb-3 w-full border-reddit_border bg-[#141415] hover:border-reddit_text">
                  <Tweet tweet={tweet} user={user} media={media} language={language} />
                </div>
              </div>
            </div>
          )
        })}
      </InfiniteScroll>
    </>
  )
}

export default TwitterFeed
