import { usePathname } from "next/navigation";
import { AiOutlineEye } from "react-icons/ai";
import { BiLogIn, BiUserCircle } from "react-icons/bi";
import { GiBabyFace } from "react-icons/gi";
import { catchErrorWithMessage } from "../../API/config/apiErrors";
import oauthapis from "../../API/oauthapis";
import { useModals } from "../../auth/modal/ModalsProvider";
import { useMessage } from "../../utils/message/TimeMsgContext";
import { UserMenuButton } from "./buttons/notuser/ThemeButton";
import UserPoliciesButton from "./buttons/user/UserPoliciesButton";
import Section1 from "./Section1";

const UserMenuIn = ({ styles }: UserMenuButton) => {
  const message = useMessage();
  const modals = useModals()
  const pathname = usePathname();

  const doLogout = async () => {
    try {
      if (!pathname) return;
      await oauthapis.logout();
      window.location.href = pathname
    } catch (err) {
      catchErrorWithMessage(err, message);
    }
  };

  const openCommunityForm = () => {
    modals.setShowUserMenu(false)
    modals.setShowCommunity(true)
  }

  return (
    <div>
      <div className="text-bbaby-text_darker block h-10 w-full">
        <span className="flex items-center h-full px-5">
          <span className="mr-3 w-5 h-5">
            <BiUserCircle className="icon" />
          </span>
          <span className="flex-1 text-[14px] font-medium leading-[18px] w-full text-ellipsis whitespace-nowrap overflow-hidden">
            My Stuff
          </span>
        </span>
      </div>
      <Section1 />
      <div className="text-bbaby-text_darker h-10 w-full">
        <span className="flex items-center h-full px-5">
          <span className="mr-3 w-5 h-5">
            <AiOutlineEye className="icon" />
          </span>
          <span className="flex-1 text-[14px] font-medium leading-[18px] w-full text-ellipsis whitespace-nowrap overflow-hidden">
            View Options
          </span>
        </span>
      </div>
      <div className="border-b border-bbaby-border mb-3 pb-3">
        <div
          className={`${styles.active} border-box h-10 w-full cursor-pointer text-[14px] font-medium leading-[18px] items-center flex pr-4 pl-[52px] justify-between`}
        >
          <span>Dark Mode</span>
        </div>
      </div>
      <button className={`h-10 w-full block ${styles.active}`} onClick={openCommunityForm}>
        <span className="flex items-center h-full px-5">
          <span className="mr-3 w-5 h-5">
            <GiBabyFace className="icon" />
          </span>
          <span className="flex-1 text-[14px] text-left font-medium leading-[18px] w-full text-ellipsis whitespace-nowrap overflow-hidden">
            Create a Community
          </span>
        </span>
      </button>
      <UserPoliciesButton styles={styles} />
      <button
        className={`w-full block h-10 border-none box-border ${styles.active}`}
        onClick={doLogout}
      >
        <span className="items-center flex h-full px-5">
          <span className="flex-0 w-5 h-5 mr-3">
            <BiLogIn className="icon" />
          </span>
          <span className="flex-1 text-left text-[14px] leading-[18px] w-full text-ellipsis whitespace-nowrap overflow-hidden font-medium">
            Log Out
          </span>
        </span>
      </button>
      <div className="w-full items-center flex min-h-[40px] py-3 px-5 text-bbaby-text_darker">
        <span className="text-[12px] leading-4 font-normal">
          © 2023 Bbabystyle, Inc. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default UserMenuIn;
