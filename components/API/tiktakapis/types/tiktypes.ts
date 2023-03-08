export interface NewTiktakResponse {
  original_body: string
  body: string
  permalink: string
  _id: string
}

export interface TiktakProps {
  original_title: string
  title: string
  original_body: string
  body: string
  permalink: string
  audio?: string
  duration?: number
  background_video?: string
  video?: string
  synthetize?: string
  _id: string
  createdAt: string
  updatedAt: string
}
