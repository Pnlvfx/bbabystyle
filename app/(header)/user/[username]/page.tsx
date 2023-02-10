import { use } from "react";
import ssrapis from "../../../../components/API/ssrapis";
import AuthorHeader from "../../../../components/authorpage/AuthorHeader";
import Feed from "../../../../components/post/Feed";
import styles from './user-page.module.css';

interface UserPageProps {
  params: {
    username?: string;
  };
}

const UserPage = ({ params }: UserPageProps) => {
  if (!params.username) {
    return <div></div>;
  }

  const posts = use(ssrapis.getPosts(15, 0, "author", params.username));
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
      <Feed author={params.username} posts={posts} />
    </>
  );
};

export default UserPage;
