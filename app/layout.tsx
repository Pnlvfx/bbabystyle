import { use } from "react";
import userapis from "../components/API/userapis";
import { AuthModalContextProvider } from "../components/auth/modal/ModalsProvider";
import { GoogleOAuthProvider } from "../components/auth/providers/google/GoogleOAuthProvider";
import { UserContextProvider } from "../components/auth/UserContextProvider";
import { TimeMsgContextProvider } from "../components/utils/message/TimeMsgContext";
import "./globals.css";

const RootLayout = ({ children }: ChildrenProps) => {
  const session = use(userapis.getSession());
  return (
    <html lang="en">
      <head />
      <body cz-shortcut-listen="true" className="bg-bbaby-dark text-bbaby-text">
        <div id="container">
          <div tabIndex={-1} />
          <div tabIndex={-1}>
            <UserContextProvider session={session}>
              <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
                <AuthModalContextProvider>
                  <TimeMsgContextProvider>{children}</TimeMsgContextProvider>
                </AuthModalContextProvider>
              </GoogleOAuthProvider>
            </UserContextProvider>
          </div>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
