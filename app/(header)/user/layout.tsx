import { use } from "react";
import ssrapis from "../../../components/API/ssrapis";
import AuthorHeader from "../../../components/authorpage/AuthorHeader";
import BestPost from "../../../components/post/BestPost";
import Donations from "../../../components/widget/Donations";
import PolicyWidget from "../../../components/widget/PolicyWidget";
import Widget from "../../../components/widget/Widget";
import styles from "./user-page.module.css";

const UserLayout = ({ children }: ChildrenProps) => {
  const session = use(ssrapis.getSession());
  return (
    <>
      <div className={styles.userHeader}>
        <div className={styles.userHeader2}>
          <div className={`${styles.userHeader3} ${styles.userHeader3_1}`}>
            <div className={styles.userHeader4}>
              <AuthorHeader styles={styles} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-full justify-center md:py-5 md:px-6">
        <div className="w-full lg:w-[640px]">
          <div className="mb-4">
            <BestPost />
          </div>
          {children}
        </div>
        {!session?.device?.mobile && (
          <div className="ml-6 hidden lg:block">
            <Widget />
            <Donations />
            <PolicyWidget />
          </div>
        )}
      </div>
    </>
  );
};

export default UserLayout;
