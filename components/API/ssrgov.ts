import { server } from "../../config/config";
import { getHeaders } from "./config/serverConfig";

const ssrgov = {
  getTweetHome: async (skip: number, limit: number, sort: 'recently' | 'best') => {
    try {
      const url = `${server}/twitter/home?limit=${limit}&skip=${skip}&sort=${sort}`;
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
  getMyListTweets: async (listId: string, owner_screen_name: string, skip: number, limit: number) => {
    try {
      const url = `${server}/twitter/selected-tweets?slug=${listId}&owner_screen_name=${owner_screen_name}&skip=${skip}&limit=${limit}`
      const res = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) {
        if (res.status === 401) return;
        return;
      }
      return data as TweetProps[]
    } catch (err) {
      return;
    }
  },
};

export default ssrgov;