import { redirect } from "next/navigation";
import { use } from "react"
import ssrgov from "../../../../../components/API/ssrgov";
import TwitterFeed from "../../../../../components/governance/twitter/TwitterFeed";

const TwitterPageItalian = () => {
  const bbabyList = {
    listId: '1539278403689492482',
    owner_screen_name: 'Bbabystyle',
  }
  const tweets = use(ssrgov.getMyListTweets(bbabyList.listId, bbabyList.owner_screen_name));

  if (!tweets) {
    redirect('/settings');
  }

  return <TwitterFeed tweets={tweets} language="it" />;
}

export default TwitterPageItalian