import { use } from "react";
import ssrapis from "../../../../../../components/API/ssrapis";
import Comment from "../../../../../../components/comment/Comment";
import Post from "../../../../../../components/post/Post";
import Donations from "../../../../../../components/widget/Donations";
import Widget from "../../../../../../components/widget/Widget";
import { clientUrl } from "../../../../../../config/config";

interface PostPageProps {
  params: {
    community: string;
    id: string;
  };
  searchParams: {};
}

const PostPage = ({ params }: any) => {
  const session = use(ssrapis.getSession());
  const post = use(ssrapis.getPost(params.id));

  if (!post) {
    return <div></div>;
  }

  return (
    <>
      {session?.device?.mobile ? (
        <div className="mb-2 bg-reddit_dark-brighter pt-2">
          <Post post={post} isListing={false} />
          <Comment post={post} />
        </div>
      ) : (
        <div className="flex min-h-[calc(100vh_-_48px)] flex-col">
          <div className="flex max-w-[1600px] flex-row justify-center md:py-5 md:px-6 lg:mx-auto">
            <div className="w-full max-w-[750px] flex-none break-words rounded-md bg-reddit_dark-brighter lg:mr-4 lg:w-7/12 xl:w-8/12 2xl:w-[750px]">
              <Post post={post} isListing={false} />
              <Comment post={post} />
            </div>
            <div className="hidden lg:block">
              <Widget community={post.community_detail} />
              <Donations />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostPage;

export const generateMetadata = async ({ params }: any) => {
  const post = await ssrapis.getPost(params.id);

  if (!post) {
    return {
      title: "Bbabystyle - Free speech",
      description: "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!",
      alternates: {
        canonical: clientUrl,
        languages: {
          "en-US": clientUrl,
        },
      },
      openGraph: {
        title: "Bbabystyle - Free speech",
        description:
          "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!",
        url: clientUrl,
        siteName: "bbabystyle",
        images: [
          {
            url: `${clientUrl}/imagePreview.png`,
            width: 256,
            height: 256,
          },
        ],
        type: "website",
      },
      twitter: {
        creator: "@Bbabystyle",
        card: "summary",
        title: "Bbabystyle - Free speech",
        description:
          "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!",
        images: `${clientUrl}/imagePreview.png`,
      },
    };
  }

  return {
    title: post?.title,
    description: post?.body,
    alternates: {
      canonical: `${clientUrl}${post.permalink}`,
      languages: {
        "en-US": `${clientUrl}${post.permalink}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.body,
      url: clientUrl,
      siteName: "bbabystyle",
      images: [
        {
          url: `${clientUrl}/imagePreview.png`,
          width: 256,
          height: 256,
        },
      ],
      type: "website",
    },
    twitter: {
      creator: "@Bbabystyle",
      card: "summary",
      title: post.title,
      description:
        "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!",
      images: `${clientUrl}/imagePreview.png`,
    },
  };
}
