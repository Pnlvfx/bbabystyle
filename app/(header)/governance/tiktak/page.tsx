import { use } from 'react'
import ssrgov from '../../../../components/API/ssrgov'
import TiktakList from '../../../../components/governance/tiktak/tiktaklist/TiktakList'
import TiktaksHome from '../../../../components/governance/tiktak/TiktaksHome'

const TiktaksPage = () => {
  const tiktaks = use(ssrgov.getTiktaks())

  if (!tiktaks) return <div></div>

  return (
    <div>
      <TiktakList tiktaks={tiktaks} />
      <TiktaksHome />
    </div>
  )
}

export default TiktaksPage
