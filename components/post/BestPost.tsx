'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaChartLine, FaHotjar, FaSpaceShuttle } from 'react-icons/fa'
import { TbCircleTriangle } from 'react-icons/tb'

const menus = [
  { name: 'best', Icon: FaSpaceShuttle },
  { name: 'hot', Icon: FaHotjar },
  { name: 'new', Icon: TbCircleTriangle },
  { name: 'top', Icon: FaChartLine },
]

const BestPost = () => {
  const pathname = usePathname()
  return (
    <div className="flex space-x-3 rounded-md border border-reddit_border bg-reddit_dark-brighter px-2 py-[13px]">
      {menus.map(({ name, Icon }, i) => {
        const active = pathname === `/${name}`
        return (
          <Link
            key={i}
            href={`/${name}`}
            className={`${
              active ? 'bg-reddit_dark-brightest font-bold text-reddit_text' : 'text-reddit_text-darker'
            } flex items-center space-x-1 rounded-full px-3 py-1 hover:bg-reddit_dark-brightest`}
          >
            <Icon className="h-5 w-5" />
            <p className="text-sm">{name}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default BestPost
