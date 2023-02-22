import { redirect } from "next/navigation";
import { use } from "react";
import { getHeaders } from "../../../../components/API/config/serverConfig";
import { clientUrl, server } from "../../../../config/config";
import { getMetadata } from "../../../../components/metadata/metadata";
import { Metadata } from "next";

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

  if (status === "Success") {
    redirect("/");
  }

  return (
    <div className="h-[100vh] flex items-center justify-center bg-bbaby-brighter">
      <div className="text-reddit_red">{status}</div>
    </div>
  );
};

export default ActivationEmail;

export const generateMetadata = async ({ params }: ActivationEmailProps): Promise<Metadata> => {
  const title = "bbabystyle.com: verify email";
  const description =
    "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!";
  const url = `${clientUrl}/verification/${params.token}`;
  const type = "website";
  const card = "summary";
  const images = [
    {
      url: `${clientUrl}/imagePreview.png`,
      width: 256,
      height: 256,
    },
  ];
  return getMetadata(title, description, url, type, card, images);
};
