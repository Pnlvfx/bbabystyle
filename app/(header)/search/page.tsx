import { Metadata } from 'next'
import { use } from 'react'
import ssrapis from '../../../components/API/ssrapis'
import Search from '../../../components/search/Search'
import styles from '../../../components/search/search-page.module.css'
import { deviceIsMobile } from '../../../components/API/config/serverConfig'

interface SearchPageProps {
  params: {}
  searchParams: {
    text?: string
    type?: string
  }
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const isMobile = deviceIsMobile()
  const session = use(ssrapis.getSession())
  if (!searchParams.text) {
    return <div></div>
  }

  const posts = use(ssrapis.search(searchParams.text))

  if (!posts) {
    return <div></div>
  }

  return (
    <div className={styles.mainSearch}>
      <div className={styles.searchPage}>
        <Search session={session} posts={posts} q={searchParams.text} type={searchParams.type} isMobile={isMobile} />
      </div>
    </div>
  )
}

export default SearchPage

export const generateMetadata = async ({ searchParams }: SearchPageProps): Promise<Metadata> => {
  const title = `bbabystyle.com: search results - ${searchParams.text || ''}`
  return {
    title,
    robots: {
      index: false,
    },
  }
}
