import style2 from './search-page-empty.module.css'
import styles from './search-page.module.css'
import { RiArrowDownSLine } from 'react-icons/ri'
import Post from '../post/Post'
import SearchPageHeader from './SearchPageHeader'

const array = [
  {
    name: 'Posts',
    key: 'posts',
  },
  {
    name: 'Comments',
    key: 'comments',
  },
  {
    name: 'Communities',
    key: 'communities',
  },
  {
    name: 'People',
    key: 'people',
  },
]

interface SearchPageProps {
  q: string
  type?: string
  posts: PostProps[]
  isMobile: boolean
  session: SessionProps | null
}

const Search = ({ posts, type = 'posts', q, isMobile, session }: SearchPageProps) => {
  return (
    <>
      <div>
        <div className={styles.searchPage2}>
          <div className={styles.searchPage3} role="tablist">
            {array.map((item, index) => (
              <SearchPageHeader key={index} index={index} item={item} />
            ))}
          </div>
        </div>
        <div className={styles.subNav}>
          <div>
            <button className={styles.subNavSort}>
              Sort
              <i className="icon ml-1">
                <RiArrowDownSLine className="h-5 w-5" />
              </i>
            </button>
          </div>
        </div>
      </div>
      {type === 'posts' && (
        <div className={styles.searchPageAll}>
          <div className={styles.searchPagePosts}>
            <div tabIndex={0} />
            <div className="mb-4">
              {posts?.length > 0 ? (
                posts.map((post) => (
                  <div key={post._id} className="h-auto w-full">
                    <Post
                      session={session}
                      isListing={false}
                      isMobile={isMobile}
                      post={{
                        author: post.author,
                        community: post.community,
                        communityIcon: post.communityIcon,
                        createdAt: post.createdAt,
                        id: post._id,
                        liked: post.liked,
                        numComments: post.numComments,
                        permalink: post.permalink,
                        title: post.title,
                        ups: post.ups,
                        body: post.body,
                        mediaInfo: post.mediaInfo,
                      }}
                    />
                  </div>
                ))
              ) : (
                <div className={style2.emptyContainer}>
                  {/* <img src="" 

                          /> */}
                  <h2 className={style2.emptyh2}>
                    .. we couldn&apos;t find any results for &quot;
                    {q}&quot;
                  </h2>
                  <p className={style2.emptyp}>Double-check your spelling or try different keywords to adjust your search</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Search
