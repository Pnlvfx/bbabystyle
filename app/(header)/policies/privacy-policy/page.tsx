import MainButtonNav from "../../../../components/policies/MainButtonNav";
import { website } from "../../../../config/config";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white text-reddit_dark text-[14px] leading-[1.5]">
      <main className="md:grid md:grid-cols-[15rem_1fr] md:px-8 md:gap-x-8 max-w-[1134px] mx-auto p-4 pt-8 scroll-smooth">
        <MainButtonNav title={`${website.shortName} Privacy Policy`} />
        <div></div>
        <article className="md:col-start-2 md:row-start-2 overflow-x-hidden">
          <h1 className="text-[32px] leading-[36px] mb-4">{website.name} Privacy Policy</h1>
          <div className="mb-4">
            Effective February 28, 2023. Last Revised February 28, 2023.
          </div>
          <div className="space-y-4">
            <p>
              At Bbabystyle, we believe that privacy is a right. We want to
              empower our users to be the masters of their identity. In this
              privacy policy, we want to help you understand how and why
              Bbabystyle, Inc. (&quot;Bbabystyle,&quot; &quot;we&quot; or &quot;us&quot;) collects, uses, and
              shares information about you when you use our sites, widgets, and
              other online products and services (collectively, the &quot;Services&quot;)
              or when you otherwise interact with us or receive a communication
              from us.
            </p>
            <p>
              We collect minimal information that can be used to identify you by
              default. If you want to just browse, you don&apos;t need an account. If
              you want to create an account to participate in a subreddit, we
              don&apos;t require you to give us your real name. We don&apos;t
              automatically track your precise location. You can share as much
              or as little about yourself as you want. You can create multiple
              accounts, update information as you see fit, or ask us to delete
              your information.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
