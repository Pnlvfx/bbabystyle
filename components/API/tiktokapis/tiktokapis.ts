import { server } from '../../../config/config'
import { catchError } from '../config/apiErrors'
import { HEADERS } from '../config/clientConfig'
import { TiktokProps } from './types/TTtypes'

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
      return data as TiktokProps
    } catch (err) {
      throw catchError(err)
    }
  },
  save: async (
    id: string,
    options: {
      text?: string
      translated?: string
      textArray?: TiktokProps['textArray']
    }
  ) => {
    try {
      const api = `${server}/tiktok/${id}`
      const body = JSON.stringify({
        text: options.text,
        translated: options.translated,
        textArray: options.textArray,
      })
      const res = await fetch(api, {
        method: 'POST',
        headers: HEADERS,
        credentials: 'include',
        body,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as TiktokProps
    } catch (err) {
      throw catchError(err)
    }
  },
  createVideo: async (id: string) => {
    try {
      const api = `${server}/tiktok/${id}/create`
      const body = JSON.stringify({})
      const res = await fetch(api, {
        method: 'POST',
        headers: HEADERS,
        credentials: 'include',
        body,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as TiktokProps
    } catch (err) {
      throw catchError(err)
    }
  },
}

export default tiktokapis
