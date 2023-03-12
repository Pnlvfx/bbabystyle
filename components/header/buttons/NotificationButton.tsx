'use client'
import { useEffect, useState } from 'react'
import { ClickOutHandler } from 'react-clickout-ts'
import { IoIosNotificationsOutline } from 'react-icons/io'
import NotificationModal from '../../notification/NotificationModal'

const NotificationButton = () => {
  const [show, setShow] = useState(false)
  const triggerDropdown = () => {
    setShow(!show)
  }

  useEffect(() => {}, [])

  return (
    <ClickOutHandler onClickOut={() => setShow(false)}>
      <div className="md:ml-2 h-8">
        <button
          className={`relative rounded-[2px]`}
          aria-expanded={show}
          aria-haspopup="true"
          aria-label="Open notifications"
          onClick={triggerDropdown}
        >
          <div className="relative box-border h-8 w-8">
            {/* <span className="bg-bbaby-red rounded-xl box-border text-[10px] font-bold h-4 left-5 leading-4 px-1 absolute text-center top-0 align-middle min-w-[16px] w-auto z-[1]">
              9
            </span> */}
            <IoIosNotificationsOutline className="icon absolute top-0 bottom-0 left-0 right-0 m-auto" />
          </div>
        </button>
        {show && <NotificationModal />}
      </div>
    </ClickOutHandler>
  )
}

export default NotificationButton
