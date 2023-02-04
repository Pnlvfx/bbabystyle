import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSpaceShuttle } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";

const BestPost = () => {
  const [active, setActive] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.match("news")) {
      setActive(1);
    } else if (pathname?.match("/" || "/best")) {
      setActive(0);
    }
  }, [pathname]);
  return (
    <div className="flex space-x-3 rounded-md border border-reddit_border bg-reddit_dark-brighter py-[13px] px-2">
      <Link
        href={"/"}
        className={`text-reddit_text-darker ${
          active === 0 && "bg-reddit_dark-brightest font-bold text-reddit_text"
        } rounded-full py-1 px-3 hover:bg-reddit_dark-brightest flex items-center space-x-1`}
      >
        <FaSpaceShuttle className="h-5 w-5 -rotate-90" />
        <p className="text-sm">Best</p>
      </Link>
      <Link
        href={"/news"}
        className={`text-reddit_text-darker rounded-full py-1 px-3 hover:bg-reddit_dark-brightest ${
          active === 1 && "bg-reddit_dark-brightest font-bold text-reddit_text"
        } flex items-center space-x-1`}
      >
        <IoNewspaperOutline className="h-5 w-5 -rotate-90" />
        <p className="text-sm">News</p>
      </Link>
    </div>
  );
};

export default BestPost;
