'use client'
import Link from "next/link";
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const MainButtonNav = ({ title }: { title: string }) => {
    const [show, setShow] = useState(false)

    const clickButton = () => {
        setShow(!show)
    }

  return (
    <div className="col-start-2 row-start-1 flex flex-wrap gap-4 visible relative z-[1]">
      <button
        type="button"
        className="flex items-center rounded-full border-0 h-10 p-3 font-semibold text-[14px] text-bbaby-text leading-5 bg-[#0045AC]"
        onClick={clickButton}
      >
        <span className="flex items-center">
          <span className="px-2">{title}</span>
        </span>
        <span className="inline-block mr-1">
          <RiArrowDownSLine className="inline-block w-4 h-4" />
        </span>
      </button>
      <ul className={`${show ? 'block' : 'hidden'} absolute z-[1] top-[100%]  `}>
        <li className="list-none">
            <Link href={'/'}>
                <span>
                    <span>
                        Cookie Notice
                    </span>
                </span>
            </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainButtonNav;
