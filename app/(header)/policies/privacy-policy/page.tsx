import PrivacyTable from '../../../../components/policies/PrivacyTable';

const PrivacyPolicyPage = () => {
  const table1 = {
    title: {
      left: 'Information You Provide to Us',
      right: 'We collect information you provide to us directly when you use the Services. This includes:',
    },
    contents: [
      {
        title: 'Account information',
        content: [
          "You don't need an account to use Bbabystyle. If you create a Bbabystyle account, your account will have a username, which you provide. Your username is public, and it doesn't have to be related to your real name. You may need to provide a password, depending on whether you register using an email address or using a Single Sign-On (SSO) feature (such as Google).",
          'When you use Babystyle, you may provide other optional information. We may ask you to select interests (e.g. history, nature, sports) to help create a home feed for you or to select communities (e.g. b/italy) to join. You may also provide other information, such as a bio, gender, age, location, or profile picture. This information is optional and may be removed at any time. We also store your user account preferences and settings. We may ask for such information prior to you creating a username or account to help improve your experience exploring Babystyle.',
        ],
      },
      {
        title: 'Content you submit',
        content: [
          'We collect the content you submit to the Services. This includes your posts and comments including saved drafts, audio and videos, and your reports and other communications with moderators and with us. Your content may include text, links, images, gifs, audio, and videos.',
        ],
      },
      {
        title: 'Actions you take',
        content: [
          'We collect information about the actions you take when using the Services. This includes your interactions with content, like voting, saving, hiding, and reporting. It also includes your interactions with other users, such as following, friending, and blocking. We collect your interactions with communities, like your subscriptions or moderator status.',
        ],
      },
      {
        title: 'Other information',
        content: [
          'You may choose to provide other information directly to us. For example, we may collect information when you fill out a form, request customer support, or otherwise communicate with us.',
        ],
      },
    ],
  };

  const table2 = {
    title: {
      left: 'Information We Collect Automatically',
      right: 'When you access or use our Services, we may also automatically collect information about you. This includes:',
    },
    contents: [
      {
        title: 'Log and usage data',
        content: [
          'We may log information when you access and use the Services. This may include your IP address, user-agent string, browser type, operating system, referral URLs, device information (e.g., device IDs), device settings, mobile carrier name, pages visited, links clicked, the requested URL, and search terms. Except for the IP address used to create your account, Bbabystyle will delete any IP addresses collected after 100 days.',
        ],
      },
      {
        title: 'Information collected from cookies and similar technologies',
        content: [
          `We may receive information from cookies, which are pieces of data your browser stores and sends back to us when making requests, and similar technologies. We use this information to deliver and maintain our services and our site, improve your experience, understand user activity, personalize content and advertisements, measure the effectiveness of advertising, and improve the quality of our Services. For example, we store and retrieve information about your preferred language and other settings. See our <a href="/policies/cookies">Cookie Notice</a> for more information about how Bbabystyle uses cookies. For more information on how you can disable cookies, please see "Your Choices” below.`,
        ],
      },
      {
        title: 'Location information',
        content: [
          'We may receive and process information about your location. We may receive location information from you when you choose to share such information on our Services, including by associating your content with a location, or we may derive an approximate location based on your IP address.',
        ],
      },
    ],
  };

  return (
    <>
      <div></div>
      <article className="md:col-start-2 md:row-start-2 overflow-x-hidden">
        <h1 className="text-[32px] leading-[36px] mb-4 mt-[16px]">Bbabystyle Privacy Policy</h1>
        <div>Effective February 28, 2023. Last Revised February 28, 2023.</div>
        <div>
          <p>
            At Bbabystyle, we believe that privacy is a right. We want to empower our users to be the masters of their identity. In this privacy
            policy, we want to help you understand how and why Bbabystyle, Inc. (&quot;Bbabystyle,&quot; &quot;we&quot; or &quot;us&quot;) collects,
            uses, and shares information about you when you use our sites, widgets, and other online products and services (collectively, the
            &quot;Services&quot;) or when you otherwise interact with us or receive a communication from us.
          </p>
          <p>
            We collect minimal information that can be used to identify you by default. If you want to just browse, you don&apos;t need an account. If
            you want to create an account to participate in a community, we don&apos;t require you to give us your real name. We don&apos;t
            automatically track your precise location. You can share as much or as little about yourself as you want. You can create multiple
            accounts, update information as you see fit, or ask us to delete your information.
          </p>
          <p>
            Any data we collect is used primarily to provide our services, which are focused on allowing people to come together and form communities,
            the vast majority of which are public. If you have questions about how we use your data, you can always ask us for more information.
          </p>
        </div>
        <div id="content-1">
          <h2 className="text-[24px] leading-[28px] mb-4">What Information We Collect</h2>
          <div className="w-full overflow-x-scroll">
            <PrivacyTable table={table1} />
            <PrivacyTable table={table2} />
          </div>
        </div>
        <div id="content-2">
          <h2 className="text-[24px] leading-[28px] mb-4">How We Use Your Information</h2>
          <div className="w-full overflow-x-scroll">
            <p>We may use your personal information for the following purposes:</p>
            <ul className="pl-8 mb-4">
              <li className="mt-1 list-disc">To operate, maintain, and improve Bbabystyle.</li>
              <li className="mt-1 list-disc">To respond to your inquiries and provide you with customer service.</li>
              <li className="mt-1 list-disc">
                To personalize your experience on the Babystyle and provide you with tailored content and advertising.
              </li>
              <li className="mt-1 list-disc">To comply with applicable laws and regulations, and to enforce our legal rights.</li>
            </ul>
          </div>
        </div>
        <div id="content-3">
          <h2 className="text-[24px] leading-[28px] mb-4">How We Share Your Information</h2>
          <div className="w-full overflow-x-scroll">
            <p>We may share your personal information with the following types of third parties:</p>
            <ul className="pl-8 mb-4">
              <li className="mt-1 list-disc">
                Service providers, such as hosting providers and email service providers, who help us operate Bbabystyle.
              </li>
              <li className="mt-1 list-disc">
                Advertising partners, such as Google AdSense, who help us display personalized advertising on the Site.
              </li>
              <li className="mt-1 list-disc">Legal and law enforcement authorities, as required by law or in response to a legal request.</li>
            </ul>
          </div>
        </div>
        <div id="content-4">
          <h2 className="text-[24px] leading-[28px] mb-4">Your Rights and Choices</h2>
          <div className="w-full overflow-x-scroll">
            <p>You have certain rights and choices regarding your personal information. For example, you may:</p>
            <ul className="pl-8 mb-4">
              <li className="mt-1 list-disc">Access and receive a copy of your personal information.</li>
              <li className="mt-1 list-disc">Update or correct your personal information.</li>
              <li className="mt-1 list-disc">Object to the processing of your personal information.</li>
              <li className="mt-1 list-disc">Request that we delete your personal information.</li>
            </ul>
          </div>
        </div>
        <p>
          To exercise these rights, or if you have any questions or concerns about our privacy practices, please contact us using the contact
          information provided below.
        </p>
        <h2 className="text-[24px] leading-[28px] mb-4">Third-Party Links and Services</h2>
        <p>
          Bbabystyle may contain links to third-party websites or services, which are not governed by this Privacy Policy. We are not responsible for
          the privacy practices or content of these third-party sites.
        </p>
        <h2 className="text-[24px] leading-[28px] mb-4">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by email or by posting a notice on
          Bbabystyle. Your continued use of Bbabystyle after the changes have been made will indicate your acceptance of the updated Privacy Policy.
        </p>
        <h2 className="text-[24px] leading-[28px] mb-4">Contact us</h2>
        <p className='text-sm mt-5'>
            To send a GDPR data subject request or CCPA consumer request, or if
            you have other inquiries about your privacy rights, follow the steps
            in the Your Rights - Data Subject and Consumer Information Requests
            section above.
          </p>
          <p className='mt-5 text-sm'>If you have other questions about this Privacy Policy, please contact us at:</p>
          <a href='mailto:noreply.bbabystyle@gmail.com' className='mt-5 text-sm text-[#006cbf]'>noreply.bbabystyle@gmail.com</a>
      </article>
    </>
  );
};

export default PrivacyPolicyPage;
