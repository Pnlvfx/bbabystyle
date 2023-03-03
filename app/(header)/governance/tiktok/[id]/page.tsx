import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrgov from '../../../../../components/API/ssrgov'
import TiktokHome from '../../../../../components/governance/tiktok/TiktokHome'

interface TiktokIdPageProps {
  params: {
    id: string
  }
}

const TiktokIdPage = ({ params }: TiktokIdPageProps) => {
  const tiktok = use(ssrgov.getTiktok(params.id))

  if (!tiktok) {
    redirect('/governance/tiktok')
  }

  return (
    <div className="mt-[30px] flex items-center justify-center flex-col lg:mx-12">
      <div className="h-full w-full">
        <div className="flex items-center justify-center">
          <video className={`aspect-video`} src={tiktok.video.url} id="video_pre-share" controls={true} width={1080} height={1920} />
        </div>
        <TiktokHome tiktok={tiktok} />
      </div>
    </div>
  )
}

export default TiktokIdPage
