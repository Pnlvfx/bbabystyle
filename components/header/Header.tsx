import Image from "next/image";
import Link from "next/link";
import { LOGO } from "../../config/config";
import { TextLogo } from "../utils/svg/SVG";
import HeaderHome from "./headerhome/HeaderHome";
import SearchBar from "./search/SearchBar";
import LoginButtons from "./buttons/LoginButtons";
import UserDropdownButton from "./buttons/UserDropdownButton";
import NotificationButton from "./buttons/NotificationButton";
import SubmitButton from "./buttons/SubmitButton";
import GovButton from "./buttons/GovButton";

interface HeaderProps {
  session: SessionProps | null;
}

const Header = ({ session }: HeaderProps) => {
  return (
    <header
      id="myHeader"
      className="mt-0 h-12 items-center inline-flex flex-row z-[80] right-0 left-0 top-0 fixed"
    >
      <div className="items-center inline-flex bg-reddit_dark-brighter box-border border-b border-reddit_border flex-grow flex-row px-2 md:px-5">
        <div className="inline-flex flex-grow items-center">
          <div className="inline-flex items-center flex-row flex-grow">
            <div className="h-12 items-center flex" />
            <Link
              href={"/"}
              aria-label="Home"
              className="inline-flex flex-row items-center"
            >
              <div className="pl-0 pr-2 py-2 flex-none">
                <Image
                  src={LOGO}
                  width={32}
                  height={32}
                  alt={"logo"}
                />
              </div>
              <TextLogo className="hidden lg:block h-[18px] mr-5 w-auto" />
            </Link>
            {session?.user && !session?.device?.mobile && (
              <div>
                <HeaderHome />
              </div>
            )}
            <div className="flex-grow my-0 max-w-[690px] mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="items-center flex-row flex-grow-0 inline-flex">
          <div className="flex items-center flex-row">
            {session?.user ? (
              <>
                {session.user.role === 1 && <GovButton />}
                <NotificationButton />
                <SubmitButton />
                <span className="md:ml-2 h-8" />
              </>
            ) : (
              <div className="hidden sm:flex items-center flex-row">
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
  );
};

export default Header;
