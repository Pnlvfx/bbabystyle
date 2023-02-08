import { use } from "react";
import ssrapis from "../../../components/API/ssrapis";
import Search from "../../../components/search/Search";

interface SearchPageProps {
  params: {
  }
  searchParams: {
    text: string;
    type: string
  };
}

const SearchPage = ({searchParams}: SearchPageProps) => {
  const posts = use(ssrapis.search(searchParams.text));

  if (!posts) {
    return (
      <div>
        
      </div>
    )
  }

  return <Search posts={posts} />
};

export default SearchPage;
