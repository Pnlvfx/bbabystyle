import { useEffect, useRef, useState } from "react";
import userapis from "../../../API/userapis";

const useCookieConsent = () => {
  const [euCookie, setEuCookie] = useState(true);
  const shouldRequest = useRef(true);
  useEffect(() => {
    const get = async () => {
      try {
        if (!shouldRequest.current) return;
        shouldRequest.current = false;
        const boolean = await userapis.getEUcookie();
        setEuCookie(boolean);
      } catch (err) {}
    };
    get();
  }, []);
  return {euCookie, setEuCookie};
};

export default useCookieConsent;
