import './post.css'
import Script from 'next/script'
import { use } from 'react'
import ssrapis from '../../components/API/ssrapis'
import ShowCommunity from '../../components/community/ShowCommunity'
import Header from '../../components/header/Header'
import HiddenLayout from '../../components/HiddenLayout'
import { deviceIsMobile } from '../../components/API/config/serverConfig'

const Layout = ({ children }: ChildrenProps) => {
  const isMobile = deviceIsMobile()
  const session = use(ssrapis.getSession())
  return (
    <>
      <div>
        <Header session={session} isMobile={isMobile} />
      </div>
      <div>
        <div>
          <div id="main_content" className="pt-12">
            <div className="flex min-h-[calc(100vh_-_48px)] flex-col">
              <div className="z-[3]">
                {/* {session?.device?.mobile && <CookieConsentMobile />} */}
                {children}
              </div>
            </div>
          </div>
          {/* {!session?.device?.mobile && <CookieConsent />} */}
        </div>
        <ShowCommunity />
      </div>
      <HiddenLayout isMobile={isMobile} session={session} />
      {process.env.NODE_ENV === 'production' && (
        <Script
          async
          strategy="beforeInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7203519143982992"
          crossOrigin="anonymous"
        />
      )}
    </>
  )
}

export default Layout
