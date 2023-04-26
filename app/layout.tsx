import './globals.css'
import { ModalsContextProvider } from '../components/auth/modal/ModalsProvider'
import { GoogleOAuthProvider } from '../components/auth/providers/google/GoogleOAuthProvider'
import { TimeMsgContextProvider } from '../components/utils/message/TimeMsgContext'
import { clientUrl } from '../config/config'
import { cookies } from 'next/headers'
import { deviceIsMobile } from '../components/API/config/serverConfig'

const RootLayout = ({ children }: ChildrenProps) => {
  const isMobile = deviceIsMobile()

  const token = cookies().get('token')

  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className="bg-bbaby-dark text-bbaby-text">
        <div id="container">
          <div tabIndex={-1} />
          <div tabIndex={-1}>
            {token ? (
              <ModalsContextProvider>
                <TimeMsgContextProvider isMobile={isMobile}>{children}</TimeMsgContextProvider>
              </ModalsContextProvider>
            ) : (
              <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
                <ModalsContextProvider>
                  <TimeMsgContextProvider isMobile={isMobile}>{children}</TimeMsgContextProvider>
                </ModalsContextProvider>
              </GoogleOAuthProvider>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}

export default RootLayout

export const metadata = {
  title: {
    default: 'Bbabystyle - Free speech',
    template: '%s',
  },
  description:
    "With Bbabystyle, you can build your own community, share your thoughts and ideas, and participate in lively debates. Whether you're looking to make new friends, learn from others, or simply express yourself, Bbabystyle provides the perfect platform for you to do so. Join the conversation today and see what the community has to offer!",
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  referrer: 'origin-when-cross-origin',
  manifest: process.env.NODE_ENV === 'production' ? `${clientUrl}/manifest.json` : undefined,
  themeColor: '#1a1a1b',
  applicationName: 'bbabystyle',

  appleWebApp: {
    title: 'Bbabystyle',
    statusBarStyle: 'default',
    capable: true,
  },
  icons: {
    icon: `${clientUrl}/favicon-32x32.png`,
    shortcut: `${clientUrl}/favicon-16x16.png`,
    apple: `${clientUrl}/apple-touch-icon-180x180.png`,
  },
  twitter: {
    card: 'summary',
    site: '@bbabystyle',
  },
  openGraph: {
    siteName: 'bbabystyle',
  },
}
