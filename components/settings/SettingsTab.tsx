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
    <div role={'tablist'} className="mx-auto max-w-[1200px] border-b border-bbaby-border px-5">
      <Link
        href={'/settings/account'}
        className={`${
          active === '/settings' || active === '/settings/account'
            ? 'border-b-[3px] border-[#d7dadc] text-bbaby-text'
            : 'border-none text-bbaby-text_darker'
        } mr-2 inline-block p-3 pt-[15px] text-[14px] font-bold leading-[unset]`}
        role="tab"
      >
        Account
      </Link>
      <Link
        href={'/settings/profile'}
        className={`${
          active === '/settings/profile' ? 'border-b-[3px] border-[#d7dadc] text-bbaby-text' : 'border-none text-bbaby-text_darker'
        } mr-2 inline-block p-3 pt-[15px] text-[14px] font-bold leading-[unset]`}
        role="tab"
      >
        Profile
      </Link>
      <Link
        href={'/settings/privacy'}
        className={`${
          active === '/settings/privacy' ? 'border-b-[3px] border-[#d7dadc] text-bbaby-text' : 'border-none text-bbaby-text_darker'
        } mr-2 inline-block p-3 pt-[15px] text-[14px] font-bold leading-[unset]`}
        role="tab"
      >
        Safety & Privacy
      </Link>
    </div>
  )
}

export default SettingsTab
