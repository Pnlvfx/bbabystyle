'use client'
import { useState } from 'react'
import { buttonClass } from '../../utils/buttons/Button'
import { MdOutlineAdminPanelSettings, MdDateRange } from 'react-icons/md'
import Link from 'next/link'
import { useSession } from '../../auth/UserContextProvider'
import { useModals } from '../../auth/modal/ModalsProvider'
import CategoriesDropdown from './CategoriesDropdown'

export interface CommunityInfoProps {
  community: CommunityProps
}

const CommunityInfo = ({community}: CommunityInfoProps) => {
  const { session } = useSession()
  const [descr, setDescr] = useState(community.description)
  const modals = useModals()
  const [showTextarea, setShowTextarea] = useState(false)

  // const updateDescription = async () => {
  //   try {
  //     await communityapis.updateDescription(community.name, descr)
  //     message.setMessage({ value: 'Description updated successfully!', status: 'success' })
  //   } catch (err) {
  //     catchErrorWithMessage(err, message)
  //   }
  // }

  // //TEXTAREA
  // const handleSave = ({ name, value, previousValue }: any) => {
  //   setDescr(value)
  //   updateDescription()
  // }

  return (
    <>
      <div className={`flex p-3 pt-0 text-[10px] font-bold leading-3 text-reddit_text-darker`}>
        <div className="pt-3 text-[16px] leading-5">
          <h2 className="inline text-[14px] font-bold leading-[18px]">About community</h2>
        </div>
        {community.user_is_moderator && ( //MODQUEQUE BUTTON
          <div tabIndex={0} className="m-auto mr-0 pt-[10px] align-middle">
            <Link href={`/b/${community.name.toLowerCase()}/about/modqueue`} className="inline-block p-1">
              <MdOutlineAdminPanelSettings className="icon mr-1 inline-block" />
              MOD TOOLS
            </Link>
          </div>
        )}
      </div>
      <div className="p-3">
        {!community.user_is_moderator && (
          <div className="mb-2">
            <div className="break-words text-[14px] leading-5">{descr}</div>
          </div>
        )}
        {community.user_is_moderator&& (
          <div className="mb-3 mt-2 block rounded border border-reddit_border bg-reddit_dark-brightest p-2 transition-all" tabIndex={0}>
            <div
              className="text-[12px] font-bold leading-4"
              onClick={() => {
                setShowTextarea(true)
              }}
            >
              {showTextarea ? (
                <textarea className="w-full resize-none bg-transparent" placeholder="Tell us about your community  " />
              ) : (
                <>{community.description}</>
              )}
            </div>
          </div>
        )}
        <div className="grid">
          <p className="font-bold">{community.subscribers}</p>
          <p className="text-xs font-bold">Followers</p>
          <hr className="border-reddit_border"></hr>
          {community.createdAt && (
            <div className="flex w-full items-center space-x-2 py-3">
              <MdDateRange style={{ width: 18, height: 18 }} />
              <p className="text-sm">Created {new Date(community.createdAt).toLocaleString('en-us', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            </div>
          )}
        </div>
        {community.user_is_moderator && <CategoriesDropdown community={community} />}
        <div className="self-center">
          {!session?.user && (
            <button
              onClick={() => {
                modals.setShowAuth('login')
              }}
              className={`mt-3 h-[32px] w-full ${buttonClass()}`}
            >
              Create a Post
            </button>
          )}
          {session?.user?.username && (
            <Link href={`/submit`} className="self-center">
              <div className="self-center">
                <button className={`mt-3 h-[32px] w-full ${buttonClass()}`}>Create a Post</button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default CommunityInfo