import { use } from 'react'
import ssrapis from '../../../../components/API/ssrapis'
import NewsFeed from '../../../../components/news/NewsFeed'
import { getMetadata } from '../../../../components/metadata/metadata'
import { clientUrl } from '../../../../config/config'
import { deviceIsMobile } from '../../../../components/API/config/serverConfig'

const NewsPage = () => {
  const isMobile = deviceIsMobile()
  const session = use(ssrapis.getSession())
  const news = use(ssrapis.getArticles(0, 10))

  if (!news) {
    return <div></div>
  }

  return <NewsFeed session={session} news={news} isMobile={isMobile} />
}

export default NewsPage

export const metadata = getMetadata('Bbabystyle - News in italiano', 'Bbabystyle - News in italiano', `${clientUrl}/news`, 'website', 'summary')
