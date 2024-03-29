'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, MouseEvent, useState } from 'react'
import oauthapis from '../API/oauthapis'
import { Spinner } from '../utils/Spinner'
import AuthInput from './auth-input/AuthInput'
import { useModals } from './modal/ModalsProvider'
import Google from './Google'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [usernameIsvalid, setUsernameIsValid] = useState<boolean | null>(null)
  const [password, setPassword] = useState('')
  const [passwordIsValid, setPasswordIsValid] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)
  const modals = useModals()
  const router = useRouter()
  const pathname = usePathname()
  const [usernameError, setUsernameError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const doLogin = async (e: MouseEvent) => {
    try {
      e.preventDefault()
      setLoading(true)
      await oauthapis.login(username, password)
      if (top?.window.location.href) {
        top.window.location.href = '/'
      } else {
        window.location.href = '/'
      }
      //authModal.setShow('hidden');
      setLoading(false)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else if (typeof err === 'string') {
        setError(err)
      } else {
        setError('Incorrect username or password')
      }
      setUsernameIsValid(false)
      setPasswordIsValid(false)
      setLoading(false)
    }
  }

  const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (e.target.value.length >= 8) {
      setPasswordIsValid(true)
      setPasswordError(null)
    } else {
      setPasswordIsValid(false)
      setPasswordError('Password must be at least 8 characters long')
    }
  }

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
    if (e.target.value.length > 3) {
      setUsernameIsValid(true)
      setUsernameError(null)
    } else {
      setUsernameIsValid(false)
      setUsernameError('Username must be between 3 and 20 characters')
    }
  }

  return (
    <form method="post" action="/login" className="m-auto box-border block w-[280px] max-w-[280px]">
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
        id="loginUsername"
        type="text"
        name="username"
        value={username}
        onChange={onChangeUsername}
        error={usernameError}
        isValid={usernameIsvalid}
      />
      {error && (
        <div>
          <p className="mx-4 text-sm text-bbaby-red">{error}</p>
        </div>
      )}
      <AuthInput
        id="loginPassword"
        type="password"
        name="password"
        value={password}
        onChange={onChangePass}
        error={passwordError}
        isValid={passwordIsValid}
      />
      <div className="mt-4 text-[12px] leading-4">
        Forget your{' '}
        <Link href={'/'} className="font-bold leading-6 text-[#0079d3] underline">
          username
        </Link>{' '}
        or{' '}
        <Link href={'/'} className="font-bold leading-6 text-[#0079d3] underline">
          password
        </Link>{' '}
        ?
      </div>
      <fieldset className="relative mt-4 max-w-[280px]">
        <button className="mt-2 h-[40px] w-full rounded-full bg-bbaby-blue px-4 text-[14px] font-bold leading-4" type="submit" onClick={doLogin}>
          {loading ? <Spinner /> : 'Log In'}
        </button>
      </fieldset>
      <div className="mt-4 box-border block text-[12px] leading-4">
        New to Bbaby?{' '}
        <Link
          href={'/account/register'}
          className="font-bold leading-6 text-[#0079d3] underline"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (pathname.match('register') || pathname.match('login')) {
              router.push('/account/register')
            } else {
              modals.setShowAuth('register')
            }
          }}
        >
          Sign up
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
