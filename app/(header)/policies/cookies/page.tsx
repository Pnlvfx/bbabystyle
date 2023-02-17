import PrivacyTable from "../../../../components/policies/PrivacyTable";

const CookiePage = () => {
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
      </article>
    </>
  );
};

export default CookiePage;
