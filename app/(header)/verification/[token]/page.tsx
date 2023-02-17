import { redirect } from "next/navigation";
import { use } from "react";
import { getHeaders } from "../../../../components/API/config/serverConfig";
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
    return "Something went wrong, probably this token is expired!";
  }
};

const ActivationEmail = ({ params }: ActivationEmailProps) => {
  const status = use(activationEmail(params.token));

  if (status === 'Success') {
    redirect('/');
  }

  return (
      <div className="h-[100vh] flex items-center justify-center bg-bbaby-brighter">
        <div className="text-reddit_red">{status}</div>
      </div>
  );
};

export default ActivationEmail;
