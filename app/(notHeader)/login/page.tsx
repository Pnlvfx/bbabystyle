import Link from "next/link"
import LoginForm from "../../../components/auth/LoginForm"

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
  )
}

export default LoginPage