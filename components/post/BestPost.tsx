'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine, FaHotjar, FaSpaceShuttle } from "react-icons/fa";
import { TbCircleTriangle } from "react-icons/tb";

const BestPost = () => {
  const pathname = usePathname();
  return (
    <div className="flex space-x-3 rounded-md border border-reddit_border bg-reddit_dark-brighter py-[13px] px-2">
      <Link
        href={"/best"}
        className={` ${
          pathname === '/' || pathname === '/best' ? "bg-reddit_dark-brightest font-bold text-reddit_text" : 'text-reddit_text-darker'
        } rounded-full py-1 px-3 hover:bg-reddit_dark-brightest flex items-center space-x-1`}
      >
        <FaSpaceShuttle className="h-5 w-5 -rotate-90" />
        <p className="text-sm">Best</p>
      </Link>
      <Link
        href={"/hot"}
        className={`rounded-full py-1 px-3 hover:bg-reddit_dark-brightest ${
          pathname === '/hot' ? "bg-reddit_dark-brightest font-bold text-reddit_text" : 'text-reddit_text-darker'
        } flex items-center space-x-1`}
      >
        <FaHotjar className="h-5 w-5" />
        <p className="text-sm">Hot</p>
      </Link>
      <Link
        href={"/new"}
        className={`rounded-full py-1 px-3 hover:bg-reddit_dark-brightest ${
          pathname === '/new' ? "bg-reddit_dark-brightest font-bold text-reddit_text" : 'text-reddit_text-darker'
        } flex items-center space-x-1`}
      >
        <TbCircleTriangle className="h-5 w-5" />
        <p className="text-sm">New</p>
      </Link>
      <Link
        href={"/top"}
        className={`rounded-full py-1 px-3 hover:bg-reddit_dark-brightest ${
          pathname === '/top' ? "bg-reddit_dark-brightest font-bold text-reddit_text" : 'text-reddit_text-darker'
        } flex items-center space-x-1`}
      >
        <FaChartLine className="h-5 w-5" />
        <p className="text-sm">Top</p>
      </Link>
    </div>
  );
};

export default BestPost;
