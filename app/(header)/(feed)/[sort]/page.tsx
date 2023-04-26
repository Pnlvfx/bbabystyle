import { use } from 'react'
import ssrapis from '../../../../components/API/ssrapis'
import Feed from '../../../../components/post/Feed'
import { clientUrl } from '../../../../config/config'
import { getMetadata } from '../../../../components/metadata/metadata'
import { deviceIsMobile } from '../../../../components/API/config/serverConfig'

interface SortedPosts {
  params: {
    sort: 'hot' | 'best' | 'top' | 'new'
  }
}

const BestPage = ({ params }: SortedPosts) => {
  if (params.sort !== 'hot') {
    if (params.sort !== 'best') {
      if (params.sort !== 'new') {
        if (params.sort !== 'top') {
          return <div></div>
        }
      }
    }
  }
  const isMobile = deviceIsMobile()
  const session = use(ssrapis.getSession())
  const posts = use(
    ssrapis.getPosts(0, {
      limit: 15,
      sort: params.sort,
    })
  )
  return <Feed posts={posts} isMobile={isMobile} session={session} />
}

export default BestPage

const title = 'Bbabystyle - Free speech'
const description =
  "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!"
const images = [
  {
    url: `${clientUrl}/imagePreview.png`,
    width: 256,
    height: 256,
  },
]
export const metadata = getMetadata(title, description, clientUrl, 'website', 'summary', images)
