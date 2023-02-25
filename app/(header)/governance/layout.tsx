import { use } from "react";
import ssrapis from "../../../components/API/ssrapis";
import GovernanceTab from "../../../components/governance/GovernanceTab";

const GovernanceLayout = ({ children }: ChildrenProps) => {
  const session = use(ssrapis.getSession());
  return (
    <>
      {!session?.user && (
        <div className="absolute top-0 bottom-0 left-0 right-0 m-auto h-[100px] w-[100%]">
          <div className="text-center">
            <p className="text-lh font-bold text-bbaby-red">Sorry, this is a governance-only page</p>
          </div>
        </div>
      )}
      {session?.user?.role === 0 && (
        <div className="absolute top-0 bottom-0 left-0 right-0 m-auto h-[100px] w-[100%]">
          <div className="text-center">
            <p className="text-lh font-bold text-bbaby-red">Sorry, this is a governance-only page</p>
          </div>
        </div>
      )}
      {session?.user?.role === 1 && (
        <div className="w-full">
          <GovernanceTab />
          {children}
        </div>
      )}
    </>
  );
};

export default GovernanceLayout;

export const metadata = {
  title: "Bbabystyle - authority page",
  robots: {
    index: false,
  },
};
