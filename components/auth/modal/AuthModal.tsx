import { CloseIcon } from '../../utils/svg/SVG'
import { useModals } from './ModalsProvider'

const AuthModal = () => {
  const modals = useModals()

  const closeModal = async () => {
    modals.setShowAuth('hidden')
  }

  return (
    <div>
      <div className="fixed left-0 top-0 z-[110] h-full w-full bg-[rgba(0,0,0,.4)]">
        <div
          className="z-[111 fixed left-[50%] top-[50%] h-[640px] w-[400px] overflow-hidden rounded-[12px] shadow-[1px_7px_20px_2px_rgb(0_0_0/40%)]"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          {modals.showAuth === 'login' ? (
            <iframe key={modals.showAuth} src={`${window.location.origin}/account/login`} className="h-full w-full" />
          ) : modals.showAuth === 'register' ? (
            <iframe key={modals.showAuth} src={`${window.location.origin}/account/register`} className="h-full w-full" />
          ) : (
            <div />
          )}
          <button onClick={closeModal} className="absolute right-[16px] top-[16px]">
            <CloseIcon className="h-4 w-4 fill-bbaby-text_darker" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthModal
