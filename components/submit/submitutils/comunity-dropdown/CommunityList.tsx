import Image from 'next/image'
import { SetStateAction } from 'react'
import { useSubmitProvider } from '../../SubmitProvider'

type CommunityListProps = {
  community: CommunityProps
  setShow: React.Dispatch<SetStateAction<boolean>>
  setActiveClass: React.Dispatch<SetStateAction<boolean>>
}

const CommunityList = ({ community, setShow, setActiveClass }: CommunityListProps) => {
  const size = 35
  const { setSelectedCommunity } = useSubmitProvider()

  const selectCommunity = () => {
    setSelectedCommunity(community)
    setShow(false)
    setActiveClass(false)
  }

  return (
    <button className="mb-3 w-full hover:bg-bbaby-brightest" value={'community'} onClick={selectCommunity}>
      <div className="flex items-center text-left">
        <Image src={community.image} alt="Community Icon" height={size} width={size} className="rounded-full" />
        <div className="ml-3">
          <p className="">b/{community.name}</p>
          <p className="text-bbaby-text_darker">{community.subscribers} members</p>
        </div>
      </div>
    </button>
  )
}

export default CommunityList
