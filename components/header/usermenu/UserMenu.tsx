import { useEffect, useRef, useState } from 'react'
import { ClickOutHandler } from 'react-clickout-ts'
import { useModals } from '../../auth/modal/ModalsProvider'
import ThemeButton from './buttons/notuser/ThemeButton'
import TermsPoliciesButton from './buttons/notuser/TermsPoliciesButton'
import LoginSignUpButton from './buttons/notuser/LoginSignUpButton'
import UserMenuIn from './UserMenuIn'

const UserMenu = ({ session }: WithSession) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  })
  const modals = useModals()
  const modalsRef = useRef(modals)
  const ignoreRef = useRef<HTMLElement | null>(null)
  const width = session?.user ? 252 : 211

  useEffect(() => {
    //get modal position
    if (!modals.showUserMenu) return
    const userButton = document.getElementById('USER_DROPDOWN_ID')
    if (!userButton) return
    ignoreRef.current = userButton
    setPosition({
      left: userButton.offsetLeft,
      width: userButton.offsetWidth,
    })
  }, [modals.showUserMenu])

  useEffect(() => {
    //close modal on resize
    if (!modalsRef.current.showUserMenu) return
    const onResize = () => {
      modalsRef.current.setShowUserMenu(false)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div>
      <ClickOutHandler ignoredElements={ignoreRef.current ? [ignoreRef.current] : []} onClickOut={() => modals.setShowUserMenu(false)}>
        <div
          role={'menu'}
          tabIndex={0}
          className={`${
            session?.user ? 'mb-2 mt-1 w-[252px] rounded pt-2' : 'mt-[-2px] w-[211px] rounded-b-[4px] border-t-0 pt-[6px]'
          } z-[80] max-h-[80%] overflow-y-auto overflow-x-hidden border border-bbaby-border bg-bbaby-brighter`}
          style={{
            position: 'fixed',
            left: position.left + position.width - width,
            top: session?.user ? 44.5 : 39.5,
          }}
        >
          {session?.user ? (
            <UserMenuIn session={session} />
          ) : (
            <>
              <ThemeButton />
              <TermsPoliciesButton />
              <div className="mx-4 border-t border-bbaby-border" />
              <LoginSignUpButton />
            </>
          )}
        </div>
      </ClickOutHandler>
    </div>
  )
}

export default UserMenu
