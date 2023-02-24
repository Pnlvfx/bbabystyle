import { useEffect, useRef, useState } from "react";
import userapis from "../../../API/userapis";

const useCookieConsent = (notShow: boolean) => {
  const [euCookie, setEuCookie] = useState(true);
  const shouldRequest = useRef(true);
  useEffect(() => {
    const get = async () => {
      try {
        if (notShow) return;
        if (!shouldRequest.current) return;
        shouldRequest.current = false;
        const boolean = await userapis.getEUcookie();
        setEuCookie(boolean);
      } catch (err) {}
    };
    get();
  }, [notShow]);
  return {euCookie, setEuCookie};
};

export default useCookieConsent;
