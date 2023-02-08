import { server } from "../../config/config";
import { catchError } from "./config/apiErrors";
import { HEADERS } from "./config/clientConfig";

const twitterapis = {
  getToken: async () => {
    try {
      const url = `${server}/twitter/oauth/request_token`;
      const res = await fetch(url, {
        method: "POST",
        headers: HEADERS,
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.msg);
      return data.oauth_token as string;
    } catch (err) {
      throw catchError(err);
    }
  },
  getAccessToken: async (oauth_token: string, oauth_verifier: string) => {
    try {
      const url = `${server}/twitter/oauth/access_token`;
      const body = JSON.stringify({ oauth_token, oauth_verifier });
      const res = await fetch(url, {
        method: "POST",
        headers: HEADERS,
        credentials: "include",
        body,
      });
      if (!res.ok) throw new Error("Twitter error: Unauthorized!");
      return true;
    } catch (err) {
      throw catchError(err);
    }
  },
  getUserInfo: async () => {
    try {
      const url = `${server}/twitter/user/info`;
      const res = await fetch(url, {
        method: "GET",
        credentials: "include",
      });
      if (!res.ok) throw new Error("Twitter error: Unauthorized!");
      return true;
    } catch (err) {
      throw catchError(err);
    }
  },
};

export default twitterapis;
