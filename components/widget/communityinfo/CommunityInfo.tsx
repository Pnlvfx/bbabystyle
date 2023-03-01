'use client'
import { buttonClass } from '../../utils/buttons/Button'
import { MdOutlineAdminPanelSettings, MdDateRange } from 'react-icons/md'
import Link from 'next/link'
import { useSession } from '../../auth/UserContextProvider'
import { useModals } from '../../auth/modal/ModalsProvider'
import CategoriesDropdown from './CategoriesDropdown'
import ModeratorDescr from './ModeratorDescr'
import { MoreIcon } from '../../utils/svg/SVG'

export interface CommunityInfoProps {
  community: CommunityProps
}

const CommunityInfo = ({ community }: CommunityInfoProps) => {
  const { session } = useSession()
  const modals = useModals()

  return (
    <>
      <div className={`flex px-3 pb-3 text-[10px] font-bold leading-3 text-bbaby-text_darker`}>
        <div className="pt-3 text-[16px] leading-5 font-medium">
          <h2 className="inline text-[14px] font-bold leading-[18px]">About community</h2>
        </div>
        {community.user_is_moderator && (
          <div className="my-auto ml-auto pt-[10px] align-middle">
            <Link href={`/b/${community.name.toLowerCase()}/about/modqueue`} className="inline-block p-1">
              <MdOutlineAdminPanelSettings className="icon mr-1 inline-block" />
              MOD TOOLS
            </Link>
            <button className="h-8 align-middle pl-1 pr-[2px]">
              <MoreIcon />
            </button>
          </div>
        )}
      </div>
      <div className="p-3">
        {!community.user_is_moderator && (
          <div className="mb-2">
            <div className="break-words text-[14px] leading-5">{community.description || `Welcome to ${community.name}`}</div>
          </div>
        )}
        {community.user_is_moderator && <ModeratorDescr name={community.name} description={community.description} />}
        <div className="grid">
          <p className="font-bold">{community.subscribers}</p>
          <p className="text-xs font-bold">Followers</p>
          <hr className="border-bbaby-border"></hr>
          <div className="flex w-full items-center space-x-2 py-3">
            <MdDateRange style={{ width: 18, height: 18 }} />
            <p className="text-sm">
              Created {new Date(community.createdAt).toLocaleString('en-us', { day: 'numeric', month: 'short', year: 'numeric' })}
            </p>
          </div>
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
