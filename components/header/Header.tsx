import Image from 'next/image'
import Link from 'next/link'
import { LOGO } from '../../config/config'
import { TextLogo } from '../utils/svg/SVG'
import HeaderHome from './headerhome/HeaderHome'
import SearchBar from './search/SearchBar'
import LoginButtons from './buttons/LoginButtons'
import UserDropdownButton from './buttons/UserDropdownButton'
import NotificationButton from './buttons/NotificationButton'
import SubmitButton from './buttons/SubmitButton'
import GovButton from './buttons/GovButton'

interface HeaderProps {
  session: SessionProps | null
}

const Header = ({ session }: HeaderProps) => {
  return (
    <header id="myHeader" className="fixed inset-x-0 top-0 z-[80] mt-0 inline-flex h-12 flex-row items-center">
      <div className="box-border inline-flex grow flex-row items-center border-b border-bbaby-border bg-reddit_dark-brighter px-2 md:px-5">
        <div className="inline-flex grow items-center">
          <div className="inline-flex grow flex-row items-center">
            <div className="flex h-12 items-center" />
            <Link href={'/'} aria-label="Home" className="inline-flex flex-row items-center" scroll={true}>
              <div className="flex-none py-2 pl-0 pr-2">
                <Image src={LOGO} width={32} height={32} alt={'logo'} priority />
              </div>
              {!session?.device?.mobile ? (
                <TextLogo className="mr-5 hidden h-[18px] w-auto lg:block" />
              ) : (
                <TextLogo className="mr-5 block h-[18px] w-auto" />
              )}
            </Link>
            {session?.user && !session?.device?.mobile && (
              <div>
                <HeaderHome />
              </div>
            )}
            {!session?.device?.mobile && (
              <div className="mx-auto my-0 max-w-[690px] grow">
                <SearchBar />
              </div>
            )}
          </div>
        </div>
        <div className="inline-flex grow-0 flex-row items-center">
          <div className="flex flex-row items-center">
            {session?.user ? (
              <>
                {session.user.role === 1 && <GovButton />}
                <NotificationButton />
                <SubmitButton />
                <span className="h-8 md:ml-2" />
              </>
            ) : (
              <div className="hidden flex-row items-center sm:flex">
                <LoginButtons />
              </div>
            )}
            <div id="verification" className="flex flex-row items-center">
              <div id="user_dropdown">
                <UserDropdownButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
