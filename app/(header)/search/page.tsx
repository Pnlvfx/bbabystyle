import { use } from "react";
import ssrapis from "../../../components/API/ssrapis";

interface SearchPageProps {
  searchParams: {
    text: string;
  };
}

const SearchPage = () => {
  //const posts = use(ssrapis.search(searchParams.text));
  return <div></div>;
};

export default SearchPage;
