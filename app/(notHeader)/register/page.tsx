import RegisterMain from "../../../components/auth/register/RegisterMain";
import { clientUrl } from "../../../config/config";

const RegisterPage = () => {
  return (
    <div className="bg-white text-black">
      <RegisterMain />
    </div>
  );
};

export default RegisterPage;

export const metadata = {
  title: `bbabystyle.com: join out community`,
  description: `Create an account on bbabystle and become part of our community!.`,
  alternates: {
    canonical: `${clientUrl}/register`,
    languages: {
      "en-US": `${clientUrl}/register`,
    },
  },
  openGraph: {
    title: `bbabystyle.com: join out community`,
    description: `Create an account on bbabystle and become part of our community!.`,
    url: `${clientUrl}/register`,
    siteName: "bbabystyle",
    images: [
      {
        url: `${clientUrl}/imagePreview.png`,
        width: 256,
        height: 256,
      },
    ],
    type: "website",
  },
  twitter: {
    creator: "@Bbabystyle",
    card: "summary",
    title: `bbabystyle.com: join out community`,
    description: `Create an account on bbabystle and become part of our community!.`,
    images: `${clientUrl}/imagePreview.png`,
  },
};
