import { useEffect, useRef } from "react";
import { useGoogleContext } from "./GoogleOAuthProvider";
import { CredentialResponse, GoogleLoginProps } from "./types/googletypes";

const containerHeightMap = { large: 40, medium: 32, small: 20 };

const GoogleLogin = ({
  onSuccess,
  onError,
  promptMomentNotification,
  type = "standard",
  theme = "outline",
  size = "large",
  text,
  shape,
  logo_alignment,
  width,
  locale,
  ...props
}: GoogleLoginProps) => {
  const btnContainerRef = useRef<HTMLDivElement>(null);
  const { clientId, scriptLoadedSuccessfully } = useGoogleContext();

  const onSuccessRef = useRef(onSuccess);
  onSuccessRef.current = onSuccess;

  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  const promptMomentNotificationRef = useRef(promptMomentNotification);
  promptMomentNotificationRef.current = promptMomentNotification;

  useEffect(() => {
    if (!scriptLoadedSuccessfully) return;
    window.google?.accounts.id.initialize({
      client_id: clientId,
      callback: (credentialResponse: CredentialResponse) => {
        if (!credentialResponse.clientId || !credentialResponse.credential) {
          return onErrorRef.current?.();
        }
        onSuccessRef.current(credentialResponse);
      },
      ...props,
    });
    window.google?.accounts.id.renderButton(btnContainerRef.current!, {
      type,
      theme,
      size,
      text,
      shape,
      logo_alignment,
      width,
      locale,
    });
    return () => {};
  }, [clientId, scriptLoadedSuccessfully, type, theme, size, text, shape, logo_alignment, width, locale, props]);

  return <div ref={btnContainerRef} style={{ height: containerHeightMap[size] }} />;
};

export default GoogleLogin;
