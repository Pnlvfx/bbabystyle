import { use } from "react";
import ssrapis from "../components/API/ssrapis";
import Header from "../components/header/Header";

const Loading = () => {
  const session = use(ssrapis.getSession());
  return (
    <div>
      <Header session={session} />
    </div>
  );
};

export default Loading;
