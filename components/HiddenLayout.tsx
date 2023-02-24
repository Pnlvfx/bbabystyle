"use client";

import { useEffect } from "react";
import { clientUrl } from "../config/config";
import GoogleAnalytics from "./google/GoogleAnalytics";
import oauthapis from "./API/oauthapis";
import AuthModal from "./auth/modal/AuthModal";
import { useModals } from "./auth/modal/ModalsProvider";
import useGoogleOneTapLogin from "./auth/providers/google/hooks/useGoogleOneTapLogin";
import { useSession } from "./auth/UserContextProvider";
import SearchDropdown from "./header/search/SearchDropdown";
import UserMenu from "./header/usermenu/UserMenu";

const HiddenLayout = () => {
  const { session } = useSession();
  const modals = useModals();

  //const shouldRequest = useRef(true);

  useEffect(() => {
    const analytics = async () => {
      try {
        // if (!shouldRequest.current) return;
        // shouldRequest.current = false;
        // // if (session?.user?.role === 1) return
        // // if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') return
        // console.log("fired");
        // // const info = await getUserInfo()
        // // console.log(info);
        // const url = `${server}/analytics/pageview`;
        // const res = await fetch(url, {
        //   method: 'GET',
        //   credentials: 'include',
        // })
        // console.log(res.ok);
      } catch (err) {}
    };
    analytics();
  }, []);

  return (
    <>
      {!session?.user && modals.showAuth !== "hidden" && <AuthModal />}
      <SearchDropdown />
      {modals.showUserMenu && <UserMenu />}
      {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
      {!session?.user && !clientUrl.startsWith("http://192") && <UseOneTap />}
    </>
  );
};

export default HiddenLayout;

const UseOneTap = () => {
  useGoogleOneTapLogin({
    onSuccess: (response) => oauthapis.googleLogin(response),
    cancel_on_tap_outside: false,
  });
  return null;
};
