import { server } from '../../../config/config'
import { catchError } from '../config/apiErrors'
import { HEADERS } from '../config/clientConfig'
import { NewTiktakResponse } from './types/tiktypes'

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
  createTiktak: async (permalink: string, title: string, text: string, synthetize: string) => {
    try {
      const url = `${server}/governance/tiktak/create?permalink=${permalink}`
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
      return data
    } catch (err) {
      throw catchError(err)
    }
  },
}

export default tiktakapis
