import { server } from '../../../config/config'
import { catchError } from '../config/apiErrors'
import { HEADERS } from '../config/clientConfig'

const twitterapis = {
  logout: async () => {
    try {
      const url = `${server}/twitter/logout`
      const res = await fetch(url, {
        method: 'POST',
        headers: HEADERS,
        credentials: 'include',
        body: JSON.stringify({}),
      })
      if (!res.ok) throw new Error('Something went wrong')
      return true
    } catch (err) {
      throw catchError(err)
    }
  },
  generateOAuthUrl: async () => {
    try {
      const url = `${server}/twitter/oauth2/authorize`
      const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
      if (!res.ok) throw new Error('Something went wrong')
      const data = await res.json()
      return data as string
    } catch (err) {
      throw catchError(err)
    }
  },
  accessToken: async (state: string, code: string) => {
    try {
      const url = `${server}/twitter/oauth2/access_token?state=${state}&code=${code}`
      const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as string
    } catch (err) {
      throw catchError(err)
    }
  },
}

export default twitterapis
