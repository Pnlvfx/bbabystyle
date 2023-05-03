import Link from 'next/link'
import Linkify from './Linkify'

interface PostTitleProps {
  isListing?: boolean
  title: string
  permalink: string
  isMobile: boolean
}

const PostTitle = ({ title, permalink, isMobile, isListing }: PostTitleProps) => {
  const titleClass = `text-[18px] leading-[22px] words-breaks inline whitespace-pre-wrap text-[#D7DADC]`
  return (
    <div className="mx-2">
      <div className="inline align-baseline">
        {isListing ? (
          isMobile ? (
            <div className="pointer-events-none box-border block overflow-hidden break-words">
              <Link href={permalink} className={titleClass}>
                <Linkify>{title}</Linkify>
              </Link>
            </div>
          ) : (
            <Linkify>
              <p className={titleClass}>{title}</p>
            </Linkify>
          )
        ) : (
          <Linkify>
            <h1 className={titleClass}>{title}</h1>
          </Linkify>
        )}
      </div>
    </div>
  )
}

export default PostTitle
