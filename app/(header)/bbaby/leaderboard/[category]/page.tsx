import { use } from "react"
import ssrapis from "../../../../../components/API/ssrapis"
import LeaderboardFeed from "../../../../../components/leaderboard/LeaderboardFeed"

const LeaderboardCategoryPage = () => {
  const communities = use(ssrapis.getCommunities(25))

    if (!communities) {
        return (
            <div>
                
            </div>
        )
    }
  return (
    <LeaderboardFeed communities={communities} />
  )
}

export default LeaderboardCategoryPage