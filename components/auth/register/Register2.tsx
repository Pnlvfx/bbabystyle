import Link from 'next/link'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import oauthapis from '../../API/oauthapis'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { Spinner } from '../../utils/Spinner'
import { GoBackIcon } from '../../utils/svg/SVG'
import AuthInput from '../auth-input/AuthInput'
import { useModals } from '../modal/ModalsProvider'

interface Register2Props {
  email: string
  setFase2: Dispatch<SetStateAction<boolean>>
}

const Register2 = ({ email, setFase2 }: Register2Props) => {
  const [username, setUsername] = useState('')
  const [usernameIsvalid, setUsernameIsValid] = useState<boolean | null>(null)
  const [password, setPassword] = useState('')
  const [passwordIsValid, setPasswordIsValid] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)
  const message = useMessage()
  const modals = useModals()
  const [usernameError, setUsernameError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const onChangePass = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setPassword(e.target.value)
      const data = await oauthapis.checkPass(e.target.value)
      if (data.valid) {
        setPasswordError(null)
      } else {
        setPasswordError(data.data)
      }
      setPasswordIsValid(data.valid)
    } catch (err) {}
  }

  const onChangeUsername = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setUsername(e.target.value)
      const data = await oauthapis.checkUsername(e.target.value)
      if (data.valid) {
        setUsernameError(null)
      } else {
        setUsernameError(data.data)
      }
      setUsernameIsValid(data.valid)
    } catch (err) {}
  }

  const doRegister = async () => {
    try {
      setLoading(true)
      const data = await oauthapis.register(email, username, password)
      message.showMessage(data.msg, { status: 'success' })
      localStorage.setItem('isLogged', 'true')
      //setEmailTo(email);
      modals.setShowAuth('hidden')
      if (top?.window.location.href) {
        top.window.location.href = '/'
      } else {
        window.location.href = '/'
      }
    } catch (err) {
      setLoading(false)
    }
  }
  return (
    <div className="flex min-h-[100vh] w-[100vw] items-center justify-center" style={{ flexFlow: 'column nowrap' }}>
      <div className="">
        <Link
          href={'#'}
          className="absolute top-6 ml-[-8px] block h-[14px] w-[14px] p-2"
          onClick={(e) => {
            e.preventDefault()
            setFase2(false)
          }}
        >
          <GoBackIcon className="h-[14px] w-[14px] text-[#878a8c]" />
        </Link>
        <div className="max-w-[280px] flex-col items-stretch">
          <div className="m-auto max-w-[280px]">
            <h1 className="text-[18px] font-semibold leading-[22px]">Choose your username</h1>
            <p className="text-sm">
              Your username is how other members will see you. This will be used to credit you for things you share on Bbaby. Once you get a name, you
              can&apos;t change it.
            </p>
          </div>
          <div className="m-auto flex max-w-[280px] flex-1 justify-between p-6">
            <div className="flex w-full items-center justify-center">
              <form>
                <AuthInput
                  id="regUsername"
                  type="text"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  error={usernameError}
                  isValid={usernameIsvalid}
                />
                <AuthInput
                  id="regPassword"
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChangePass}
                  error={passwordError}
                  isValid={passwordIsValid}
                  autoComplete={'new-password'}
                />
              </form>
            </div>
          </div>
          <fieldset className="relative mx-auto my-5 max-w-[280px]">
            <button
              className={`mt-2 h-[40px] w-full rounded-full bg-bbaby-blue px-4 text-[14px] font-bold leading-4 ${
                !usernameIsvalid && passwordIsValid && 'pointer-events-none cursor-not-allowed opacity-20'
              }`}
              type="submit"
              disabled={!usernameIsvalid && !passwordIsValid ? true : false}
              onClick={(e) => {
                e.preventDefault()
                doRegister()
              }}
            >
              {loading ? <Spinner /> : 'Continue'}
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default Register2
