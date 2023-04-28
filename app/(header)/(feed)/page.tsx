import { use } from 'react'
import ssrapis from '../../../components/API/ssrapis'
import { getMetadata } from '../../../components/metadata/metadata'
import Feed from '../../../components/post/Feed'
import { clientUrl } from '../../../config/config'
import { deviceIsMobile } from '../../../components/API/config/serverConfig'

const Home = () => {
  const isMobile = deviceIsMobile()
  const session = use(ssrapis.getSession())
  const posts = use(
    ssrapis.getPosts(0, {
      limit: 15,
    })
  )
  return <Feed posts={posts} isMobile={isMobile} session={session} />
}

export default Home

export const metadata = getMetadata(
  'Bbabystyle - Free speech',
  "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!",
  clientUrl,
  'website',
  'summary',
  [
    {
      url: `${clientUrl}/imagePreview.png`,
      width: 256,
      height: 256,
    },
  ]
)
