import TwitterSortButton from '../../../../components/governance/twitter/TwitterSortButton'
import TwitterTab from '../../../../components/governance/twitter/TwitterTab'
import TwitterWidget from '../../../../components/governance/twitter/TwitterWidget'
import Widget from '../../../../components/widget/Widget'

const TwitterLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="mx-auto flex max-w-full justify-center md:px-6 md:py-5">
      <div className="w-full lg:w-[640px]">
        <div className="mb-4">
          <TwitterTab />
        </div>
        <div className="mb-4">
          <TwitterSortButton />
        </div>
        <ul>{children}</ul>
      </div>
      <div className="ml-6 hidden lg:block">
        <Widget>
          <TwitterWidget />
        </Widget>
      </div>
    </div>
  )
}

export default TwitterLayout
