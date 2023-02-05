import { clientUrl } from "../config/config";

export default function Head() {
  const title = "Bbabystyle - Free speech";
  const description =
    "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!";
  const twitter_card = "summary";
  const image = `${clientUrl}/imagePreview.png`;
  const width = "256";
  const height = "256";
  const type = "website";
  return (
    <>
      <title>{title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:ttl" content="600" key={"ogttl"} />
      <meta property="og:site_name" content="bbabystyle" key={"ogsite_name"} />
      <meta property="twitter:card" content={twitter_card} key="twcard" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="twitter:title" content={title} key="twitter_title" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:image" content={image} key="ogimage" />
      <meta property="twitter:image" content={image} key={"twitter_image"} />
      <meta property="og:image:width" content={width} />
      <meta property="og:image:height" content={height} />
      <meta property="og:url" content={clientUrl} key="ogurl" />
      <meta property="og:type" content={type} key="ogtype" />
      <link rel="canonical" href={clientUrl} key="canonical" />
      <meta name="twitter:creator" content="@Bbabystyle" />
      <meta name="referrer" content="origin-when-cross-origin" />
      <link rel="apple-touch-icon" sizes="57x57" href={`${clientUrl}/apple-touch-icon-57x57.png`} />
      <link rel="apple-touch-icon" sizes="60x60" href={`${clientUrl}/apple-icon-60x60.png`} />
      <link rel="apple-touch-icon" sizes="72x72" href={`${clientUrl}/apple-touch-icon-72x72.png`} />
      <link rel="apple-touch-icon" sizes="76x76" href={`${clientUrl}/apple-touch-icon-76x76.png`} />
      <link rel="apple-touch-icon" sizes="114x114" href={`${clientUrl}/apple-touch-icon-114x114.png`} />
      <link rel="apple-touch-icon" sizes="120x120" href={`${clientUrl}/apple-touch-icon-120x120.png`} />
      <link rel="apple-touch-icon" sizes="144x144" href={`${clientUrl}/apple-touch-icon-144x144.png`} />
      <link rel="apple-touch-icon" sizes="152x152" href={`${clientUrl}/apple-touch-icon-152x152.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${clientUrl}/apple-touch-icon-180x180.png`} />
      <link rel="icon" type="image/png" sizes="192x192" href={`${clientUrl}/android-chrome-192x192.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`${clientUrl}/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="96x96" href={`${clientUrl}/android-icon-96x96.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`${clientUrl}/favicon-16x16.png`} />
      <link rel="manifest" href={`${clientUrl}/manifest.json`} />
      <meta name="msapplication-TileColor" content="#030303" />
      <meta name="msapplication-TileImage" content={`${clientUrl}/mstile-150x150.png`} />
      <meta name="theme-color" content="#1a1a1b" />
      <meta name="application-name" content="bbabystyle" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="bbabystyle" />
      <meta name="mobile-web-app-capable" content="yes" />
    </>
  );
}
