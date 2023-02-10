import { use } from "react";
import ssrapis from "../../../../components/API/ssrapis";
import Feed from "../../../../components/post/Feed";

interface UserPageProps {
  params: {
    username?: string;
  };
}

const UserPage = ({ params }: UserPageProps) => {
  if (!params.username) {
    return <div></div>;
  }

  const posts = use(ssrapis.getPosts(15, 0, "author", params.username));
  return <Feed author={params.username} posts={posts} />;
};

export default UserPage;
