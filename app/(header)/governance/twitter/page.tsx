import { redirect } from "next/navigation";
import { use } from "react";
import ssrgov from "../../../../components/API/ssrgov";
import TwitterFeed from "../../../../components/governance/twitter/TwitterFeed";

const TwitterPage = () => {
  const tweets = use(ssrgov.getTweetHome(0, 15, "recently"));

  if (!tweets) {
    redirect("/settings");
  }

  return <TwitterFeed tweets={tweets} language="en" />;
};

export default TwitterPage;
