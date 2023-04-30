import { MouseEvent, useState } from 'react'
import Voting from '../../post/postutils/Voting'
import { SubmitContextProvider } from '../../submit/SubmitProvider'
import Video from '../../video-player'
import TweetHeader from './TweetHeader'
import { LOGO } from '../../../config/config'
import Image from 'next/image'
import Submit from '../../submit/Submit'
import { TweetPageProps } from './Tweet'
import TweetTitle from './TweetTitle'
import TweetButtons from './TweetButtons'
import govapis from '../../API/govapis'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import { useMessage } from '../../utils/message/TimeMsgContext'

const TweetContent = ({ session, isMobile, language, tweet, user, media, isListing }: WithSession & TweetPageProps) => {
  const [translated, setTranslated] = useState('')
  const [showSubmit, setShowSubmit] = useState(false)
  const image = media?.type === 'photo' ? media.url : media?.type === 'video' ? media.preview_image_url : undefined
  const video = media?.type === 'video' && media.variants ? media.variants[0].url : undefined
  const message = useMessage()

  const translate = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault()
      if (showSubmit) {
        setShowSubmit(false)
      } else {
        const tweetTitle = await govapis.translate(tweet.text, language)
        setTranslated(tweetTitle)
        setShowSubmit(true)
      }
    } catch (err) {
      catchErrorWithMessage(err, message)
    }
  }

  if (tweet.public_metrics?.like_count === undefined || !tweet.created_at || !user.profile_image_url || !tweet.author_id) return null
  return (
    <>
      <div className="voting absolute left-0 top-0 box-border w-10 flex-col items-center border-l-4 border-solid border-transparent py-2 pr-1">
        <div className="flex flex-col items-center">
          <Voting ups={tweet.public_metrics?.like_count} postId={tweet.id} liked={null} session={session} />
        </div>
      </div>
      <div className="relative bg-bbaby-brighter pt-2">
        {isMobile && isListing ? (
          <header>
            <TweetHeader
              user_avatar={user.profile_image_url}
              username={user.username}
              created_at={tweet.created_at}
              screen_name={user.name}
              userId={tweet.author_id}
              isMobile={isMobile}
            />
          </header>
        ) : (
          <TweetHeader
            user_avatar={user.profile_image_url}
            username={user.username}
            created_at={tweet.created_at}
            screen_name={user.name}
            userId={tweet.author_id}
            isMobile={isMobile}
          />
        )}
        <TweetTitle title={tweet.text} isMobile={isMobile} isListing={isListing} />
        <div className="mt-2">
          <div className="relative max-h-[512px] overflow-hidden">
            {media?.type === 'photo' && image && <Image src={image} height={media.height} alt="Tweet Image" width={media.width} />}
            {media?.type === 'video' && video && image && (
              <>
                <div className="w-full pb-[105.35%]" />
                <div className="absolute inset-0">
                  <Video Logo={LOGO} url={video} poster={image} scroll={true} />
                </div>
              </>
            )}
          </div>
        </div>
        {isMobile && isListing ? (
          <footer className="pointer-events-none">
            <TweetButtons isListing={isListing} isMobile={isMobile} numComments={tweet.public_metrics.retweet_count} translate={translate} />
          </footer>
        ) : (
          <TweetButtons isListing={isListing} isMobile={isMobile} numComments={tweet.public_metrics.retweet_count} translate={translate} />
        )}
      </div>
      {showSubmit && (
        <SubmitContextProvider
          title={translated}
          image={image}
          width={media?.width}
          height={media?.height}
          video={video}
          type={media?.type}
          minimal={true}
          session={session}
        >
          <Submit />
        </SubmitContextProvider>
      )}
    </>
  )
}

export default TweetContent
