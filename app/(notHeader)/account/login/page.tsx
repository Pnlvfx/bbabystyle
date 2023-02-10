import Link from "next/link";
import LoginForm from "../../../../components/auth/LoginForm";
import { clientUrl } from "../../../../config/config";

const LoginPage = () => {
  return (
    <div className="block bg-white text-black">
      <main className="block">
        <div className="box-border flex min-h-[100vh] w-[100vw] flex-col items-center justify-center">
          <div className="box-border flex">
            <div className="box-border w-full max-w-[280px] self-center p-0">
              <div className="mx-auto box-border block w-[280px] max-w-[280px]">
                <h1 className="mt-6 text-xl">Log In</h1>
              </div>
              <p className=" mx-auto mt-2 text-xs">
                By continuing, you agree are setting up a Bbabystyle account and agree to our{" "}
                <Link target={"_blank"} href={"/policies/user-agreement"} className="text-reddit_blue">
                  User Agreement{" "}
                </Link>
                and{" "}
                <Link target={"_blank"} href={"/policies/privacy-policy"} className="text-reddit_blue">
                  Privacy Policy
                </Link>
                .
              </p>
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;

export const metadata = {
  title: `bbabystyle.com: Log in`,
  description: `Don't worry, we won't tell anyone your username. Log in to your Bbaby account.`,
  alternates: {
    canonical: `${clientUrl}/login`,
    languages: {
      'en-US':  `${clientUrl}/login`,
    }
  },
  openGraph: {
    title: `bbabystyle.com: Log in`,
    description: `Don't worry, we won't tell anyone your username. Log in to your Bbaby account.`,
    url: `${clientUrl}/login`,
    siteName: 'bbabystyle',
    images: [
      {
        url: `${clientUrl}/imagePreview.png`,
        width: 256,
        height: 256,
      }
    ],
    type: 'website',
  },
  twitter: {
    creator: '@Bbabystyle',
    card: 'summary',
    title: `bbabystyle.com: Log in`,
    description: `Don't worry, we won't tell anyone your username. Log in to your Bbaby account.`,
    images: `${clientUrl}/imagePreview.png`,
  },
}
