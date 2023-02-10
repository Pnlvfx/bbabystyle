import { server } from "../../config/config";
import { getHeaders } from "./config/serverConfig";

const ssrgov = {
  getTweetHome: async () => {
    try {
      const url = `${server}/twitter/home`;
      const res = await fetch(url, {
        method: "GET",
        headers: getHeaders()
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) return;
        return;
      }
      return data as TweetProps[];
    } catch (err) {
      return;
    }
  },
};

export default ssrgov;