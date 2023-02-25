import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrgov from '../../../../../components/API/ssrgov'
import TwitterFeed from '../../../../../components/governance/twitter/TwitterFeed'

const TwitterPageEnglish = () => {
  const lang = 'en'
  const tweets = use(ssrgov.getMyListTweets(lang))

  if (!tweets) {
    redirect('/settings')
  }

  return <TwitterFeed tweets={tweets} language={lang} />
}

export default TwitterPageEnglish
