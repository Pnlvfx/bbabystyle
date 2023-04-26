import { Metadata } from 'next'
import { use } from 'react'
import ssrapis from '../../../../../../components/API/ssrapis'
import { clientUrl } from '../../../../../../config/config'
import { CommunityPageProps } from '../../page'

const ModQueuePage = ({ params }: CommunityPageProps) => {
  const session = use(ssrapis.getSession())
  return (
    <div>
      <div className="absolute inset-0 m-auto h-[100px] w-[100%]">
        {!session?.user && (
          <div className="text-center">
            <p className="mb-4 text-lg font-bold">Sorry, this is a moderator-only page</p>
            <p className="text-sm text-bbaby-text_darker">You must be a moderator of b/{params.community} to view this page.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ModQueuePage

export const generateMetadata = async ({ params }: CommunityPageProps): Promise<Metadata> => {
  const community = await ssrapis.getCommunity(params.community)
  if (!community) return {}
  return {
    title: community.name,
    description: community.description,
    alternates: {
      canonical: `${clientUrl}/b/${community}/about`,
      languages: {
        'en-US': `${clientUrl}/b/${community}/about`,
      },
    },
  }
}
