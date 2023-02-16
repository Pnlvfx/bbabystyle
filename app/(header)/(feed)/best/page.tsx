import { use } from "react";
import ssrapis from "../../../../components/API/ssrapis";
import Feed from "../../../../components/post/Feed";
import { clientUrl } from "../../../../config/config";
import { getMetadata } from '../../../../components/metadata/metadata';

const BestPage = () => {
    const posts = use(ssrapis.getPosts(15, 0));
    return <Feed posts={posts} />;
}

export default BestPage

const title = 'Bbabystyle - Free speech';
const description =
  "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!";
const images = [{
  url: `${clientUrl}/imagePreview.png`,
  width: 256,
  height: 256,
}];
export const metadata = getMetadata(title, description, clientUrl, 'website', 'summary', images);