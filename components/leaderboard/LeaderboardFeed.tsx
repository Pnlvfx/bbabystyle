'use client'
import LeaderboardCommunity from "./LeaderboardCommunity"

interface LeaderFeedProps {
  communities: CommunityProps[]
}

const LeaderboardFeed = ({ communities }: LeaderFeedProps) => {
  return (
    <div className="flex w-full max-w-[740px] flex-grow md:w-[640px]">
      <div className="w-full border border-reddit_border">
        <div className="sticky top-12 z-[3] flex h-10 items-center justify-between bg-reddit_dark-brightest px-4">
          <span className="text-[16px] font-bold leading-5">Today&apos;s Top Growing Communities</span>
          <span className="text-[14px] font-bold leading-[18px] text-reddit_text-darker">Rank Change</span>
        </div>
        <ol className="bg-reddit_dark-brighter">
          {communities.map((community, index) => (
            <LeaderboardCommunity key={community._id} community={community} index={index} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default LeaderboardFeed