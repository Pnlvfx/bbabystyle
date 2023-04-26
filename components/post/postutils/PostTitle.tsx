import Link from 'next/link'

interface PostTitle {
  isListing?: boolean
  post: PostProps
  isMobile: boolean
}

const PostTitle = ({ post, isMobile, isListing }: PostTitle) => {
  const titleClass = `text-[18px] leading-[22px] words-breaks inline`
  return (
    <div className="mx-2">
      <div className="inline align-baseline">
        {isListing ? (
          <>
            {isMobile ? (
              <div className="pointer-events-none box-border block overflow-hidden break-words">
                <Link href={post.permalink} className={`whitespace-pre-wrap text-[#D7DADC] ${titleClass}`}>
                  {post.title}
                </Link>
              </div>
            ) : (
              <p className={`whitespace-pre-wrap text-[#D7DADC] ${titleClass}`}>{post.title}</p>
            )}
          </>
        ) : (
          <h1 className={`whitespace-pre-wrap text-[#D7DADC] ${titleClass}`}>{post.title}</h1>
        )}
      </div>
    </div>
  )
}

export default PostTitle
