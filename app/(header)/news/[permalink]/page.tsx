import { Metadata } from 'next'
import { use } from 'react'
import ssrapis from '../../../../components/API/ssrapis'
import { getMetadata } from '../../../../components/metadata/metadata'
import NewsCard from '../../../../components/news/NewsCard'
import PostNotFound from '../../../../components/post/post-not-found/PostNotFound'
import Donations from '../../../../components/widget/Donations'
import PolicyWidget from '../../../../components/widget/PolicyWidget'
import TopCommunities from '../../../../components/widget/topcommunities/TopCommunities'
import Widget from '../../../../components/widget/Widget'
import { clientUrl } from '../../../../config/config'
import { deviceIsMobile } from '../../../../components/API/config/serverConfig'

interface NewsArticleProps {
  params: {
    permalink: string
  }
}

const NewsArticlePage = ({ params }: NewsArticleProps) => {
  const isMobile = deviceIsMobile()
  const session = use(ssrapis.getSession())
  const news = use(ssrapis.getArticle(params.permalink))

  if (!news) {
    return <PostNotFound />
  }

  return (
    <div className="mx-auto box-border flex max-w-full justify-center md:px-6 md:py-5">
      <div className="w-full lg:w-[640px]">
        <NewsCard session={session} isMobile={isMobile} news={news} isListing={false} />
      </div>
      {!isMobile && (
        <div className="ml-6 hidden lg:block">
          <Widget>
            <TopCommunities />
          </Widget>
          <Donations />
          <PolicyWidget />
        </div>
      )}
    </div>
  )
}

export default NewsArticlePage

export const generateMetadata = async ({ params }: NewsArticleProps): Promise<Metadata> => {
  const news = await ssrapis.getArticle(params.permalink)
  if (!news) return {}
  const url = `${clientUrl}${news.permalink}`
  const title = news.title
  const description = news.description.substring(0, 160)
  const card = 'summary_large_image'
  const images = news.mediaInfo.image ? [{ url: news.mediaInfo.image, width: news.mediaInfo.width, height: news.mediaInfo.height }] : undefined
  const type = 'article'
  return getMetadata(title, description, url, type, card, images)
}
