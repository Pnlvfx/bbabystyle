import { useEffect } from "react";

const Adsense = () => {
  useEffect(() => {
    (window as any).adsbygoogle || ([] as any[]).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7203519143982992"
      data-ad-slot="6614182647"
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-adtest="on"
    />
  );
};

export default Adsense;
