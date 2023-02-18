import { Metadata } from "next";
import { redirect } from "next/navigation";
import { use } from "react";
import ssrapis from "../../../../../components/API/ssrapis";
import Submit from "../../../../../components/submit/Submit";
import { SubmitContextProvider } from "../../../../../components/submit/SubmitProvider";
import TempSubmitWid from "../../../../../components/widget/TempSubmitWid";
import { clientUrl } from "../../../../../config/config";
import { CommunityPageProps } from "../page";

const SubmitCommunityPage = ({ params }: CommunityPageProps) => {
  const session = use(ssrapis.getSession());

  if (!session || !session.user) {
    redirect("/");
  }

  const community = use(ssrapis.getCommunity(params.community));

  if (!community) {
    return <div></div>;
  }

  return (
    <div className="max-w-[1248px] md:py-5 md:px-6 flex flex-row justify-center box-border my-0 mx-auto">
      <div className="lg:max-w-[740px] mr-0 w-full md:mr-6 lg:w-[740px] flex-grow">
        <SubmitContextProvider minimal={false} initialCommunity={community}>
          <Submit />
        </SubmitContextProvider>
      </div>
      <div className="mt-11 hidden lg:block">
        <TempSubmitWid />
      </div>
    </div>
  );
};

export default SubmitCommunityPage;

export const generateMetadata = async ({ params }: CommunityPageProps): Promise<Metadata> => {
  const community = await ssrapis.getCommunity(params.community);
  if (!community) return {};
  return {
    title: `Submit to ${community.name}`,
    description: community.description,
    alternates: {
      canonical: `${clientUrl}/b/${community}/submit`,
      languages: {
        "en-US": `${clientUrl}/b/${community}/submit`,
      },
    },
  };
};
