'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const MainButtonNav = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const titles = ['Bbaby Privacy Policy', 'Cookie Notice'];
  const title = pathname === '/policies/privacy-policy' ? titles[0] : titles[1];
  const title2 = pathname === '/policies/privacy-policy' ? titles[1] : titles[0];
  const url = pathname === '/policies/privacy-policy' ? '/policies/cookies' : '/policies/privacy-policy';

  const lists = [
    {
      name: title2,
      url,
    },
  ];

  const clickButton = () => {
    setShow(!show);
  };

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
      <ul className={`${show ? 'block' : 'hidden'} absolute z-[1] top-[100%] left-0 right-0 rounded`}>
        {lists.map((list, index) => (
          <li key={index} className="list-none">
            <Link className="flex justify-between gap-[1rem] border-4 border-transparent p-2" onClick={clickButton} href={list.url}>
              <span className="flex items-center">
                <span className='flex flex-col justify-center'>
                  <span className='inline-block text-[14px] text-bbaby-text_darker hover:text-bbaby-dark'>{list.name}</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainButtonNav;
