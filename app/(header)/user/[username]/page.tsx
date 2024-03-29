import { Metadata } from 'next'
import { use } from 'react'
import ssrapis from '../../../../components/API/ssrapis'
import { getMetadata } from '../../../../components/metadata/metadata'
import Feed from '../../../../components/post/Feed'
import { clientUrl } from '../../../../config/config'
import { deviceIsMobile } from '../../../../components/API/config/serverConfig'

interface UserPageProps {
  params: {
    username: string
  }
}

const UserPage = ({ params }: UserPageProps) => {
  const isMobile = deviceIsMobile()
  const session = use(ssrapis.getSession())
  const posts = use(
    ssrapis.getPosts(0, {
      author: params.username,
      limit: 15,
    })
  )
  return <Feed session={session} author={params.username} posts={posts} isMobile={isMobile} />
}

export default UserPage

export const generateMetadata = async ({ params }: UserPageProps): Promise<Metadata> => {
  const user = await ssrapis.getUserFromUsername(params.username)
  if (!user) return {}
  const url = `${clientUrl}/user/${params.username}`
  const title = `${params.username} (u/${params.username}) - Bbabystyle`
  const description = `${params.username}:`
  const card = 'summary'
  const images = [{ url: user.avatar, width: 256, height: 256 }]
  const type = 'profile'
  return getMetadata(title, description, url, type, card, images)
}
