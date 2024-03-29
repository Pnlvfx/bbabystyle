import { server } from '../../config/config'
import { getHeaders } from './config/serverConfig'
import { TiktokProps } from './tiktokapis/types/TTtypes'
import { MediaObjectV2, TweetV2, UserV2 } from 'twitter-api-v2'
import { catchServer } from './config/apiErrors'

interface TweetResponse {
  data: TweetV2[]
  users: UserV2[]
  media: MediaObjectV2[]
}

const ssrgov = {
  getTweetHome: async () => {
    try {
      const url = `${server}/twitter/home`
      const res = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) {
        if (res.status === 401) {
          return 'Unauthorized'
        } else return new Error(data?.msg)
      }
      return data as TweetResponse
    } catch (err) {
      return catchServer(err)
    }
  },
  getMyListTweets: async (lang: 'it' | 'en') => {
    try {
      const url = `${server}/twitter/selected-tweets?lang=${lang}`
      const res = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) {
        if (res.status === 401) {
          return 'Unauthorized'
        } else return new Error(data?.msg)
      }
      return data as TweetResponse
    } catch (err) {
      return catchServer(err)
    }
  },
  getUserTweets: async (id: string) => {
    try {
      const url = `${server}/twitter/user/${id}`
      const res = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) {
        if (res.status === 401) {
          return 'Unauthorized'
        } else return new Error(data?.msg)
      }
      return data as TweetResponse
    } catch (err) {
      return catchServer(err)
    }
  },
  getArticles: async (limit: string | number, skip: string | number) => {
    try {
      const url = `${server}/governance/BBCnews?limit=${limit}&skip=${skip}`
      const res = await fetch(url, {
        method: 'get',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return
      return data as ExternalNews[]
    } catch (err) {
      return
    }
  },
  getArticle: async (permalink: string) => {
    try {
      const serverUrl = `${server}${permalink}`
      const res = await fetch(serverUrl, {
        method: 'GET',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return
      return data as ExternalNews
    } catch (err) {
      return
    }
  },
  getTiktok: async (id: string) => {
    try {
      const api = `${server}/tiktok/${id}`
      const res = await fetch(api, {
        method: 'GET',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return
      return data as TiktokProps
    } catch (err) {
      return
    }
  },
}

export default ssrgov
