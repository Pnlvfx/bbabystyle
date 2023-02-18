import { redirect } from "next/navigation";
import { use } from "react";
import ssrapis from "../../../components/API/ssrapis";
import SettingsTab from "../../../components/settings/SettingsTab";
import "./user-settings.css";

const SettingsLayout = ({ children }: ChildrenProps) => {
  const session = use(ssrapis.getSession());

  if (!session || !session.user) {
    redirect("/");
  }
  return (
    <div className="pb-10 bg-bbaby-brighter">
      <div className="relative box-border">
        <h1 className="max-w-[1200px] text-[18px] font-medium leading-[22px] p-5 pt-4 mx-auto">User Settings</h1>
        <SettingsTab />
      </div>
      <div className="max-w-[1200px] mx-auto px-4 flex">
        <div className="max-w-[688px] flex-1">{children}</div>
      </div>
    </div>
  );
};

export default SettingsLayout;
