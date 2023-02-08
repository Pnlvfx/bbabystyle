import { use } from "react";
import ssrapis from "../../../../../../components/API/ssrapis";

interface ModQueuePageProps {
  params: {
    community: string;
  };
}

const ModQueuePage = ({ params }: ModQueuePageProps) => {
  const session = use(ssrapis.getSession());
  return (
    <div>
      <div className="absolute top-0 bottom-0 left-0 right-0 m-auto h-[100px] w-[100%]">
        {!session?.user && (
          <div className="text-center">
            <p className="text-lg font-bold mb-4">
              Sorry, this is a moderator-only page
            </p>
            <p className="text-reddit_text-darker text-sm">
              You must be a moderator of b/{params.community} to view this page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModQueuePage;
