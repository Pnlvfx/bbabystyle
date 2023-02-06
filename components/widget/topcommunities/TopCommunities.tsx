import Link from 'next/link'
import { useEffect, useState } from 'react'
import communityapis from '../../API/communityapis'
import TopCommunitiesContent from './TopCommunitiesContent'

const TopCommunities = () => {
  const [allCommunity, setAllCommunity] = useState<CommunityProps[] | []>([])

  useEffect(() => {
    const get = async () => {
      try {
        setTimeout(async () => {
          try {
            const communities = await communityapis.getCommunities(5)
            setAllCommunity(communities)
          } catch (err) {}
        }, 500)
      } catch (err) {}
    }
    get()
  }, [])

  return (
    <>
      <div
        className={`${loading && 'loading'} top-community`}
        style={{
          backgroundImage: `url(/topCommunitiesIcon.webp)`,
        }}
      >
        <h2 className="absolute bottom-2 left-4 text-[16px] font-bold leading-5 ">
          <Link href={'/bbaby/leaderboard'}>Top Communities</Link>
        </h2>
      </div>
      <>
        {allCommunity?.length >= 1
          ? allCommunity.map((community, index) => {
              const rank = index + 1
              return <TopCommunitiesContent key={community._id} rank={rank} community={community} />
            })
          : [1, 2, 3, 4, 5].map((_, idx) => (
              <div key={idx} className={`h-[51px] ${loading && 'loading overflow-hidden'}`}>
                <hr className="border-reddit_border" />
              </div>
            ))}
        <div className={`${loading && 'loading'} mx-2 mt-3 mb-3 h-[32px]`}>
          {!loading && (
            <Link
              href={`/bbaby/leaderboard`}
              className="relative box-border flex min-h-[32px] w-full min-w-[32px] items-center justify-center rounded-full bg-white py-1 px-4 text-[14px] font-bold leading-4 text-reddit_dark"
              tabIndex={0}
              role="button"
            >
              View All
            </Link>
          )}
        </div>
      </>
    </>
  )
}

export default TopCommunities