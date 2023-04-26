'use client'

import { clientUrl } from '../config/config'
import GoogleAnalytics from './google/GoogleAnalytics'
import oauthapis from './API/oauthapis'
import AuthModal from './auth/modal/AuthModal'
import { useModals } from './auth/modal/ModalsProvider'
import useGoogleOneTapLogin from './auth/providers/google/hooks/useGoogleOneTapLogin'
import SearchDropdown from './header/search/SearchDropdown'
import UserMenu from './header/usermenu/UserMenu'
import { useMessage } from './utils/message/TimeMsgContext'
import { catchErrorWithMessage } from './API/config/apiErrors'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import Analytics from './utils/Analytics'

const HiddenLayout = ({ token }: { token?: RequestCookie }) => {
  const modals = useModals()

  return (
    <>
      {!token && modals.showAuth !== 'hidden' && <AuthModal />}
      <SearchDropdown />
      {modals.showUserMenu && <UserMenu />}
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
      {!token && !clientUrl.startsWith('http://192') && <UseOneTap />}
      <Analytics />
    </>
  )
}

export default HiddenLayout

const UseOneTap = () => {
  const message = useMessage()
  useGoogleOneTapLogin({
    onSuccess: async (response) => {
      try {
        await oauthapis.googleLogin(response)
        window.location.href = '/'
      } catch (err) {
        catchErrorWithMessage(err, message)
      }
    },
    cancel_on_tap_outside: false,
  })
  return null
}
