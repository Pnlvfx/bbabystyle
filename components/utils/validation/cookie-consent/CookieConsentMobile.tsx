"use client";
import Link from "next/link";
import userapis from "../../../API/userapis";
import { CloseIcon } from "../../svg/SVG";
import styles from "./cookie-consent-mobile.module.css";
import useCookieConsent from "./useCookieConsent";
const CookieConsentMobile = () => {
  const { euCookie, setEuCookie } = useCookieConsent();

  const saveEUcookie = async () => {
    try {
      await userapis.saveEUcookie(true);
      setEuCookie(true);
    } catch (err) {}
  };

  if (euCookie) return null;
  return (
    <div className="p-2">
      <div className={styles.cookieContainer}>
        <div onClick={saveEUcookie} className="absolute top-0 right-0">
          <CloseIcon className="align-middle w-4 h-4 fill-bbaby-text_darker" />
        </div>
        <p className="text-[14px] leading-4">
          Cookies help us deliver our Services. We only use essential cookies.{" "}
          <Link className="text-[#24a0ed]" href={"/policies/cookies"} target={"_blank"}>
            Learn More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CookieConsentMobile;
