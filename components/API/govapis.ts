import { server } from "../../config/config"
import { catchError } from "./config/apiErrors"
import { HEADERS } from "./config/clientConfig"

const govapis = {
  translate: async (text: string, language: string) => {
    try {
      const url = `${server}/governance/translate?lang=${language}`
      const body = JSON.stringify({ text })
      const res = await fetch(url, {
        method: 'post',
        headers: HEADERS,
        body,
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as string
    } catch (err) {
      throw catchError(err)
    }
  },
  news: {
    getArticles: async (limit: string | number, skip: string | number) => {
      try {
        const url = `${server}/governance/BBCnews?limit=${limit}&skip=${skip}`
        const res = await fetch(url, {
          method: 'get',
          credentials: 'include',
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data?.msg)
        return data as ExternalNews[]
      } catch (err) {
        throw catchError(err)
      }
    },
  }
}

export default govapis