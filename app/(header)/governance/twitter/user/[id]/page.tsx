import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrgov from '../../../../../../components/API/ssrgov'
import TwitterFeed from '../../../../../../components/governance/twitter/TwitterFeed'
import ServerMsg from '../../../../../../components/utils/message/ServerMsg'

interface TwitterUserPageProps {
  params: {
    id: string
  }
}

const TwitterUserPage = ({ params }: TwitterUserPageProps) => {
  const tweets = use(ssrgov.getUserTweets(params.id))

  if (tweets === 'Unauthorized') {
    redirect('/settings')
  } else if (tweets instanceof Error) {
    return <ServerMsg error={tweets.message} />
  }

  return <TwitterFeed tweets={tweets} language="en" />
}

export default TwitterUserPage
