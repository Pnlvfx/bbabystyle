'use client'
import { useSearchParams } from 'next/navigation'
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
  isMobile: boolean
  session: SessionProps | null
}

const TwitterFeed = ({ tweets: data, language, isMobile, session }: TwitterFeedProps) => {
  const sort = useSearchParams().get('sort')
  const tweets =
    sort === 'best'
      ? data.data.sort((a, b) => {
          if (!a.public_metrics || !b.public_metrics) return 0
          return b.public_metrics.like_count - a.public_metrics.like_count
        })
      : data.data

  const getMoreTweets = async () => {}

  return (
    <InfiniteScroll
      dataLength={tweets.length}
      next={getMoreTweets}
      hasMore={tweets.length >= 100 ? false : true}
      loader={<div></div>}
      endMessage={<></>}
    >
      {tweets.map((tweet) => {
        const user = data.users.find((user) => user.id === tweet.author_id)
        const media = data.media.find((m) => {
          if (!tweet.attachments?.media_keys) return
          return m.media_key === tweet.attachments?.media_keys[0]
        })
        if (!user) return
        return <Tweet key={tweet.id} session={session} tweet={tweet} user={user} media={media} language={language} isMobile={isMobile} isListing />
      })}
    </InfiniteScroll>
  )
}

export default TwitterFeed
