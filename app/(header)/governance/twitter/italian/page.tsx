import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrgov from '../../../../../components/API/ssrgov'
import TwitterFeed from '../../../../../components/governance/twitter/TwitterFeed'

const TwitterPageItalian = () => {
  const lang = 'it'
  const tweets = use(ssrgov.getMyListTweets(lang))

  if (!tweets) {
    redirect('/settings')
  }

  return <TwitterFeed tweets={tweets} language={lang} />
}

export default TwitterPageItalian
