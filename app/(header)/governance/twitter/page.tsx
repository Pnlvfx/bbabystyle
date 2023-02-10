import { Video } from "@bbabystyle/next-video-player";
import Image from "next/image";
import { use } from "react"
import ReactLinkify from "react-linkify";
import ReactTimeago from "react-timeago";
import ssrgov from "../../../../components/API/ssrgov"
import { LOGO } from "../../../../config/config";

const TwitterPage = () => {
  //const tweets = use(ssrgov.getTweetHome());

  // if (!tweets) {
  //   return (
  //     <div>

  //     </div>
  //   )
  // }

  return (
    <>
    {/* {tweets.map((tweet) => (
      <div key={tweet.id}>
      <div>
        <div className="mb-3 w-full cursor-pointer rounded-md border border-reddit_border bg-[#141415] hover:border-reddit_text">
          <div className="relative flex max-h-[800px] rounded-[6px] md:pl-10">
            <div className="absolute left-0 top-0 box-border hidden w-10 flex-col items-center border-l-4 border-solid border-transparent py-2 pr-1 md:flex">
              <div className="hidden flex-col items-center md:flex"></div>
            </div>
            <div className="w-full bg-reddit_dark-brighter pt-2">
              <div className="relative mx-2 mb-2 flex items-start text-[12px] leading-4">
                <div className="flex-none align-baseline">
                  <div className="mr-1 inline-block h-5 w-5 rounded-full bg-[#4c075a] align-middle">
                    <Image role={'presentation'} src={tweet.user_avatar} alt="twitter_user_image" className="rounded-full" width={20} height={20} />
                  </div>
                </div>
                <div className="flex flex-shrink flex-grow flex-wrap items-center overflow-hidden">
                  <div className="inline items-center leading-4">
                    <div className="inline-block flex-none">
                      <span className="ml-1 text-sm font-bold leading-6">
                        {username}
                        {` - `}
                      </span>
                    </div>
                    <span className="ml-1 text-xs font-bold leading-6 text-reddit_text-darker">@{screen_name}</span>
                    <ReactTimeago date={created_at} className="ml-1 text-ellipsis text-xs leading-6 text-reddit_text-darker" />
                  </div>
                </div>
              </div>
              <div className="mx-2">
                <div className="inline align-baseline">
                  <ReactLinkify
                    componentDecorator={(decoratedHref, decoratedText, key) => (
                      <a className="text-reddit_blue" target={'_blank'} href={decoratedHref} key={key} rel={'noopener nofollow ugc noreferrer'}>
                        {decoratedText}
                      </a>
                    )}
                  >
                    <h1 className="mb-4 break-words text-lg">{title}</h1>
                  </ReactLinkify>
                </div>
              </div>
              <div className="relative mt-2 max-h-[512px] overflow-hidden">
                {type === 'photo' && image && width && height && <Image src={image} height={height} alt="Tweet Image" width={width} />}
                {type === 'video' && video && image && width && height && (
                  <div className="w-full pb-[105.35%]">
                    <div className="absolute top-0 left-0 bottom-0 right-0">
                      <Video Logo={LOGO} url={video} poster={image} scroll={true} />
                    </div>
                  </div>
                )}
              </div>
              <div className="flex h-[40px] flex-row px-[2px]">
                <div className="flex flex-grow items-stretch overflow-hidden pr-2 pl-1 text-[12px] font-bold leading-4 text-reddit_text-darker">
                  <div className="mr-1 flex items-center">
                    <button
                      className="flex h-full items-center rounded-[2px] py-2 px-3 hover:bg-reddit_dark-brightest"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        if (showSubmit) {
                          setShowSubmit(false)
                        } else {
                          doTranslate()
                        }
                      }}
                    >
                      <span className="max-h-[36px] overflow-hidden text-ellipsis text-left leading-3">Magic</span>
                    </button>
                    <button className="flex h-full items-center rounded-[2px] py-2 px-3 hover:bg-reddit_dark-brightest" type="button">
                      <span className="flex max-h-[36px] items-center overflow-hidden text-ellipsis text-left leading-3">
                        <RetweetIcon className="mr-[10px] h-5 w-5" />
                        {retweet_count}
                      </span>
                    </button>
                    <button className="flex h-full items-center rounded-[2px] py-2 px-3 hover:bg-reddit_dark-brightest" type="button">
                      <span className="flex max-h-[36px] items-center overflow-hidden text-ellipsis text-left leading-3">
                        <HeartIcon className="mr-[10px] h-5 w-5" />
                        {like_count}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showSubmit && <SubmitLayout newTweet={newTweet} />}
        </div>
      </div>
    </div>
    ))} */}
    </>
  )
}

export default TwitterPage