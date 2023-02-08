import { server } from "../../config/config";
import { catchError } from "./config/apiErrors";
import { HEADERS } from "./config/clientConfig";

const userapis = {
  saveEUcookie: async (status: boolean) => {
    try {
      const url = `${server}/eu_cookie`
      const body = JSON.stringify({ status })
      const res = await fetch(url, {
        method: 'POST',
        headers: HEADERS,
        credentials: 'include',
        body,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as true
    } catch (err) {
      throw catchError(err)
    }
  },
  getEUcookie: async () => {
    try {
      const url = `${server}/eu_cookie`
      const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as true
    } catch (err) {
      throw catchError(err)
    }
  },
  getUserInfo: async () => {
    try {
      const res = await fetch(`${server}/user/about`, {
        method: 'get',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as UserProps
    } catch (err) {
      throw catchError(err)
    }
  },
};

export default userapis;
