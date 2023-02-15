import TwitterSortButton from "../../../../components/governance/twitter/TwitterSortButton"
import TwitterTab from "../../../../components/governance/twitter/TwitterTab"

const TwitterLayout = ({children}: ChildrenProps) => {
  return (
    <div id="diplay_tweets" className="mx-[2px] flex justify-center lg:mx-10">
      <div className="w-full lg:w-[640px]">
        <div className="mb-4">
          <TwitterTab />
        </div>
        <div className="mb-4">
          <TwitterSortButton />
        </div>
        <ul>
          {children}
        </ul>
        <div className="hidden lg:block">Twitter Widget</div>
      </div>
    </div>
  )
}

export default TwitterLayout