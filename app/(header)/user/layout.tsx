import AuthorHeader from '../../../components/authorpage/AuthorHeader'
import BestPost from '../../../components/post/BestPost'
import Donations from '../../../components/widget/Donations'
import PolicyWidget from '../../../components/widget/PolicyWidget'
import TopCommunities from '../../../components/widget/topcommunities/TopCommunities'
import Widget from '../../../components/widget/Widget'
import { deviceIsMobile } from '../../../components/API/config/serverConfig'

const UserLayout = ({ children }: ChildrenProps) => {
  const isMobile = deviceIsMobile()
  return (
    <>
      <AuthorHeader />
      <div className="mx-auto flex max-w-full justify-center md:px-6 md:py-5">
        <div className="w-full lg:w-[640px]">
          <div className="mb-4">
            <BestPost />
          </div>
          {children}
        </div>
        {!isMobile && (
          <div className="ml-6 hidden lg:block">
            <Widget>
              <TopCommunities />
            </Widget>
            <Donations />
            <PolicyWidget />
          </div>
        )}
      </div>
    </>
  )
}

export default UserLayout
