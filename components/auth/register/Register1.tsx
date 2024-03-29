import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import oauthapis from '../../API/oauthapis'
import AuthInput from '../auth-input/AuthInput'
import { useModals } from '../modal/ModalsProvider'
import Google from '../Google'

type Register1 = {
  setFase2: Dispatch<SetStateAction<boolean>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
}

const Register1 = ({ setFase2, email, setEmail }: Register1) => {
  const [emailIsValid, setEmailIsValid] = useState<boolean | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)
  const router = useRouter()
  const modals = useModals()
  const pathname = usePathname()

  const onChangeEmail = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setEmail(e.target.value)
      const data = await oauthapis.checkEmail(e.target.value)
      if (data.valid) {
        setEmailError(null)
      } else {
        setEmailError(data.data)
      }
      setEmailIsValid(data.valid)
    } catch (err) {}
  }
  return (
    <div className="box-border flex min-h-[100vh] w-[100vw] flex-col items-center justify-center">
      <div className="box-border flex">
        <div className="box-border w-full max-w-[280px] self-center p-0">
          <div className="mx-auto box-border block w-[280px] max-w-[280px]">
            <h1 className="mt-6 text-xl">Sign Up</h1>
          </div>
          <p className=" mx-auto mt-2 text-xs">
            By continuing, you agree are setting up a Bbabystyle account and agree to our{' '}
            <Link target={'_blank'} href={'/policies/user-agreement'} className="text-bbaby-blue">
              User Agreement{' '}
            </Link>
            and{' '}
            <Link target={'_blank'} href={'/policies/privacy-policy'} className="text-bbaby-blue">
              Privacy Policy
            </Link>
            .
          </p>
          <form method="post" className="m-auto box-border block w-[280px] max-w-[280px]">
            <div className="mb-[18px] mt-8 box-border">
              <div className="box-border">
                <div className="relative my-2 box-border block h-[44px] w-[280px] min-w-[280px] max-w-[400px]">
                  <Google />
                </div>
              </div>
              <div className="mb-6 mt-[20px] flex items-center justify-between">
                <span className="box-border w-[40%]" />
                <span className="box-border w-[40%] text-sm font-bold text-bbaby-text_darker">OR</span>
                <span className="box-border w-[40%]" />
              </div>
            </div>
            <AuthInput
              id="regEmail"
              type="text"
              name="email"
              value={email}
              onChange={onChangeEmail}
              isValid={emailIsValid}
              error={emailError}
              autoComplete={'off'}
            />
            <fieldset className="relative mt-4 max-w-[280px]">
              <button
                className={`mt-2 h-[40px] w-full rounded-full bg-bbaby-blue px-4 text-[14px] font-bold leading-4 ${
                  !emailIsValid && 'pointer-events-none cursor-not-allowed opacity-20'
                }`}
                type="submit"
                disabled={!emailIsValid ? true : false}
                onClick={(e) => {
                  e.preventDefault()
                  setFase2(true)
                }}
              >
                Continue
              </button>
            </fieldset>
            <div className="mt-4 box-border block text-[12px] leading-4">
              Already a Bbaby user?{' '}
              <Link
                href={'/account/login'}
                className="font-bold leading-6 text-[#0079d3] underline"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  if (pathname?.match('register') || pathname?.match('login')) {
                    router.push('/account/login')
                  } else {
                    modals.setShowAuth('login')
                  }
                }}
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register1
