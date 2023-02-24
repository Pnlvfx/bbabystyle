import Link from 'next/link';

const UserAgreementPage = () => {
  return (
    <>
      <div></div>
      <article className="md:col-start-2 md:row-start-2 overflow-x-hidden">
        <h1 className="text-[32px] leading-[36px] mb-4 mt-[16px]">Bbabystyle User Agreement</h1>
        <div className="mb-4">Effective February 28, 2023. Last Revised February 28, 2023.</div>
        <div id="content-0">
          <h2 className="text-[24px] leading-[28px] mb-4">Bbabystyle User Agreement if you live in the EEA, United Kingdom, or Switzerland</h2>
          <p>
            Hello, people of the Internet! This Bbabystyle User Agreement (“Terms”) applies to your access to and use of the websites, widgets, APIs,
            emails, and other online products and services (collectively, the “Services”) provided by Bbabystyle, Inc. (“Bbabystyle,” “we,” “us,” or
            “our”).
          </p>
          <p>
            Remember Bbabystyle is for fun and is intended to be a place for your entertainment, but we still need some basic rules. In order to use
            the Services, you must have accepted these Terms, which are: (a) presented to you when you create an Account; and (b) available at all
            times when you access the Services. If you don&apos;t accept them, you may not access or use our Services.
          </p>
        </div>
        <div id="content-1">
          <h2 className="text-[24px] leading-[28px] mb-4">1. Your Access to the Services</h2>
          <div className="w-full overflow-x-scroll">
            <p>
              No one under 13 is allowed to use or access the Services. We may offer additional Services that require you to be older to use them, so
              please read all notices and any Additional Terms carefully when you access the Services.
            </p>
            <p>By using the Services, you state that:</p>
            <ul className="pl-8 mb-4">
              <li className="mt-1 list-disc">
                You are at least 13 years old and over the minimum age required by the laws of your country of residence to access and use the
                Services;
              </li>
              <li className="mt-1 list-disc">
                You can form a binding contract with Bbabystyle, or, if you are over 13 but under the age of majority in your jurisdiction, that your
                legal guardian has reviewed and agrees to these Terms;
              </li>
              <li className="mt-1 list-disc">You are not barred from using the Services under all applicable laws; and</li>
              <li className="mt-1 list-disc">You have not been permanently suspended or removed from the Services.</li>
            </ul>
            <p>
              If you are accepting these Terms on behalf of another legal entity, including a business or government entity, you represent that you
              have full legal authority to bind such entity to these Terms.
            </p>
          </div>
        </div>
        <div id="content-2">
          <h2 className="text-[24px] leading-[28px] mb-4">2. Privacy</h2>
          <p>
            Bbabystyle&apos;s{' '}
            <Link className="text-[#003584]" href={'/policies/privacy-policy'}>
              Privacy Policy
            </Link>{' '}
            explains how and why we collect, use, and share information about you when you access or use our Services. You understand that through
            your use of the Services, you consent to the collection and use of this information as set forth in the{' '}
            <Link className="text-[#003584]" href={'/policies/privacy-policy'}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div id="content-3">
          <h2 className="text-[24px] leading-[28px] mb-4">3. Your Use of the Services</h2>
          <p>
            Subject to your complete and ongoing compliance with these Terms, Bbabystyle grants you a personal, non-transferable, non-exclusive,
            revocable, limited license to access and use the Services. We reserve all rights not expressly granted to you by these Terms.
          </p>
          <p>Except and solely to the extent such a restriction is impermissible under applicable law, you may not, without our written agreement:</p>
          <ul className="pl-8 mb-4">
            <li className="mt-1 list-disc">
              license, sell, transfer, assign, distribute, host, or otherwise commercially exploit the Services or Content;
            </li>
            <li className="mt-1 list-disc">
              modify, prepare derivative works of, disassemble, decompile, or reverse engineer any part of the Services or Content; or
            </li>
            <li className="mt-1 list-disc">
              access the Services or Content in order to build a similar or competitive website, product, or service,
            </li>
          </ul>
          <p>
            We do not guarantee that the Services will always be available or uninterrupted. We are always improving our Services. This means we may
            add or remove features, products, or functionalities; we will try to notify you beforehand, but that won&apos;t always be possible. We
            reserve the right to modify, suspend, or discontinue the Services (in whole or in part) at any time, with or without notice to you. Any
            future release, update, or other addition to functionality of the Services will be subject to these Terms, which may be updated from time
            to time. You agree that we will not be liable to you or to any third party for any modification, suspension, or discontinuation of the
            Services or any part thereof.
          </p>
        </div>
        <div>
          <h2 className="text-[24px] leading-[28px] mb-4">4. Your Bbaby Account and Account Security</h2>
          <p>
            To use certain features of our Services, you may be required to create a Bbabystyle account (an “Account”) and provide us with a username,
            password, and certain other information about yourself as set forth in the{' '}
            <Link className="text-[#003584]" href={'/policies/privacy-policy'}>
              Privacy Policy
            </Link>
            .
          </p>
          <p>You will not license, sell, or transfer your Account without our prior written approval.</p>
        </div>
      </article>
    </>
  );
};

export default UserAgreementPage;
