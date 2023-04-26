import Link from 'next/link'

type PostFormProps = {
  session: SessionProps
  community?: CommunityProps
}

function PostForm({ session, community }: PostFormProps) {
  return (
    <div className="mx-auto flex rounded border border-reddit_border bg-reddit_dark-brighter p-2">
      <div className="h-[38px] w-[38px] overflow-hidden">
        <Link href={`/user/${session.user?.username.toLowerCase()}`} className="h-[38px] w-[38px]">
          <div className="relative h-full">
            <div className="relative h-[38px] w-[38px] rounded-[50%]">
              <div className="h-full w-full rounded-[50%] bg-[#343536]" />
              <picture className="absolute bottom-0 h-full w-full rounded-[50%]">
                <img
                  src={session.user?.avatar}
                  className="h-full w-full rounded-[50%]"
                  style={{ transformOrigin: 'bottom center' }}
                  alt="User Avatar"
                />
              </picture>
            </div>
          </div>
        </Link>
      </div>
      <form className="ml-4 mr-2 grow rounded-md border border-reddit_border bg-reddit_dark-brightest hover:border-reddit_text">
        <Link href={!community ? '/submit' : `/b/${community.name.toLowerCase()}/submit`}>
          <input
            type="text"
            className="block w-full rounded-md bg-reddit_dark-brightest p-2 px-3 text-[16px] leading-5 placeholder:text-reddit_text-darker md:text-[14px]"
            placeholder="Create Post"
          />
        </Link>
      </form>
    </div>
  )
}

export default PostForm
