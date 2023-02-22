import Link from 'next/link';

const CookiePage = () => {
  return (
    <>
      <div></div>
      <article className="md:col-start-2 md:row-start-2 overflow-x-hidden">
        <h1 className="text-[32px] leading-[36px] mb-4 mt-[16px]">Cookie Notice</h1>
        <div>Effective February 28, 2023. Last Revised February 28, 2023.</div>
        <div>
          <p>This Cookie Notice explains how we use cookies and similar technologies as well as the options you have to control them.</p>
        </div>
        <div id="content-1">
          <h2 className="text-[24px] leading-[28px] mb-4">What are cookies and how does Bbabystyle use them?</h2>
          <p>
            A cookie is a small text file that a site stores on your computer or mobile device when you visit the site. Browsers support cookies and
            similar technologies (such as local storage and pixels) so that a site like Bbabystyle can remember information about your visit and can
            use the information to improve your experience and to create aggregated anonymized statistics about usage of the site. In this Notice, we
            use the term “cookie” to refer both to cookies and similar technologies.
          </p>
          <p>
            Cookies may be set by the site you are visiting (called “first-party cookies”) or by a third party, such as those who provide analytics or
            advertising services or interactive content on the site (“third-party cookies”). In addition to using cookies on our sites, we may also
            use Google AdSense cookies.
          </p>
          <p>
            Our first-party cookies include cookies that are strictly necessary, functional cookies, cookies related to analytics/performance and
            advertising-related cookies.
          </p>
          <p>
            Analytics and Performance: These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our
            site. They help us to know which pages are the most and least popular and see how visitors move around the site.
          </p>
          <p>
            Advertising: We use these cookies to deliver advertisements, to make them more relevant and meaningful to users, and to track the
            efficiency of our advertising campaigns, both on our services and on other sites or mobile apps. Our third-party advertising partners may
            use these cookies to build a profile of your interests and deliver relevant advertising on other sites.
          </p>
          <h2 className="text-[24px] leading-[28px] mb-4">How do I control cookies and how my data is used?</h2>
          <p>There are a number of ways you can control how information is collected from cookies on Bbabystyle and how that information is used.</p>
          <h2 className="text-[20px] leading-[24px] mb-4">Your browser settings</h2>
          <p>
            Your browser includes controls that allow you to manage the use of cookies by the sites that you visit. Most browsers have features that
            enable you to see and delete cookies stored on your device and to block cookies from all or selected sites. For more information, here are
            links to external help materials from some of the popular browsers:
          </p>
          <ul className="pl-8 mb-4">
            <li className="mt-1 list-disc">
              <a
                href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                className="text-[#003584] hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li className="mt-1 list-disc">
              <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" className="text-[#003584] hover:underline">
                Apple Safari
              </a>
            </li>
            <li className="mt-1 list-disc">
              <a href="https://support.google.com/chrome/answer/95647" className="text-[#003584] hover:underline">
                Google Chrome
              </a>
            </li>
            <li className="mt-1 list-disc">
              <a
                href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                className="text-[#003584] hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <h2 className="text-[20px] leading-[24px] mb-4">Third-party opt-outs</h2>
          <p>
            The major online advertising industry groups offer tools to limit how cookies are used for advertising purposes by participating third
            parties. More information is available on these sites from the{' '}
            <a className="text-[#003584] hover:underline" href="https://optout.networkadvertising.org/?c=1">
              Network Advertising Initiative
            </a>
            , the{' '}
            <a className="text-[#003584] hover:underline" href="https://optout.aboutads.info">
              Digital Advertising Alliance
            </a>
            , and for users in the EU, the{' '}
            <a className="text-[#003584] hover:underline" href="https://www.youronlinechoices.com/">
              European Interactive Digital Advertising Alliance
            </a>
            . Also, Google provides web users with the{' '}
            <a className="text-[#003584] hover:underline" href="https://tools.google.com/dlpage/gaoptout">
              Google Analytics Opt-out Browser Add-on
            </a>{' '}
            to prevent the collection of data via Google Analytics.
          </p>
          <h2 className="text-[20px] leading-[24px] mb-4">Bbabystyle user settings</h2>
          <p>
            On Bbabystyle, you can control your privacy settings and how Bbabystyle uses data by visiting{' '}
            <Link className="text-[#003584] hover:underline" href="/settings/privacy">
              https://www.bbabystyle.com/settings/privacy
            </Link>
            .
          </p>
        </div>
      </article>
    </>
  );
};

export default CookiePage;
