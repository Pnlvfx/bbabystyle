import { use } from 'react'
import ssrgov from '../../../../components/API/ssrgov'
import QuoraFeed from '../../../../components/governance/quora/QuoraFeed'
import ssrapis from '../../../../components/API/ssrapis'

const QuorasPage = () => {
  const session = use(ssrapis.getSession())
  const quoras = use(ssrgov.getQuoras(0, 15))

  if (!quoras) {
    return <div></div>
  }

  return <QuoraFeed quoras={quoras} session={session} />
}

export default QuorasPage
