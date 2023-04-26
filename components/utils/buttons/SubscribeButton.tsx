import { useRouter } from 'next/navigation'
import { MouseEvent, useState } from 'react'
import communityapis from '../../API/communityapis'
import { useModals } from '../../auth/modal/ModalsProvider'
import { buttonClass } from './Button'

interface SubscribeButton {
  community: CommunityProps
}

const SubscribeButton = ({ community: req_community }: SubscribeButton) => {
  const [community, setCommunity] = useState(req_community)
  const modals = useModals()
  const router = useRouter()

  const doSubscribe = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault()
      await communityapis.subscribe(community.name, modals)
      setCommunity({ ...community, user_is_subscriber: !community.user_is_subscriber })
      router.refresh()
    } catch (err) {}
  }
  return (
    <button className={`mx-1 px-4 py-[3px] ${buttonClass(community.user_is_subscriber ? true : false)}`} onClick={doSubscribe}>
      <span className="text-xs">{community.user_is_subscriber ? 'Joined' : 'Join'}</span>
    </button>
  )
}

export default SubscribeButton
