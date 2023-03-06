'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const SettingsTab = () => {
  const pathname = usePathname()
  const [active, setActive] = useState(pathname)

  useEffect(() => {
    setActive(pathname)
  }, [pathname])

  return (
    <div role={'tablist'} className="max-w-[1200px] mx-auto px-5 border-b border-bbaby-border">
      <Link
        href={'/settings/account'}
        className={`${
          active === '/settings' || active === '/settings/account'
            ? 'border-b-[3px] border-[#d7dadc] text-bbaby-text'
            : 'text-bbaby-text_darker border-b-none'
        } text-[14px] font-bold inline-block leading-[unset] mr-2 pt-[15px] p-3`}
        role="tab"
      >
        Account
      </Link>
      <Link
        href={'/settings/profile'}
        className={`${
          active === '/settings/profile' ? 'border-b-[3px] border-[#d7dadc] text-bbaby-text' : 'text-bbaby-text_darker border-b-none'
        } text-[14px] font-bold inline-block leading-[unset] mr-2 pt-[15px] p-3`}
        role="tab"
      >
        Profile
      </Link>
      <Link
        href={'/settings/privacy'}
        className={`${
          active === '/settings/privacy' ? 'border-b-[3px] border-[#d7dadc] text-bbaby-text' : 'text-bbaby-text_darker border-b-none'
        } text-[14px] font-bold inline-block leading-[unset] mr-2 pt-[15px] p-3`}
        role="tab"
      >
        Safety & Privacy
      </Link>
    </div>
  )
}

export default SettingsTab
