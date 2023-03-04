import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrgov from '../../../../../../components/API/ssrgov'
import TwitterFeed from '../../../../../../components/governance/twitter/TwitterFeed'

interface TwitterUserPageProps {
  params: {
    id: string
  }
}

const TwitterUserPage = ({ params }: TwitterUserPageProps) => {
  const tweets = use(ssrgov.getUserTweets(params.id))

  if (!tweets) {
    redirect('/settings')
  }

  return <TwitterFeed tweets={tweets} language="en" />
}

export default TwitterUserPage
