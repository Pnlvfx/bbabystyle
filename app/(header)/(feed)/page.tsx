import { use } from "react";
import ssrapis from "../../../components/API/ssrapis";
import Feed from "../../../components/post/Feed";
import { clientUrl } from "../../../config/config";

const Home = () => {
  const posts = use(ssrapis.getPosts(15, 0));

  return <Feed posts={posts} />;
};

export default Home;

export const metadata = {
  alternates: {
    canonical: clientUrl,
    languages: {
      'en-US':  clientUrl,
    }
  },
  openGraph: {
    title: 'Bbabystyle - Free speech',
    description: "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!",
    url: clientUrl,
    siteName: 'bbabystyle',
    images: [
      {
        url: `${clientUrl}/imagePreview.png`,
        width: 256,
        height: 256,
      }
    ],
    type: 'website',
  },
  twitter: {
    creator: '@Bbabystyle',
    card: 'summary',
    title: 'Bbabystyle - Free speech',
    description: "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!",
    images: `${clientUrl}/imagePreview.png`,
  },
}
