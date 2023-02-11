"use client";

import { clientUrl } from "../config/config";
import GoogleAnalytics from "./analytics/GoogleAnalytics";
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
  return (
    <>
  {!session?.user && modals.showAuth !== "hidden" && <AuthModal />}
  <SearchDropdown />
  {modals.showUserMenu && <UserMenu />}
  {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
  {!session?.user && !clientUrl.startsWith('http://192') && <UseOneTap />}
  </>
  )
};

export default HiddenLayout;

const UseOneTap = () => {
  useGoogleOneTapLogin({
    onSuccess: (response) => oauthapis.googleLogin(response),
    cancel_on_tap_outside: false,
  });
  return null;
}
