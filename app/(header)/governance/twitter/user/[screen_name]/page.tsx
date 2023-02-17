import { redirect } from "next/navigation"
import { use } from "react"
import ssrgov from "../../../../../../components/API/ssrgov"
import TwitterFeed from "../../../../../../components/governance/twitter/TwitterFeed"

interface TwitterUserPageProps {
  params: {
    screen_name: string
  }
}

const TwitterUserPage = ({params}: TwitterUserPageProps) => {
  const tweets = use(ssrgov.getUserTweets(params.screen_name));

  if (tweets instanceof Error) {
    console.log(tweets.message)
    return null;
  } else if (tweets === 'Unauthenticated') {
    redirect('/settings');
  } else if (typeof tweets === 'string') {
    console.log(tweets);
    return null;
  }


  return <TwitterFeed tweets={tweets} language="en" />;
}

export default TwitterUserPage