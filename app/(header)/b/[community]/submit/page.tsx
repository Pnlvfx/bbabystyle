import { use } from "react";
import ssrapis from "../../../../../components/API/ssrapis";
import Submit from "../../../../../components/submit/Submit";
import { SubmitContextProvider } from "../../../../../components/submit/SubmitProvider";
import UserSecurity from "../../../../../components/utils/security/UserSecurity";
import TempSubmitWid from "../../../../../components/widget/TempSubmitWid";

interface SubmitCommunityPageProps {
  params: {
    community: string;
  };
}

const SubmitCommunityPage = ({ params }: SubmitCommunityPageProps) => {
  const community = use(ssrapis.getCommunity(params.community));

  if (!community) {
    return (
      <div>

      </div>
    )
  }

  return (
    <div className="max-w-[1248px] md:py-5 md:px-6 flex flex-row justify-center box-border my-0 mx-auto">
      <div className="lg:max-w-[740px] mr-0 w-full md:mr-6 lg:w-[740px] flex-grow">
        <SubmitContextProvider minimal={false} initialCommunity={community}>
          <UserSecurity>
            <Submit />
          </UserSecurity>
        </SubmitContextProvider>
      </div>
      <div className="mt-11 hidden lg:block">
        <TempSubmitWid />
      </div>
    </div>
  );
};

export default SubmitCommunityPage;
