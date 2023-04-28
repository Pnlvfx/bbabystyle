import { MediaObjectV2, TweetV2, UserV2 } from 'twitter-api-v2'
import TweetContent from './TweetContent'

export interface TweetPageProps {
  tweet: TweetV2
  user: UserV2
  media?: MediaObjectV2
  language: 'it' | 'en'
  isMobile: boolean
  session: SessionProps | null
  isListing: boolean
}

const Tweet = ({ tweet, user, media, language, isMobile, session, isListing }: TweetPageProps) => {
  return (
    <div>
      <div>
        {!isMobile ? (
          <div className="post-container relative" data-is-listing={`${isListing}`}>
            <TweetContent isMobile={isMobile} language={language} session={session} tweet={tweet} user={user} media={media} isListing={isListing} />
          </div>
        ) : isListing ? (
          <article data-is-listing={'true'} className={`post-container article`} id={tweet.id}>
            {/* <Link style={{ pointerEvents: 'all' }} href={post.permalink} /> */}
            <div className="pointer-events-none relative">
              <TweetContent isMobile={isMobile} language={language} session={session} tweet={tweet} user={user} media={media} isListing={isListing} />
            </div>
          </article>
        ) : (
          <TweetContent isMobile={isMobile} language={language} session={session} tweet={tweet} user={user} media={media} isListing={isListing} />
        )}
      </div>
    </div>
  )
}

export default Tweet
