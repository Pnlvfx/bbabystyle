"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import userapis from "../../../API/userapis";
import { CloseIcon } from "../../svg/SVG";
import styles from "./cookie-consent-mobile.module.css";
const CookieConsentMobile = () => {
  const [euCookie, setEuCookie] = useState(true);
  useEffect(() => {
    const get = async () => {
      try {
        const boolean = await userapis.getEUcookie();
        setEuCookie(boolean);
      } catch (err) {}
    };
    get();
  }, []);

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
          <CloseIcon className="align-middle w-4 h-4" />
        </div>
        <p>
          Cookies help us deliver our Services. We only use essential cookies.{" "}
          <Link
            className="text-[#24a0ed]"
            href={"/policies/cookie-notice"}
            target={"_blank"}
          >
            Learn More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CookieConsentMobile;
