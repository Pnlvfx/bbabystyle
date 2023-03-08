import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrgov from '../../../../../components/API/ssrgov'
import TiktakHome from '../../../../../components/governance/tiktak/TiktakHome'

interface TiktakPageProps {
  params: {
    permalink: string
  }
}

const TiktakPage = ({ params }: TiktakPageProps) => {
  const tiktak = use(ssrgov.getTiktak(params.permalink))

  if (!tiktak) {
    redirect('/governance/tiktak')
  }

  if (tiktak.video || tiktak.background_video) {
    redirect(`/governance/tiktak/${params.permalink}/video`)
  }

  return <TiktakHome tiktak={tiktak} />
}

export default TiktakPage
