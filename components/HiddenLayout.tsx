"use client";

import oauthapis from "./API/oauthapis";
import AuthModal from "./auth/modal/AuthModal";
import { useAuthModal } from "./auth/modal/AuthModalProvider";
import useGoogleOneTapLogin from "./auth/providers/google/hooks/useGoogleOneTapLogin";
import { useSession } from "./auth/UserContextProvider";

const HiddenLayout = () => {
  useGoogleOneTapLogin({
    onSuccess: (response) => oauthapis.googleLogin(response),
  });
  const { session } = useSession();
  const authModal = useAuthModal();
  return <>{!session?.user && authModal.show !== "hidden" && <AuthModal />}</>;
};

export default HiddenLayout;
