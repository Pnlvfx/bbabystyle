import { redirect } from "next/navigation";
import { use } from "react"
import ssrgov from "../../../../../components/API/ssrgov";
import TwitterFeed from "../../../../../components/governance/twitter/TwitterFeed";

const TwitterPageEnglish = () => {
  const anonList = {
    listId: '1535968733537177604',
    owner_screen_name: 'anonynewsitaly',
  }
  const tweets = use(ssrgov.getMyListTweets(anonList.listId, anonList.owner_screen_name, 0, 15));

  if (!tweets) {
    redirect('/settings');
  }

  return <TwitterFeed tweets={tweets} language="it" list={anonList} />;
}

export default TwitterPageEnglish