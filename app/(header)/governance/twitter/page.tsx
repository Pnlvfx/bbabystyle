import { use } from "react";
import ssrgov from "../../../../components/API/ssrgov";
import TwitterFeed from "../../../../components/governance/twitter/TwitterFeed";

const TwitterPage = () => {
  const tweets = use(ssrgov.getTweetHome(0, 15));

  if (!tweets) {
    return <div></div>;
  }

  return (
   <TwitterFeed tweets={tweets} />
  );
};

export default TwitterPage;
