'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import EditNews from './EditNews'
import NewsButtons from './NewsButtons'
interface NewsCardProps {
  news: NewsProps
  isListing: boolean
}

const NewsCard = ({ news: ssr_news, isListing }: NewsCardProps) => {
  const router = useRouter()
  const [news, setNews] = useState(ssr_news)
  const openNews = () => {
    router.push(news.permalink)
  }
  const [editMode, setEditMode] = useState(false)
  return (
    <div className="mb-3 flex justify-center rounded-md border border-bbaby-border bg-bbaby-brighter">
      {editMode ? (
        <EditNews news={news} setNews={setNews} setEditMode={setEditMode} />
      ) : (
        <div
          className={`${isListing && 'cursor-pointer'} p-2`}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            isListing ? openNews() : null
          }}
        >
          <p className="mb-2 text-center font-bold">{news.title}</p>
          {news.mediaInfo.isImage && news.mediaInfo.image && news.mediaInfo.width && news.mediaInfo.height && (
            <picture className="max-h-[510px] overflow-hidden">
              <img src={news.mediaInfo.image} width={news.mediaInfo.width} height={news.mediaInfo.height} alt={news.mediaInfo.alt} />
            </picture>
          )}
          <p className="mt-2 truncate whitespace-pre-wrap text-base">{isListing ? news.description.substring(0, 250) + '...' : news.description}</p>
          <NewsButtons news={news} isListing={isListing} setEditMode={setEditMode} openNews={openNews} />
        </div>
      )}
    </div>
  )
}

export default NewsCard
