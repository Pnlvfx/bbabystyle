import { server } from "../../config/config"
import { catchError } from "./config/apiErrors"


const searchapis = {
  search: async (text: string) => {
    try {
      const url = `${server}/search?phrase=${text}`
      const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as PostProps[]
    } catch (err) {
      throw catchError(err)
    }
  },
  searchTrend: async () => {
    try {
      const url = `${server}/search/today-trend`
      const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as PostProps[]
    } catch (err) {
      throw catchError(err)
    }
  },
}

export default searchapis