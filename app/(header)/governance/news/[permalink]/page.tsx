import { use } from "react";
import ssrgov from "../../../../../components/API/ssrgov";

interface ExternalArticlePageProps {
  params: {
    permalink: string;
  };
}
const ArticlePage = ({ params }: ExternalArticlePageProps) => {
  const permalink = `/governance/news/${params.permalink}`;
  const news = use(ssrgov.getArticle(permalink));
  return <div>page</div>;
};

export default ArticlePage;
