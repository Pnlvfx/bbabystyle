import { useEffect, useRef } from 'react'
import { server } from '../../config/config'

const Analytics = () => {
  const shouldRequest = useRef(true)
  useEffect(() => {
    const analytics = async () => {
      try {
        if (!shouldRequest.current) return
        shouldRequest.current = false
        if (process.env.NEXT_PUBLIC_NODE_ENV === 'development') return
        const url = `${server}/analytics/pageview`
        await fetch(url, {
          method: 'GET',
          credentials: 'include',
        })
      } catch (err) {}
    }
    analytics()
  }, [])
  return null
}

export default Analytics
