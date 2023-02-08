'use client';
import Link from "next/link";
import { useState } from "react";
import style from './search-page.module.css';


interface SearchPageHeader {
  item: {
    name: string
    key: string
  }
  index: number
}

const SearchPageHeader = ({item, index}: SearchPageHeader) => {
  const [active, setActive] = useState("posts");
  return (
    <Link 
      key={index} 
      href={`/search?type=${item.name.toLowerCase()}`}
      role={'tab'}
      aria-selected={active === item.key ? true : false}
      className={style.searchPageLinks}
    >
        <button className={[style.searchPageButtons, style.searchPageButtons2, active !== item.key && style.searchPageButtonsNotActive].join(' ')}>
          {item.name}
        </button>
    </Link>
  )
}

export default SearchPageHeader;
