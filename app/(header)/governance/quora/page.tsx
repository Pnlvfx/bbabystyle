import { use } from 'react'
import ssrgov from '../../../../components/API/ssrgov'
import QuoraFeed from '../../../../components/governance/quora/QuoraFeed'

const QuorasPage = () => {
  const quoras = use(ssrgov.getQuoras(0, 15))

  if (!quoras) {
    return <div></div>
  }

  return <QuoraFeed quoras={quoras} />
}

export default QuorasPage
