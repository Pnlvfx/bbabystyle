'use client'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import quoraapis from '../../API/quoraapis/quoraapis'
import { QuoraProps } from '../../API/quoraapis/types/qtypes'
import Quora from './Quora'

interface QuoraFeedProps {
  quoras: QuoraProps[]
}

const TwitterFeed = ({ quoras: ssr_quoras }: QuoraFeedProps) => {
  const [quoras, setQuoras] = useState(ssr_quoras)
  const [hasMore, setHasMore] = useState(true)

  const getMore = async () => {
    try {
      const newQuoras = await quoraapis.getQuoras(quoras.length, 10)
      if (newQuoras.length < 10) {
        setHasMore(false)
      }
      setQuoras([...quoras, ...newQuoras])
    } catch (err) {}
  }

  return (
    <>
      <InfiniteScroll dataLength={quoras.length} next={getMore} hasMore={hasMore} loader={<div></div>} endMessage={<></>}>
        {quoras.map((quora, index) => (
          <div key={index}>
            <div>
              <div className="rounded-md border mb-3 w-full border-bbaby-border bg-[#141415] hover:border-bbaby-text">
                <Quora quora={quora} />
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </>
  )
}

export default TwitterFeed
