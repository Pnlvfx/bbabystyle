import { use } from "react";
import ssrapis from "../../../components/API/ssrapis";
import Feed from "../../../components/post/Feed";

const BestPage = () => {
    const posts = use(ssrapis.getPosts(15, 0));
    return <Feed posts={posts} />;
}

export default BestPage