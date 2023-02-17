import { use } from "react";
import ssrapis from "../API/ssrapis";
import GenderButton from "./buttons/GenderButton";
import ResendEmail from "./buttons/ResendEmail";
import TwitterButton from "./buttons/TwitterButton";

const Account = () => {
  const userInfo = use(ssrapis.getUserInfo());

  if (!userInfo) {
    return <div></div>;
  }

  return (
    <>
      <h2 className="settingsh2">Account Settings</h2>
      <h3 className="settingsh3">Account preferences</h3>
      <div className="settings-button-container">
        <div className="settings-button-left">
          <div className="settings-button-left-in">
            <p className="settings-button-left-in-p">Email address</p>
          </div>
          <p className="settings-button-left-in-p-small">{userInfo.email} {!userInfo.email_verified && 'is not verified!'}</p>
          {!userInfo.email_verified && <ResendEmail />}
        </div>
        <div className="settings-button-right">
          <div className="settings-button-right-div">
            <button role={"button"} tabIndex={0}>
              Change
            </button>
          </div>
        </div>
      </div>
      <div className="settings-button-container">
        <div className="settings-button-left">
          <div className="settings-button-left-in">
            <p className="settings-button-left-in-p">Change Password</p>
          </div>
          <p className="settings-button-left-in-p-small">
            Password must be at least 8 characters long
          </p>
        </div>
        <div className="settings-button-right">
          <div className="settings-button-right-div">
            <button role={"button"} tabIndex={0}>
              Change
            </button>
          </div>
        </div>
      </div>
      <GenderButton />
      <h3 className="settingsh3">Connected accounts</h3>
      <TwitterButton userInfo={userInfo} />
    </>
  );
};

export default Account;
