import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { use } from 'react'
import ssrapis from '../../../../../components/API/ssrapis'
import Submit from '../../../../../components/submit/Submit'
import { SubmitContextProvider } from '../../../../../components/submit/SubmitProvider'
import TempSubmitWid from '../../../../../components/widget/TempSubmitWid'
import { clientUrl } from '../../../../../config/config'
import { CommunityPageProps } from '../page'

const SubmitCommunityPage = ({ params }: CommunityPageProps) => {
  const session = use(ssrapis.getSession())

  if (!session || !session.user) {
    redirect('/')
  }

  const community = use(ssrapis.getCommunity(params.community))

  if (!community) {
    return <div></div>
  }

  return (
    <div className="mx-auto my-0 box-border flex max-w-[1248px] flex-row justify-center md:px-6 md:py-5">
      <div className="mr-0 w-full grow md:mr-6 lg:w-[740px] lg:max-w-[740px]">
        <SubmitContextProvider session={session} minimal={false} initialCommunity={community}>
          <Submit />
        </SubmitContextProvider>
      </div>
      <div className="mt-11 hidden lg:block">
        <TempSubmitWid />
      </div>
    </div>
  )
}

export default SubmitCommunityPage

export const generateMetadata = async ({ params }: CommunityPageProps): Promise<Metadata> => {
  const community = await ssrapis.getCommunity(params.community)
  if (!community) return {}
  return {
    title: `Submit to ${community.name}`,
    description: community.description,
    alternates: {
      canonical: `${clientUrl}/b/${community}/submit`,
      languages: {
        'en-US': `${clientUrl}/b/${community}/submit`,
      },
    },
  }
}
