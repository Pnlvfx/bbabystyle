import Image from "next/image";
import Link from "next/link";
import { LOGO } from "../../config/config";
import { PlusIcon, TextLogo } from "../utils/svg/SVG";
import HeaderHome from "./HeaderHome";
import SearchBar from "./search/SearchBar";
import { TbBabyCarriage } from "react-icons/tb";
import NotificationButton from "./NotificationButton";
import LoginButtons from "./LoginButtons";

interface HeaderProps {
  session: SessionProps | null;
}

const Header = ({ session }: HeaderProps) => {
  const className = {
    buttonHeader: "items-center justify-center hover:bg-reddit_dark-brightest h-[32px] w-[32px] flex",
    icon: "h-[20px] w-[20px] text-[#D7DADC] leading-5 align-middle",
  };
  return (
    <header id="myHeader" className={`fixed left-0 right-0 top-0 z-30 inline-flex h-12 items-center bg-reddit_dark-brighter`}>
      <div className="box-border inline-flex h-full flex-grow items-center border-b border-reddit_border px-2 lg:px-5">
        <div className="inline-flex h-full flex-grow items-center">
          <Link href={"/"} aria-label="Home" className="inline-flex flex-row items-center">
            <Image src={LOGO} alt="logo" width={32} height={32} className="mr-1 pl-0 lg:mr-2" />
            <TextLogo className="hidden lg:block" />
          </Link>
          {session?.user && !session?.device?.mobile && <HeaderHome />}
          <SearchBar />
          {session?.user ? (
            <div id="user_icons" className="flex items-center space-x-2">
              {session?.user.role === 1 && (
                <span className="h-8">
                  <Link href={"/governance"} className={className.buttonHeader}>
                    <TbBabyCarriage className={className.icon} />
                  </Link>
                </span>
              )}
              <NotificationButton />
              <span className="ml-2 h-8">
                <Link aria-label="Create Post" className={className.buttonHeader} href={"/submit"}>
                  <PlusIcon className={className.icon} />
                </Link>
              </span>
            </div>
          ) : (
            <div className={`mx-2 hidden flex-none sm:block`}>
              <LoginButtons />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
