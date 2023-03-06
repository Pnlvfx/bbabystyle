import { server } from '../../../config/config'
import { catchError } from '../config/apiErrors'
import { QuoraProps } from './types/qtypes'

const quoraapis = {
  getQuoras: async (skip: number, limit: number) => {
    try {
      const url = `${server}/governance/quora?skip=${skip}&limit=${limit}`
      const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.msg)
      return data as QuoraProps[]
    } catch (err) {
      throw catchError(err)
    }
  },
}

export default quoraapis
