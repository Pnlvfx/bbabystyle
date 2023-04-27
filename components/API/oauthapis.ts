import { CredentialResponse } from '@react-oauth/google'
import { server } from '../../config/config'
import { catchError } from './config/apiErrors'
import { HEADERS } from './config/clientConfig'
import { getUserInfo } from './IPinfo'

const oauthapis = {
  register: async (email: string, username: string, password: string) => {
    try {
      const url = `${server}/register`
      const { country, countryCode, city, region, lat, lon } = await getUserInfo()
      const body = JSON.stringify({
        email,
        username,
        password,
        ipInfo: {
          country,
          countryCode,
          city,
          region,
          lat,
          lon,
        },
      })
      const res = await fetch(url, {
        method: 'post',
        body,
        headers: HEADERS,
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
  login: async (username: string, password: string) => {
    try {
      const url = `${server}/login`
      const body = JSON.stringify({ username, password })
      const res = await fetch(url, {
        method: 'post',
        body,
        headers: HEADERS,
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.msg)
      return data as {
        msg: string
      }
    } catch (err) {
      throw catchError(err)
    }
  },
  googleLogin: async (response: CredentialResponse) => {
    try {
      const url = `${server}/google_login`
      const { country, countryCode, city, region, lat, lon } = await getUserInfo()
      const body = JSON.stringify({
        tokenId: response.credential,
        ipInfo: {
          country,
          countryCode,
          city,
          region,
          lat,
          lon,
        },
      })
      const res = await fetch(url, {
        method: 'POST',
        headers: HEADERS,
        body,
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
  checkEmail: async (email: string): Promise<{ valid: boolean; data: string }> => {
    try {
      const url = `${server}/check_email`
      const body = JSON.stringify({ email })
      const res = await fetch(url, {
        method: 'post',
        body,
        headers: HEADERS,
        credentials: 'include',
      })
      const data = await res.json()
      return { valid: data.status, data: data.msg }
    } catch (err) {
      if (err instanceof Error) {
        return { valid: false, data: err.message }
      } else {
        return { valid: false, data: 'API error' }
      }
    }
  },
  checkUsername: async (username: string): Promise<{ valid: boolean; data: string }> => {
    try {
      const url = `${server}/check_username`
      const body = JSON.stringify({ username })
      const res = await fetch(url, {
        method: 'post',
        body,
        headers: HEADERS,
        credentials: 'include',
      })
      const data = await res.json()
      return { valid: data.status, data: data.msg }
    } catch (err) {
      if (err instanceof Error) {
        return { valid: false, data: err.message }
      } else {
        return { valid: false, data: 'API error' }
      }
    }
  },
  checkPass: async (password: string): Promise<{ valid: boolean; data: string }> => {
    try {
      const url = `${server}/check_password`
      const body = JSON.stringify({ password })
      const res = await fetch(url, {
        method: 'post',
        body,
        headers: HEADERS,
        credentials: 'include',
      })
      const data = await res.json()
      return { valid: data.status, data: data.msg }
    } catch (err) {
      if (err instanceof Error) {
        return { valid: false, data: err.message }
      } else {
        return { valid: false, data: 'API error' }
      }
    }
  },
  logout: async () => {
    try {
      const url = `${server}/logout`
      const body = JSON.stringify({})
      const res = await fetch(url, {
        method: 'POST',
        body,
        headers: HEADERS,
        credentials: 'include',
      })
      if (!res.ok) throw new Error('Something went wrong, please try again!')
      return true
    } catch (err) {
      throw catchError(err)
    }
  },
}

export default oauthapis
