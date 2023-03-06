import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrgov from '../../../../../../components/API/ssrgov'
import TiktakBgVideo from '../../../../../../components/governance/tiktak/TiktakBgVideo'
import TiktakVideo from '../../../../../../components/governance/tiktak/TiktakVideo'

interface TiktakPageProps {
  params: {
    permalink: string
  }
}

const TiktakVideoPage = ({ params }: TiktakPageProps) => {
  const tiktak = use(ssrgov.getTiktak(params.permalink))

  if (!tiktak) {
    redirect('/tiktak')
  }

  if (!tiktak.video && tiktak.background_video) {
    return (
      <div className="h-full w-full">
        <div className="flex items-center justify-center">
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
              <div id="text-color" className="max-w-[1920px] flex flex-col">
                <p className="text-[40px]">This text is here for choose the text color</p>
              </div>
            </div>
            <video className={`aspect-video`} src={tiktak.background_video} id="video_pre-share" controls={true} width={1080} height={1920} />
          </div>
        </div>
        <TiktakBgVideo tiktak={tiktak} />
      </div>
    )
  }

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-center">
        <video className={`aspect-video`} src={tiktak.video} id="video_pre-share" controls={true} width={1080} height={1920} />
      </div>
      <TiktakVideo tiktak={tiktak} />
    </div>
  )
}

export default TiktakVideoPage
