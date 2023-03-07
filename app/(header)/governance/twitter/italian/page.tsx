import { use } from 'react'
import ssrgov from '../../../../../components/API/ssrgov'
import TwitterFeed from '../../../../../components/governance/twitter/TwitterFeed'
import ServerMsg from '../../../../../components/utils/message/ServerMsg'

const TwitterPageItalian = () => {
  const lang = 'it'
  const tweets = use(ssrgov.getMyListTweets(lang))

  if (tweets instanceof Error) {
    return <ServerMsg error={tweets.message} />
  }

  return <TwitterFeed tweets={tweets} language={lang} />
}

export default TwitterPageItalian
