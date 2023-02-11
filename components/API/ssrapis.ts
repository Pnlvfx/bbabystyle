import { server } from "../../config/config";
import { getHeaders } from "./config/serverConfig";

const ssrapis = {
  getSession: async () => {
    try {
      const url = `${server}/user`
      const res = await fetch(url, {
        method: "GET",
        headers: getHeaders()
      });
      const session = await res.json();
      if (!res.ok) return null;
      const token = res.headers.get('set-cookie');
      if (token) {
        //
      }
      return session as SessionProps;
    } catch (err) {
      return null;
    }
  },
  getPosts: async (limit: number, skip: number, input?: "author" | "community", value?: string) => {
    try {
      let url = `${server}/posts?limit=${limit}&skip=${skip}`
      if (input && value) {
        url = `${url}&${input}=${value}`;
      }
      const res = await fetch(url, {
        method: "GET",
        headers: getHeaders(),
      });
      const data = await res.json();
      if (!res.ok) return []
      //await new Promise((resolve) => setTimeout(resolve, 15000))
      return data as PostProps[]
    } catch (err) {
      return []
    }
  },
  getPost: async (id: string) => {
    try {
      const url = `${server}/posts/${id}`
      const headers = getHeaders()
      const res = await fetch(url, {
        method: 'get',
        headers,
      })
      const data = await res.json()
      if (!res.ok) return;
      return data as PostProps
    } catch (err) {
      return;
    }
  },
  search: async (text: string) => {
    try {
      const url = `${server}/search?phrase=${text}`
      const res = await fetch(url, {
        method: 'GET',
        headers: getHeaders()
      })
      const data = await res.json()
      if (!res.ok) return;
      return data as PostProps[]
    } catch (err) {
      return;
    }
  },
  getCommunities: async (limit: number) => {
    try {
      const url = `${server}/communities?limit=${limit}`;
      const res = await fetch(url, {
        method: "get",
        headers: getHeaders()
      });
      const data = await res.json();
      if (!res.ok) return;
      return data as CommunityProps[];
    } catch (err) {
      return;
    }
  },
  getCommunity: async (community: string) => {
    try {
      const url = `${server}/communities/${community}`
      const res = await fetch(url, {
        method: 'get',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return;
      return data as CommunityProps
    } catch (err) {
      return;
    }
  },
  getUserInfo: async () => {
    try {
      const res = await fetch(`${server}/user/about`, {
        method: 'get',
        headers: getHeaders()
      })
      const data = await res.json()
      if (!res.ok) return;
      return data as UserProps
    } catch (err) {
      return;
    }
  },
};

export default ssrapis;
