import { use } from "react";
import ssrapis from "../../../components/API/ssrapis";
import Search from "../../../components/search/Search";
import styles from "../../../components/search/search-page.module.css";

interface SearchPageProps {
  params: {};
  searchParams: {
    text?: string;
    type?: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  if (!searchParams.text) {
    return <div></div>;
  }

  const posts = use(ssrapis.search(searchParams.text));

  if (!posts) {
    return <div></div>;
  }

  return (
    <div className={styles.mainSearch}>
      <div className={styles.searchPage}>
        <Search posts={posts} styles={styles} q={searchParams.text} type={searchParams.type} />
      </div>
    </div>
  );
};

export default SearchPage;
