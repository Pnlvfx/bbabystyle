import GoogleLogin from './GoogleLogin'
import oauthapis from '../../../API/oauthapis'
import { useMessage } from '../../../utils/message/TimeMsgContext'
import { CredentialResponse } from './types/googletypes'
import { catchErrorWithMessage } from '../../../API/config/apiErrors'
import { useModals } from '../../modal/ModalsProvider'

const Google = () => {
  const modals = useModals()
  const message = useMessage()

  const responseGoogle = async (response: CredentialResponse) => {
    try {
      await oauthapis.googleLogin(response)
      modals.setShowAuth('hidden')
      if (top?.window.location.href) {
        top.window.location.href = '/'
      } else {
        window.location.href = '/'
      }
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <GoogleLogin
      onSuccess={(response) => responseGoogle(response)}
      onError={() => message.showMessage('Something went wrong', { status: 'error' })}
      width={'280'}
      type={'standard'}
      theme={'outline'}
      locale={'en'}
    />
  )
}

export default Google
