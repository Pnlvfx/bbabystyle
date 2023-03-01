import { server } from '../../config/config'
import { catchError } from './config/apiErrors'
import { HEADERS } from './config/clientConfig'

export interface Tiktok {
  id: string
  video: {
    url: string
    filename: string
    format: string
  }
  text: string
}

const tiktokapis = {
  downloadVideo: async (url: string) => {
    try {
      const api = `${server}/tiktok/download?url=${url}`
      const res = await fetch(api, {
        method: 'GET',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as Tiktok
    } catch (err) {
      throw catchError(err)
    }
  },
  createVideo: async (id: string, text: string) => {
    try {
      const api = `${server}/tiktok/${id}/create`
      const body = JSON.stringify({
        text,
      })
      const res = await fetch(api, {
        method: 'POST',
        headers: HEADERS,
        credentials: 'include',
        body,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as Tiktok
    } catch (err) {
      throw catchError(err)
    }
  },
}

export default tiktokapis
