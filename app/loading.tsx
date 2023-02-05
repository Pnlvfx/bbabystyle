import { use } from "react";
import userapis from "../components/API/userapis";
import Header from "../components/header/Header";

const Loading = () => {
  const session = use(userapis.getSession());
  return (
    <div>
      <Header session={session} />
    </div>
  );
};

export default Loading;
