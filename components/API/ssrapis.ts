import { server } from '../../config/config'
import { getHeaders } from './config/serverConfig'
import { GetPostsOptions } from './postapis/types/apipost'

const ssrapis = {
  getSession: async () => {
    try {
      const url = `${server}/user`
      const res = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
        cache: 'no-cache',
      })
      const session = await res.json()
      if (!res.ok) return null
      const token = res.headers.get('set-cookie')
      if (token) {
        console.log(token)
        return null
      }
      return session as SessionProps
    } catch (err) {
      return null
    }
  },
  getPosts: async (skip: number, options?: GetPostsOptions) => {
    try {
      const limit = options?.limit || 10
      let url = `${server}/posts`
      if (options?.sort) {
        url += `/${options.sort}`
      }
      url += `?limit=${limit}&skip=${skip}`
      if (options) {
        const usedOptions = Object.entries(options).filter(([, value]) => value !== undefined)
        usedOptions.forEach(([key, value]) => {
          if (key === 'limit') return
          if (key === 'sort') return
          url += `&${key}=${value}`
        })
      }
      const res = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
        cache: 'no-cache',
      })
      const data = await res.json()
      if (!res.ok) return []
      //await new Promise((resolve) => setTimeout(resolve, 15000))
      return data as PostProps[]
    } catch (err) {
      return []
    }
  },
  getPost: async (id: string) => {
    try {
      const url = `${server}/posts/${id}`
      const headers = getHeaders()
      const res = await fetch(url, {
        method: 'get',
        headers,
        cache: 'no-cache',
      })
      const data = await res.json()
      if (!res.ok) return
      return data as PostProps
    } catch (err) {
      return
    }
  },
  search: async (text: string) => {
    try {
      const url = `${server}/search?phrase=${text}`
      const res = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return
      return data as PostProps[]
    } catch (err) {
      return
    }
  },
  getCommunities: async (limit: number) => {
    try {
      const url = `${server}/communities?limit=${limit}`
      const res = await fetch(url, {
        method: 'get',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return
      return data as CommunityProps[]
    } catch (err) {
      return
    }
  },
  getCommunity: async (community: string) => {
    try {
      const url = `${server}/communities/${community}`
      const res = await fetch(url, {
        method: 'get',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return
      return data as CommunityProps
    } catch (err) {
      return
    }
  },
  getUserInfo: async () => {
    try {
      const res = await fetch(`${server}/user/about`, {
        method: 'get',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return
      return data as UserProps
    } catch (err) {
      return
    }
  },
  getUserFromUsername: async (username: string) => {
    try {
      const res = await fetch(`${server}/user/${username}`, {
        method: 'get',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return
      return data as UserProps
    } catch (err) {
      return
    }
  },
  getSitemap: async (type: 'post' | 'community' | 'news') => {
    try {
      const url = `${server}/sitemaps?type=${type}`
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const data = await res.json()
      if (!res.ok) return
      return data as (PostProps | CommunityProps | NewsProps)[]
    } catch (err) {
      return
    }
  },
  getArticles: async (skip: number, limit: number) => {
    try {
      const url = `${server}/news?skip=${skip}&limit=${limit}`
      const res = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return
      return data as NewsProps[]
    } catch (err) {
      return
    }
  },
  getArticle: async (permalink: string) => {
    try {
      const url = `${server}/news/${permalink}`
      const res = await fetch(url, {
        method: 'GET',
        headers: getHeaders(),
      })
      const data = await res.json()
      if (!res.ok) return
      return data as NewsProps
    } catch (err) {
      return
    }
  },
}

export default ssrapis
