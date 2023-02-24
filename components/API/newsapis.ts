import { server } from "../../config/config";
import { catchError } from "./config/apiErrors";
import { HEADERS } from "./config/clientConfig";

const newsapis = {
  getArticles: async (skip: number, limit: number) => {
    try {
      const url = `${server}/news?skip=${skip}&limit=${limit}`;
      const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as NewsProps[]
    } catch (err) {
      throw catchError(err)
    }
  },
  editNews: async (permalink: string, title: string, description: string) => {
    try {
      const url = `${server}${permalink}/edit`
      const body = JSON.stringify({
        title,
        description,
      })
      const res = await fetch(url, {
        method: 'POST',
        headers: HEADERS,
        credentials: 'include',
        body,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as true
    } catch (err) {
      throw catchError(err)
    }
  },
}

export default newsapis
