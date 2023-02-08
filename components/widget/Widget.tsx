import CommunityInfo from './communityinfo/CommunityInfo'
import TopCommunities from './topcommunities/TopCommunities'

type WidgetProps = {
  community?: CommunityProps
}

const Widget = ({ community }: WidgetProps) => {
  return (
    <div className="mb-5 box-content w-[312px] overflow-hidden rounded-md border border-reddit_border bg-reddit_dark-brighter">
      <div className="flex h-full flex-col">{community ? <CommunityInfo community={community} /> : <TopCommunities />}</div>
    </div>
  )
}

export default Widget