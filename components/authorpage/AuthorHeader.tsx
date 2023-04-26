'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './user-page.module.css'

const input = ['OVERVIEW', 'POSTS', 'COMMENTS']

const AuthorHeader = () => {
  const [active, setActive] = useState(0)
  const pathname = usePathname()

  return (
    <>
      <div className={styles.userHeader}>
        <div className={styles.userHeader2}>
          <div className={`${styles.userHeader3} ${styles.userHeader3_1}`}>
            <div className={styles.userHeader4}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthorHeader
