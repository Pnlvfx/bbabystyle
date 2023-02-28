import { use } from 'react'
import ssrgov from '../../../../components/API/ssrgov'
import TiktakHome from '../../../../components/governance/tiktak/TiktakHome'

const TiktakPage = () => {
  const tiktaks = use(ssrgov.getTiktaks())
  return (
    <div>
      <TiktakHome />
    </div>
  )
}

export default TiktakPage
