'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import twitterapis from '../../API/twitterapis/twitterapis'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { TwitterLogo } from '../../utils/svg/SVG'

interface SettingsButton {
  userInfo: UserProps
}

const TwitterButton = ({ userInfo }: SettingsButton) => {
  const twitterAccount = userInfo.hasExternalAccount ? userInfo?.externalAccounts?.find((provider) => provider.provider === 'twitter') : undefined
  const router = useRef(useRouter())
  const message = useRef(useMessage())
  const query = useSearchParams()
  const pathname = useRef(usePathname())

  const getToken = async () => {
    try {
      const url = await twitterapis.generateOAuthUrl()
      window.location.href = url
    } catch (err) {
      catchErrorWithMessage(err, message.current)
    }
  }

  const shouldRequest = useRef(true)

  useEffect(() => {
    const handle = async () => {
      try {
        const state = query.get('state')
        const code = query.get('code')
        if (!code || !state) return
        if (!shouldRequest.current) return
        shouldRequest.current = false
        await twitterapis.accessToken(state, code)
        router.current.replace(pathname.current)
        message.current.setMessage({ value: 'Account connected!', status: 'success' })
      } catch (err) {
        catchErrorWithMessage(err, message.current)
      }
    }
    handle()
  }, [query])

  const logout = async () => {
    try {
      await twitterapis.logout()
      router.current.refresh()
      message.current.setMessage({ value: 'Twitter account disconnected!', status: 'success' })
    } catch (err) {
      catchErrorWithMessage(err, message.current)
    }
  }

  return (
    <div className="settings-button-container">
      <div className="settings-button-left">
        <div className="settings-button-left-in">
          <p className="settings-button-left-in-p">{twitterAccount ? 'Connected to Twitter' : 'Connect to Twitter'}</p>
        </div>
        <p className="settings-button-left-in-p-small">
          {twitterAccount
            ? 'You can now choose to share your posts to Twitter from the new post composer.'
            : 'Connect a Twitter account to enable the choice to tweet your new posts and display a link on your profile. We will never post to Twitter without your permission.'}
        </p>
      </div>
      <div className="settings-button-right">
        <div className="flex items-center flex-grow justify-end">
          {twitterAccount ? (
            <div className="text-[12px] leading-4 text-end">
              <div>
                <span className="font-medium mr-[5px] leading-4 text-bbaby-text_darker">@{twitterAccount.username}</span>
              </div>
              <button
                role={'button'}
                tabIndex={0}
                onClick={logout}
                className="text-[#1da1f2] relative min-h-[32px] min-w-[32px] items-center rounded-full flex justify-center text-center w-auto"
              >
                (disconnect)
              </button>
            </div>
          ) : (
            <button
              className="relative bg-[#1da1f2] text-bbaby-dark items-center flex justify-center max-w-[100%] min-w-[195px] w-auto whitespace-pre-wrap text-[14px] font-bold leading-[17px] min-h-[32px] py-1 px-4 rounded-full text-center"
              role={'button'}
              tabIndex={0}
              onClick={getToken}
            >
              <TwitterLogo className="relative w-5 h-5 inline-block flex-none" />
              <span className="ml-2">Connect to Twitter</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TwitterButton
