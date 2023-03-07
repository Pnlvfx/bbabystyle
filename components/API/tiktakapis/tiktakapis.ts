import { server } from '../../../config/config'
import { catchError } from '../config/apiErrors'
import { HEADERS } from '../config/clientConfig'
import { NewTiktakResponse, TiktakProps } from './types/tiktypes'

const tiktakapis = {
  newTiktak: async (title: string, text: string, language: string) => {
    try {
      const url = `${server}/governance/tiktak/new-tiktak?lang=${language}`
      const body = JSON.stringify({ title, text })
      const res = await fetch(url, {
        method: 'post',
        headers: HEADERS,
        body,
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as NewTiktakResponse
    } catch (err) {
      throw catchError(err)
    }
  },
  createBgVideo: async (permalink: string, title: string, text: string, synthetize: string) => {
    try {
      const url = `${server}${permalink}/background-video`
      const body = JSON.stringify({
        title,
        text,
        synthetize,
      })
      const res = await fetch(url, {
        method: 'POST',
        headers: HEADERS,
        body,
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as TiktakProps
    } catch (err) {
      throw catchError(err)
    }
  },
  create: async (permalink: string, color: string) => {
    try {
      const url = `${server}${permalink}/create`
      const body = JSON.stringify({
        color,
      })
      const res = await fetch(url, {
        method: 'POST',
        headers: HEADERS,
        body,
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data
    } catch (err) {
      throw catchError(err)
    }
  },
  delete: async (
    permalink: string,
    options: {
      video?: string
      background_video?: string
    }
  ) => {
    try {
      const url = `${server}${permalink}/delete`
      const body = JSON.stringify({
        video: options.video,
        background_video: options.background_video,
      })
      const res = await fetch(url, {
        method: 'POST',
        headers: HEADERS,
        body,
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as boolean
    } catch (err) {
      throw catchError(err)
    }
  },
  send: async (permalink: string) => {
    try {
      const url = `${server}${permalink}/send`
      const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as {
        msg: string
      }
    } catch (err) {
      throw catchError(err)
    }
  },
}

export default tiktakapis
