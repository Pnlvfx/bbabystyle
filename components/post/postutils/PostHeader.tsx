import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MouseEvent } from 'react'
import TimeAgo from '../../react-time-ago'

interface PostHeaderProps {
  community: string
  communityIcon: string
  communityUrl: string
  createdAt: Date
  author: string
  authorUrl: string
  isMobile: boolean
  isListing?: boolean
}

const PostHeader = ({ communityIcon, createdAt, community, author, authorUrl, communityUrl, isMobile, isListing }: PostHeaderProps) => {
  const router = useRouter()

  const linkToCommunity = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(communityUrl)
  }

  const linkToAuthor = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(authorUrl)
  }

  return (
    <div className="relative mx-2 mb-2 flex items-start text-[12px] leading-4">
      <div className="flex-none align-baseline">
        <Link
          href={communityUrl}
          aria-label="Community"
          className={`inline align-baseline font-bold leading-5 ${isMobile && isListing && 'articleLink'}`}
          onClick={linkToCommunity}
        >
          <div className="relative mr-1 inline-block h-5 w-5 rounded-full bg-[#4c075a] align-middle">
            <Image role={'presentation'} src={communityIcon} alt="Community Icon" className="rounded-full" width={20} height={20} />
          </div>
        </Link>
      </div>
      <div className="flex shrink grow flex-wrap items-center overflow-hidden">
        <div className="inline items-center font-normal leading-4">
          <div className="inline-block flex-none">
            <Link
              href={communityUrl}
              className={`inline align-baseline font-bold leading-5 hover:underline ${isMobile && isListing && 'articleLink'}`}
              onClick={linkToCommunity}
            >
              {`b/${community}`}
            </Link>
          </div>
          <span className="mx-1 align-middle text-[6px] leading-5">-</span>
          <span className="flex-none align-baseline text-reddit_text-darker">Posted by</span>{' '}
          <div className=" inline-block flex-none text-reddit_text-darker">
            <div>
              <Link href={authorUrl} className={`hover:underline ${isMobile && isListing && 'articleLink'}`} onClick={linkToAuthor}>
                {'u/' + author}
              </Link>
            </div>
          </div>
          <TimeAgo className="ml-[3px] font-normal text-reddit_text-darker" date={createdAt} />
        </div>
      </div>
    </div>
  )
}

export default PostHeader
