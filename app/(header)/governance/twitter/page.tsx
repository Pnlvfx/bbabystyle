import { use } from "react";
import ssrgov from "../../../../components/API/ssrgov";
import Tweet from "../../../../components/governance/twitter/Tweet";

const TwitterPage = () => {
  const tweets = use(ssrgov.getTweetHome());

  if (!tweets) {
    return <div></div>;
  }

  return (
    <>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <div>
            <div className="mb-3 w-full cursor-pointer rounded-md border border-reddit_border bg-[#141415] hover:border-reddit_text">
              <Tweet
                username={tweet?.user.name}
                screen_name={tweet.user.screen_name}
                created_at={tweet.created_at}
                title={tweet.full_text}
                type={tweet?.extended_entities?.media[0]?.type}
                videoInfo={tweet?.extended_entities?.media[0]?.video_info}
                image={tweet?.extended_entities?.media[0]?.media_url_https}
                width={tweet?.extended_entities?.media[0]?.sizes.large.w}
                height={tweet?.extended_entities?.media[0]?.sizes.large.h}
                user_avatar={tweet.user.profile_image_url_https}
                language={"en"}
                retweet_count={tweet.retweet_count}
                like_count={tweet.favorite_count}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TwitterPage;
