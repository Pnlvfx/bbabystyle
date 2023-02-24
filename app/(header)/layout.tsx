import Script from "next/script";
import { use } from "react";
import ssrapis from "../../components/API/ssrapis";
import ShowCommunity from "../../components/community/ShowCommunity";
import Header from "../../components/header/Header";
import HiddenLayout from "../../components/HiddenLayout";
import CookieConsent from "../../components/utils/validation/cookie-consent/CookieConsent";
import CookieConsentMobile from "../../components/utils/validation/cookie-consent/CookieConsentMobile";
import "./post.css";

const Layout = ({ children }: ChildrenProps) => {
  const session = use(ssrapis.getSession());
  return (
    <>
      <div>
        <Header session={session} />
      </div>
      <div>
        <div>
          <div id="main_content" className="pt-12">
            <div className="flex min-h-[calc(100vh_-_48px)] flex-col">
              <div className="z-3">
                {session?.device?.mobile && <CookieConsentMobile />}
                {children}
              </div>
            </div>
          </div>
          {!session?.device?.mobile && <CookieConsent />}
        </div>
        <ShowCommunity />
      </div>
      <HiddenLayout />
      {process.env.NODE_ENV === "production" && (
        <>
          {/* <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
          <Script
            id="gtag-init"
            async
            defer
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname
            });
          `,
            }}
          />
          <Script id="onRouteChange">
            {`(function (history) {
            var pushState = history.pushState;
            history.pushState = function(state){
                var result = pushState.apply(history, arguments);
                window.dispatchEvent(new Event("routeChange", state));
                return result;
            }
        })(window.history)`}
          </Script> */}
          <Script
            async
            strategy="beforeInteractive"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7203519143982992"
            crossOrigin="anonymous"
          />
        </>
      )}
    </>
  );
};

export default Layout;
