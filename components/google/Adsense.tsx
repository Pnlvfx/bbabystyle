import { useEffect, useRef } from 'react'

interface AdsenseProps {
  adTest?: 'on'
}

const Adsense = ({ adTest }: AdsenseProps) => {
  const shouldRequest = useRef(true)
  useEffect(() => {
    if (!shouldRequest.current) return
    shouldRequest.current = false
    if (typeof window === undefined) return
    ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-7203519143982992"
      data-ad-slot="6614182647"
      data-ad-format="auto"
      data-full-width-responsive="true"
      data-ad-test={adTest}
    />
  )
}

export default Adsense
