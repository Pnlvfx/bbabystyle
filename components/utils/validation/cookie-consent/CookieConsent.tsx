"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import userapis from "../../../API/userapis";
import styles from "./cookie-consent.module.css";
const CookieConsent = () => {
  const [euCookie, setEuCookie] = useState(true);
  const shouldRequest = useRef(true);
  useEffect(() => {
    if (!shouldRequest.current) return;
    shouldRequest.current = false
    const get = async () => {
      try {
        const boolean = await userapis.getEUcookie();
        setEuCookie(boolean);
      } catch (err) {}
    };
    get();
  }, []);

  const saveEUcookie = async (status: boolean) => {
    try {
      await userapis.saveEUcookie(status);
      setEuCookie(true);
    } catch (err) {}
  };

  if (euCookie) return null;
  return (
    <div>
      <div className={styles.cookieContainer}>
        <section>
          <div
            className={styles.cookieConsent}
            style={{
              opacity: 1,
              transform: "translateY(0px) scale(1, 1)",
            }}
          >
            <section className="my-[6px] flex flex-row items-center">
              <div>
                <span className={styles.span}>
                  Bbabystyle and its partners use cookies and similar
                  technologies to provide you with a better experience.
                </span>
                <span className={styles.span}>
                  By accepting all cookies, you agree to our use of cookies to
                  deliver and maintain our services and site, improve the
                  quality of Bbabystyle, personalize Bbabystyle content and
                  advertising, and measure the effectiveness of advertising.
                </span>
                <span className={styles.span}>
                  By rejecting non-essential cookies, Bbabystyle may still use
                  certain cookies to ensure the proper functionality of our
                  platform. For more information, please see our{" "}
                  <Link
                    className="text-[#4fbcff]"
                    href={"/policies/cookies"}
                    target="_blank"
                  >
                    Cookie Notice
                  </Link>{" "}
                  and our{" "}
                  <Link
                    className="text-[#4fbcff]"
                    href={"/policies/privacy-policy"}
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>{" "}
                  .
                </span>
              </div>
            </section>
            <section className="flex justify-center items-center my-3 min-w-[50%]">
              <section>
                <form onSubmit={(e) => e.preventDefault()}>
                  <button
                    className={styles.cookieButtons}
                    onClick={() => saveEUcookie(true)}
                  >
                    Accept All
                  </button>
                </form>
              </section>
              <section>
                <form onSubmit={(e) => e.preventDefault()}>
                  <button
                    className={styles.cookieButtons}
                    onClick={() => saveEUcookie(false)}
                  >
                    Reject non-essential
                  </button>
                </form>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CookieConsent;
