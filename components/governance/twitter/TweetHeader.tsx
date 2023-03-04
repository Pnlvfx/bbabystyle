import Image from 'next/image'
import Link from 'next/link'
import { useSession } from '../../auth/UserContextProvider'
import TimeAgo from '../../react-time-ago'

interface TweetHeaderProps {
  user_avatar: string
  username: string
  screen_name: string
  created_at: string
  userId: string
}

const TweetHeader = ({ user_avatar, username, screen_name, created_at, userId }: TweetHeaderProps) => {
  const { session } = useSession()
  return (
    <div className="relative mx-2 mb-2 flex items-start text-[12px] leading-4">
      <div className="flex-none align-baseline">
        <Link
          aria-label="twitter-user"
          href={`/governance/twitter/user/${userId}`}
          className={`inline align-baseline font-bold leading-5 ${session?.device?.mobile && 'articleLink'}`}
        >
          <div className="relative mr-1 inline-block h-5 w-5 rounded-full bg-[#4c075a] align-middle">
            <Image role={'presentation'} src={user_avatar} alt="twitter_user_image" className="rounded-full" width={20} height={20} />
          </div>
        </Link>
      </div>
      <div className="flex flex-shrink flex-grow flex-wrap items-center overflow-hidden">
        <div className="inline items-center leading-4">
          <div className="inline-block flex-none">
            <Link
              href={`/governance/twitter/user/${userId}`}
              className={`inline align-baseline font-bold leading-5 hover:underline ${session?.device?.mobile && 'articleLink'}`}
            >
              {username}
            </Link>
          </div>
          <span className="mx-1 align-middle text-[6px] leading-5">-</span>
          <span className="flex-none align-baseline text-reddit_text-darker">Posted by</span>{' '}
          <div className=" inline-block flex-none text-reddit_text-darker">
            <div>
              <Link href={`/governance/twitter/user/${userId}`} className={`hover:underline ${session?.device?.mobile && 'articleLink'}`}>
                @{screen_name}
              </Link>
            </div>
          </div>
          <TimeAgo date={created_at} className="ml-[3px] font-normal text-reddit_text-darker" />
        </div>
      </div>
    </div>
  )
}

export default TweetHeader
