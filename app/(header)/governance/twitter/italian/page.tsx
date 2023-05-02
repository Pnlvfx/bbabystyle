import { use } from 'react'
import ssrgov from '../../../../../components/API/ssrgov'
import TwitterFeed from '../../../../../components/governance/twitter/TwitterFeed'
import ServerMsg from '../../../../../components/utils/message/ServerMsg'
import { deviceIsMobile } from '../../../../../components/API/config/serverConfig'
import ssrapis from '../../../../../components/API/ssrapis'
import { redirect } from 'next/navigation'

const TwitterPageItalian = () => {
  const isMobile = deviceIsMobile()
  const lang = 'it'
  const session = use(ssrapis.getSession())
  const tweets = use(ssrgov.getMyListTweets(lang))

  if (tweets === 'Unauthorized') {
    redirect('/settings')
  } else if (tweets instanceof Error) {
    return <ServerMsg error={tweets.message} />
  }

  return <TwitterFeed session={session} tweets={tweets} language={lang} isMobile={isMobile} />
}

export default TwitterPageItalian
