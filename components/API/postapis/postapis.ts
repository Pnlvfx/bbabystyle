import { server } from "../../../config/config";
import { catchError } from "../config/apiErrors";
import { HEADERS } from "../config/clientConfig";
import { GetPostsOptions } from "./apipost";

const postapis = {
  getPosts: async (skip: number, options?: GetPostsOptions) => {
    try {
      const limit = options?.limit || 10
      let url = `${server}/posts?limit=${limit}&skip=${skip}`;
      if (options) {
        const usedOptions = Object.entries(options).filter(([, value]) => value !== undefined)
        usedOptions.forEach(([key, value]) => {
          if (key === 'limit') return
          url += `&${key}=${value}`
        })
      }
      const res = await fetch(url, {
        method: "GET",
        credentials: 'include'
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.msg);
      return data as PostProps[]
    } catch (err) {
      throw catchError(err);
    }
  },
  vote: async (postId: string, dir: number) => {
    try {
      const url = `${server}/posts/${postId}/vote`
      const body = JSON.stringify({ dir })
      const res = await fetch(url, {
        method: 'POST',
        headers: HEADERS,
        body,
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as {
        vote: number
      }
    } catch (err) {
      throw catchError(err)
    }
  },
  deletePost: async (postId: string) => {
    try {
      const url = `${server}/posts/${postId}`
      const res = await fetch(url, {
        method: 'delete',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as true
    } catch (err) {
      throw catchError(err)
    }
  },
};

export default postapis;
