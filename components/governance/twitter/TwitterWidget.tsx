'use client'
import Link from 'next/link'
import { RiArrowUpSLine } from 'react-icons/ri'

const preferredUsers = [
  { name: 'spectatorindex', id: 1626294277 },
  { name: 'dwnews', id: 6134882 },
  { name: 'AZgeopolitics', id: 1312058894416515074 },
  { name: 'AnonOpsSE', id: 1009546724 },
  { name: 'DiscloseTV', id: 15392486 },
]

const TwitterWidget = () => {
  return (
    <>
      <div className="top-community">
        <h2 className="absolute bottom-2 left-4 text-[16px] font-bold leading-5">Top users</h2>
      </div>
      {preferredUsers.map((user, index) => (
        <Link key={index} href={`/governance/twitter/user/${user.id}`}>
          <div className="flex h-[50px] items-center p-1">
            <p className="mx-3 text-sm font-extrabold">{index + 1}</p>
            <RiArrowUpSLine className="mr-2 h-5 w-5 text-green-500" />
            <div className="rounded-full w-[30px] h-[30px] bg-[#045db0]" />
            <p className="ml-2 text-sm font-bold">{user.name}</p>
          </div>
        </Link>
      ))}
    </>
  )
}

export default TwitterWidget
