import Link from 'next/link'
import { RiArrowUpSLine } from 'react-icons/ri'
import SubscribeButton from '../utils/buttons/SubscribeButton'

interface LeaderboardCommunityProps {
  community: CommunityProps
  index: number
}

const LeaderboardCommunity = ({ community, index }: LeaderboardCommunityProps) => {
  return (
    <li key={community._id} className="relative border-b border-reddit_border">
      <Link href={`/b/${community.name.toLowerCase()}`} target={'_blank'} className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center">
          <span className="min-w-5 text-right text-[14px] leading-[18px]">{index + 1}</span>
          <RiArrowUpSLine className="ml-2 h-5 w-5 align-middle leading-5 text-green-500" />
          <picture>
            <img
              role={'presentation'}
              src={community.image}
              alt="Community Icon"
              className="mx-2 ml-2 mr-1 box-border flex-none rounded-[24px] bg-[rgb(108,163,196)] bg-no-repeat text-[40px] leading-10"
              width={40}
              height={40}
              style={{
                backgroundPosition: '50%',
                backgroundSize: '100%',
              }}
            />
          </picture>
          <span className="leading- inline-block text-[16px] font-bold">b/{community.name}</span>
        </div>
        <span>{community.subscribers}</span>
      </Link>
      <div className="absolute right-20 top-[20.5px]">
        <SubscribeButton community={community} />
      </div>
    </li>
  )
}

export default LeaderboardCommunity
