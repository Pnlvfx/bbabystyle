import { use } from "react";
import ssrgov from "../../../../components/API/ssrgov";
import BBCfeed from "../../../../components/governance/BBC/BBCfeed";

const BBCPage = () => {
  const bbcNews = use(ssrgov.getArticles(16, 0));

  if (!bbcNews) {
    return <div></div>;
  }

  return <BBCfeed news={bbcNews} />;
};

export default BBCPage;
