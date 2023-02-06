import Image from 'next/image'
import Link from 'next/link'
import { RiArrowUpSLine } from 'react-icons/ri'
import SubscribeButton from '../../utils/buttons/SubscribeButton'

interface TopCommunitiesContentProps {
  community: CommunityProps
  rank: number
}

const TopCommunitiesContent = ({ community, rank }: TopCommunitiesContentProps) => {
  return (
    <>
      <Link href={'/b/' + community.name.toLowerCase()}>
        <div className="flex h-[50px] items-center p-1">
          <p className="mx-3 text-sm font-extrabold">{rank}</p>
          <RiArrowUpSLine className="mr-2 h-5 w-5 text-green-500" />
          <Image src={community.image} alt="Community Icon" width={30} height={30} className="rounded-full" />
          <p className="ml-2 text-sm font-bold">b/{community.name}</p>
          <div className="ml-auto mr-2">
            <SubscribeButton community={community} />
          </div>
        </div>
      </Link>
      <hr className="border-reddit_border" />
    </>
  )
}

export default TopCommunitiesContent
