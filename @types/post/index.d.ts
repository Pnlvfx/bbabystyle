/* eslint-disable no-unused-vars */
interface PostProps {
  _id: string
  author: string
  title: string
  body?: string
  community: string
  communityIcon: string
  community_detail?: CommunityProps
  mediaInfo?: MediaInfoProps
  ups: number
  liked: null | boolean
  numComments: number
  createdAt: Date
  updatedAt: Date
  permalink: string
}

type MediaInfoProps = {
  dimension: Array<number>
  isImage: boolean
  isVideo: boolean
  image: string
  video: {
    url: string
  }
}

interface PostComponentProps {
  author: string
  communityIcon: string
  community: string
  createdAt: Date
  liked: boolean | null
  ups: number
  permalink: string
  id: string
  numComments: number
  title: string
  body?: string
  mediaInfo?: MediaInfoProps
}
