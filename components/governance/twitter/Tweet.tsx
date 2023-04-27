'use client'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'
import ReactLinkify from 'react-linkify'
import { MediaObjectV2, TweetV2, UserV2 } from 'twitter-api-v2'
import { LOGO } from '../../../config/config'
import { catchErrorWithMessage } from '../../API/config/apiErrors'
import govapis from '../../API/govapis'
import Voting from '../../post/postutils/Voting'
import Submit from '../../submit/Submit'
import { SubmitContextProvider } from '../../submit/SubmitProvider'
import { useMessage } from '../../utils/message/TimeMsgContext'
import { RetweetIcon } from '../../utils/svg/SVG'
import TweetHeader from './TweetHeader'
import Video from '../../video-player'

type TweetPageProps = {
  tweet: TweetV2
  user: UserV2
  media?: MediaObjectV2
  language: 'it' | 'en'
  isMobile: boolean
  session: SessionProps | null
}

const Tweet = ({ tweet, user, media, language, isMobile, session }: TweetPageProps) => {
  const message = useMessage()
  const [translated, setTranslated] = useState('')
  const [showSubmit, setShowSubmit] = useState(false)
  const image = media?.type === 'photo' ? media.url : media?.type === 'video' ? media.preview_image_url : undefined
  const video = media?.type === 'video' && media.variants ? media.variants[0].url : undefined

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
      <div className="w-full bg-reddit_dark-brighter pt-2">
        <TweetHeader
          user_avatar={user.profile_image_url}
          username={user.username}
          created_at={tweet.created_at}
          screen_name={user.name}
          userId={tweet.author_id}
          isMobile={isMobile}
        />
        <div className="mx-2">
          <div className="inline align-baseline">
            <ReactLinkify
              componentDecorator={(decoratedHref, decoratedText, key) => (
                <a className="text-bbaby-blue" target={'_blank'} href={decoratedHref} key={key} rel={'noopener nofollow ugc noreferrer'}>
                  {decoratedText}
                </a>
              )}
            >
              <h1 className="mb-4 break-words text-lg">{tweet.text}</h1>
            </ReactLinkify>
          </div>
        </div>
        <div className="relative mt-2 max-h-[512px] overflow-hidden">
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
        <div className="flex h-[40px] flex-row px-[2px]">
          <div className="flex grow items-stretch overflow-hidden pl-1 pr-2 text-[12px] font-bold leading-4 text-reddit_text-darker">
            <div className="mr-1 flex items-center">
              <button
                className="flex h-full min-w-[40px] items-center justify-center rounded-[2px] px-3 py-2 hover:bg-reddit_dark-brightest"
                type="button"
                onClick={translate}
              >
                <span className="max-h-[36px] overflow-hidden text-ellipsis text-left leading-3">Magic</span>
              </button>
              <button
                className="flex h-full min-w-[40px] items-center justify-center rounded-[2px] px-3 py-2 hover:bg-reddit_dark-brightest"
                type="button"
              >
                <span className="flex max-h-[36px] items-center overflow-hidden text-ellipsis text-left leading-3">
                  <RetweetIcon className="mr-[10px] h-5 w-5" />
                  {tweet.public_metrics.retweet_count}
                </span>
              </button>
            </div>
          </div>
        </div>
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

export default Tweet
