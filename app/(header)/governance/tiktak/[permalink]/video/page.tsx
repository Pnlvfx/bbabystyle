import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrgov from '../../../../../../components/API/ssrgov'

interface TiktakPageProps {
  params: {
    permalink: string
  }
}

const TiktakVideoPage = ({ params }: TiktakPageProps) => {
  const tiktak = use(ssrgov.getTiktak(params.permalink))

  if (!tiktak || !tiktak.video) {
    redirect('/tiktak')
  }

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center">
        <video className={`aspect-video`} src={tiktak.video} id="video_pre-share" controls={true} width={1080} height={1920} />
      </div>
    </div>
  )
}

export default TiktakVideoPage
