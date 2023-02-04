import GoogleLogin from "./GoogleLogin";
import oauthapis from "../../../API/oauthapis";
import { useAuthModal } from "../../modal/AuthModalProvider";
import { useMessage } from "../../../utils/message/TimeMsgContext";
import { CredentialResponse } from "./types/googletypes";
import { catchErrorWithMessage } from "../../../API/config/apiErrors";

const Google = () => {
  const modalContext = useAuthModal();
  const message = useMessage();

  const responseGoogle = async (response: CredentialResponse) => {
    try {
      await oauthapis.googleLogin(response);
      modalContext.setShow("hidden");
      if (top?.window.location.href) {
        top.window.location.href = "/";
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      catchErrorWithMessage(err, message);
    }
  };

  return (
    <GoogleLogin
      onSuccess={(response) => responseGoogle(response)}
      onError={() => message.setMessage({ value: "Something went wrong", status: "error" })}
      width={"280"}
      type={"standard"}
      theme={"outline"}
      locale={"en"}
    />
  );
};

export default Google;
