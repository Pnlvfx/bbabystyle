import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrgov from '../../../../components/API/ssrgov'
import TwitterFeed from '../../../../components/governance/twitter/TwitterFeed'
import ServerMsg from '../../../../components/utils/message/ServerMsg'
import { deviceIsMobile } from '../../../../components/API/config/serverConfig'
import ssrapis from '../../../../components/API/ssrapis'

const TwitterPage = () => {
  const isMobile = deviceIsMobile()
  const session = use(ssrapis.getSession())
  const tweets = use(ssrgov.getTweetHome())

  if (tweets === 'Unauthorized') {
    redirect('/settings')
  } else if (tweets instanceof Error) {
    return <ServerMsg error={tweets.message} />
  }

  return <TwitterFeed session={session} tweets={tweets} language="en" isMobile={isMobile} />
}

export default TwitterPage
