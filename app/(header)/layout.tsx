import { use } from "react";
import userapis from "../../components/API/userapis";
import Header from "../../components/header/Header";
import HiddenLayout from "../../components/HiddenLayout";

const Layout = ({ children }: ChildrenProps) => {
  const session = use(userapis.getSession());
  return (
    <>
      <div>
        <Header session={session} />
      </div>
      <div>
        <div>
          <div id="main_content" className="pt-12">
            <div className="flex min-h-[calc(100vh_-_48px)] flex-col">
              <div className="z-3">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <HiddenLayout />
    </>
  );
};

export default Layout;
