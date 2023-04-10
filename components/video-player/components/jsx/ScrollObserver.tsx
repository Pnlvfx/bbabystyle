import React, { ReactNode, useEffect } from 'react'
import { useProvider } from './VideoPlayerContext'

interface ScrollProps {
  children: ReactNode
  enable?: boolean
}

const ScrollObserver = ({ children, enable }: ScrollProps) => {
  const { player } = useProvider()

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries
      if (entry.isIntersecting) {
        player.current?.play()
      } else {
        player.current?.pause()
      }
    }
    //Start video on scroll;
    if (!enable) return
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }
    setTimeout(() => {
      const observer = new IntersectionObserver(callback, options)
      if (player.current) observer.observe(player.current)
      return () => {
        if (player.current) observer.unobserve(player.current)
      }
    }, 500)
  }, [player, enable])

  return <>{children}</>
}

export default ScrollObserver
