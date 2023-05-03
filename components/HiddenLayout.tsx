'use client'

import { clientUrl } from '../config/config'
import oauthapis from './API/oauthapis'
import AuthModal from './auth/modal/AuthModal'
import { useModals } from './auth/modal/ModalsProvider'
import SearchDropdown from './header/search/SearchDropdown'
import UserMenu from './header/usermenu/UserMenu'
import { useMessage } from './utils/message/TimeMsgContext'
import { catchErrorWithMessage } from './API/config/apiErrors'
import { useGoogleOneTapLogin } from '@react-oauth/google'
import UserAnalytics from './utils/UserAnalytics'

const HiddenLayout = ({ isMobile, session }: WithSession & { isMobile: boolean }) => {
  const modals = useModals()

  return (
    <>
      {!session?.user && modals.showAuth !== 'hidden' && <AuthModal />}
      {!isMobile && <SearchDropdown />}
      {modals.showUserMenu && <UserMenu session={session} />}
      {!session?.user && !clientUrl.startsWith('http://192') && <UseOneTap />}
      <UserAnalytics />
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
