'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import userapis from '../../../API/userapis'
import { CloseIcon } from '../../svg/SVG'
import styles from './cookie-consent-mobile.module.css'
import useCookieConsent from './useCookieConsent'
const CookieConsentMobile = () => {
  const pathname = usePathname()
  const notShow = pathname.match('/policies') ? true : false
  const { euCookie, setEuCookie } = useCookieConsent(notShow)

  const saveEUcookie = async () => {
    try {
      await userapis.saveEUcookie(true)
      setEuCookie(true)
    } catch (err) {}
  }

  if (euCookie || notShow) return null
  return (
    <div className="p-2">
      <div className={styles.cookieContainer}>
        <div onClick={saveEUcookie} className="absolute right-0 top-0">
          <CloseIcon className="h-4 w-4 fill-bbaby-text_darker align-middle" />
        </div>
        <p className="text-[14px] leading-4">
          Cookies help us deliver our Services. We only use essential cookies.{' '}
          <Link className="text-[#24a0ed]" href={'/policies/cookies'} target={'_blank'}>
            Learn More
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CookieConsentMobile
