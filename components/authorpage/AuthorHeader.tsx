'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { UserMenuButton } from '../header/usermenu/buttons/notuser/ThemeButton'

const AuthorHeader = ({ styles }: UserMenuButton) => {
  const [active, setActive] = useState(0)
  const input = ['OVERVIEW', 'POSTS', 'COMMENTS']
  const pathname = usePathname()

  return (
    <>
      {input.map((i, index) => (
        <Link
          onClick={() => {
            if (active === index) return
            setActive(index)
          }}
          className={`${styles.userHeaderLinks} ${active === index && styles.userHeaderLinksActive}`}
          key={index}
          href={pathname}
        >
          {i}
        </Link>
      ))}
    </>
  )
}

export default AuthorHeader
