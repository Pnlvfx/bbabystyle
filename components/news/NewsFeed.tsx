'use client'

import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import newsapis from '../API/newsapis'
import Skeleton from '../utils/Skeleton'
import NewsCard from './NewsCard'

interface NewsFeedProps {
  news: NewsProps[]
  isMobile: boolean
  session: SessionProps | null
}

const NewsFeed = ({ news: ssr_news, isMobile, session }: NewsFeedProps) => {
  const [news, setNews] = useState(ssr_news)
  const [hasMore, setHasMore] = useState(false)

  const getMoreNews = async () => {
    try {
      const newNews = await newsapis.getArticles(news.length, 10)
      if (newNews.length < 10) {
        setHasMore(false)
      }
      setNews([...news, ...newNews])
    } catch (err) {}
  }

  return (
    <InfiniteScroll
      dataLength={news?.length || 1}
      next={getMoreNews}
      hasMore={hasMore}
      loader={[1, 2, 3, 4, 5].map((_, idx) => (
        <Skeleton isImage={true} key={idx} />
      ))}
      endMessage={<></>}
    >
      {news?.length >= 1 ? (
        news?.map((news) => <NewsCard key={news._id} news={news} isListing={true} isMobile={isMobile} session={session} />)
      ) : (
        <div></div>
      )}
    </InfiniteScroll>
  )
}

export default NewsFeed
