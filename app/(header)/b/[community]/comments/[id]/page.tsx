import { Metadata } from 'next'
import { use } from 'react'
import ssrapis from '../../../../../../components/API/ssrapis'
import Comment from '../../../../../../components/comment/Comment'
import { getMetadata } from '../../../../../../components/metadata/metadata'
import Post from '../../../../../../components/post/Post'
import PostNotFound from '../../../../../../components/post/post-not-found/PostNotFound'
import CommunityInfo from '../../../../../../components/widget/communityinfo/CommunityInfo'
import Donations from '../../../../../../components/widget/Donations'
import Widget from '../../../../../../components/widget/Widget'
import { clientUrl } from '../../../../../../config/config'
import { deviceIsMobile } from '../../../../../../components/API/config/serverConfig'

interface PostPageProps {
  params: {
    community: string
    id: string
  }
  searchParams: {}
}

const PostPage = ({ params }: PostPageProps) => {
  const isMobile = deviceIsMobile()
  const session = use(ssrapis.getSession())
  const post = use(ssrapis.getPost(params.id))

  if (!post) return <PostNotFound />

  return (
    <>
      {isMobile ? (
        <div className="mb-2 bg-bbaby-brighter pt-2">
          <Post isMobile={isMobile} post={post} isListing={false} session={session} />
          <Comment session={session} post={post} />
        </div>
      ) : (
        <div className="flex min-h-[calc(100vh_-_48px)] flex-col">
          <div className="flex max-w-[1600px] flex-row justify-center md:px-6 md:py-5 lg:mx-auto">
            <div className="w-full max-w-[750px] flex-none break-words rounded-md bg-bbaby-brighter lg:mr-4 lg:w-7/12 xl:w-8/12 2xl:w-[750px]">
              <Post isMobile={isMobile} post={post} isListing={false} session={session} />
              <Comment session={session} post={post} />
            </div>
            {post.community_detail && (
              <div className="hidden lg:block">
                <Widget>
                  <CommunityInfo session={session} community={post.community_detail} />
                </Widget>
                <Donations />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default PostPage

export const generateMetadata = async ({ params }: PostPageProps): Promise<Metadata> => {
  const post = await ssrapis.getPost(params.id)
  if (!post) return {}
  const url = `${clientUrl}${post.permalink}`
  const title = post.title.length >= 40 ? post.title : `${post.title} : ${post.community}`
  const description =
    post.body ||
    `${post.ups} votes, ${post.numComments} comments. ${post.community_detail?.subscribers || 0} members in the ${post.community} community, ${
      post.community_detail?.description || ''
    }`.substring(0, 160)
  const card = post.mediaInfo?.isImage ? 'summary_large_image' : post.mediaInfo?.isVideo ? 'summary_large_image' : 'summary'
  const images = post.mediaInfo?.isImage
    ? [{ url: post.mediaInfo.image, width: post.mediaInfo.dimension[1], height: post.mediaInfo.dimension[0] }]
    : post.mediaInfo?.isVideo
    ? [{ url: post.mediaInfo.video.url.replace('mp4', 'jpg'), width: post.mediaInfo.dimension[1], height: post.mediaInfo.dimension[0] }]
    : undefined
  const type = 'article'
  const videos = post.mediaInfo?.isVideo ? [post.mediaInfo.video.url] : undefined
  return getMetadata(title, description, url, type, card, images, videos)
}
