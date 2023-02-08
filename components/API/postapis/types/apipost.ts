// eslint-disable-next-line import/no-unused-modules
export interface GetPostsOptions {
  limit?: number;
  author?: string;
  community?: string;
}

export interface NewPostOptions {
  body?: string
  selectedFile: string | null
  isImage?: boolean
  isVideo?: boolean
  width?: number
  height?: number
  sharePostToTwitter?: boolean
  sharePostToTG?: boolean
}

