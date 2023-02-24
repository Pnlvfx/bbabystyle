import { useEffect } from "react";
import gtag from "./gtag";

const GoogleAnalytics = () => {
  useEffect(() => {
    const onRouteChange = (e: any) => gtag.pageview(e.currentTarget?.location.pathname)
    window.addEventListener('routeChange', onRouteChange)
    return () => window.removeEventListener('routeChange', onRouteChange);
  }, []);
  return null;
};

export default GoogleAnalytics;
