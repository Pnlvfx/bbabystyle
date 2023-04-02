'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const GovernanceTab = () => {
  const menu = [
    { title: 'Bbaby', url: '/governance/bbaby', url2: '/governance' },
    { title: 'Twitter', url: '/governance/twitter/english' },
    { title: 'News', url: '/governance/news' },
    { title: 'Reddit', url: '/governance/reddit' },
    { title: 'TikTak', url: '/governance/tiktak' },
    { title: 'TikTok', url: '/governance/tiktok' },
    { title: 'Quora', url: '/governance/quora' },
  ]
  const pathname = usePathname()

  return (
    <div className="mb-3 flex items-center justify-center rounded-[6px] overflow-y-hidden overflow-x-scroll md:overflow-x-hidden border border-bbaby-border bg-bbaby-brighter text-[14px]">
      <div className="flex w-full items-center justify-center">
        {menu.map((m, index) => (
          <Link
            key={index}
            href={m.url}
            shallow={true}
            className={`${pathname.match(m.url) || pathname === m.url2 ? 'font-extrabold text-bbaby-text' : 'text-bbaby-text_darker'}`}
          >
            <p className={`mx-3 py-3`}>{m.title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GovernanceTab
