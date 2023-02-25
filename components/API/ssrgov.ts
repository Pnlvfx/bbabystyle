import { server } from "../../config/config";
import { catchError } from "./config/apiErrors";
import { getHeaders } from "./config/serverConfig";

const ssrgov = {
  getTweetHome: async () => {
    try {
      const url = `${server}/twitter/home`;
      const res = await fetch(url, {
        method: "GET",
        headers: getHeaders(),
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) return 'Unauthenticated'
        return data.msg as string;
      }
      return data as TweetProps[];
    } catch (err) {
      return catchError(err);
    }
  },
  getMyListTweets: async (listId: string, owner_screen_name: string) => {
    try {
      const url = `${server}/twitter/selected-tweets?slug=${listId}&owner_screen_name=${owner_screen_name}`
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
  getUserTweets: async (screen_name: string) => {
    try {
      const url = `${server}/twitter/user/${screen_name}`;
      const res = await fetch(url, {
        method: "GET",
        headers: getHeaders()
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) return 'Unauthenticated'
        return data.msg as string;
      }
      return data as TweetProps[];
    } catch (err) {
      return catchError(err);
    }
  },
  getArticles: async (limit: string | number, skip: string | number) => {
    try {
      const url = `${server}/governance/BBCnews?limit=${limit}&skip=${skip}`
      const res = await fetch(url, {
        method: 'get',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return;
      return data as ExternalNews[]
    } catch (err) {
      return;
    }
  },
  getArticle: async (permalink: string) => {
    try {
      const serverUrl = `${server}${permalink}`
      const res = await fetch(serverUrl, {
        method: 'GET',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return;
      return data as ExternalNews
    } catch (err) {
      return;
    }
  },
};

export default ssrgov;