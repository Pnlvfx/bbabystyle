/* eslint-disable no-unused-vars */
interface CommunityProps {
    _id: string
    name: string
    image: string
    cover: string
    author: string
    description: string
    acceptFollowers: boolean
    subscribers: number
    user_is_moderator: boolean
    user_is_banned: boolean
    user_is_contributor: boolean
    user_is_subscriber: boolean
    number_of_posts: number
    createdAt: Date
    category: string
    sub_categories: string[]
  }