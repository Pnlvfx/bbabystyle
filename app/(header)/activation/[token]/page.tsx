import { use } from "react";
import { getHeaders } from "../../../../components/API/config/serverConfig";
import {
  showErrMsg,
  showSuccessMsg,
} from "../../../../components/utils/validation/Validation";
import { server } from "../../../../config/config";

interface ActivationEmailProps {
  params: {
    token: string;
  };
  searchParams: {};
}

const activationEmail = async (activation_token: string) => {
  try {
    const url = `${server}/activation`;
    const body = JSON.stringify({ activation_token });
    const res = await fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body,
    });
    const data = await res.json();
    return data.msg as string;
  } catch (err) {
    return 'Something went wrong!'
  }
};

const ActivationEmail = ({ params }: ActivationEmailProps) => {
  const status = use(activationEmail(params.token));

  return (
    <div>
      {status === 'Success' ? (
        showSuccessMsg(status)
      ) : (
        showErrMsg(status)
      )}
    </div>
  );
};

export default ActivationEmail;
