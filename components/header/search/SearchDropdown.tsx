import { useEffect, useRef, useState } from 'react'
import { ClickOutHandler } from 'react-clickout-ts'
import searchapis from '../../API/searchapis'
import { useModals } from '../../auth/modal/ModalsProvider'
import { useSession } from '../../auth/UserContextProvider'

type PositionProps = {
  left: number
  width: number
}

const SearchDropdown = () => {
  const [trends, setTrends] = useState<PostProps[]>([])
  const shouldRequest = useRef(true)
  const modals = useModals()
  const modalsRef = useRef(modals)
  const sessionRef = useRef(useSession())
  const [position, setPosition] = useState<PositionProps>({
    width: 0,
    left: 0,
  })

  useEffect(() => {
    if (sessionRef.current.session?.device?.mobile) return
    if (!shouldRequest.current) return
    shouldRequest.current = false
    const get = async () => {
      try {
        const t = await searchapis.searchTrend()
        setTrends(t)
      } catch (err) {}
    }
    get()
  }, [])

  useEffect(() => {
    //get modal position
    if (!modals.showSearch) return
    const searchForm = document.getElementById('searchDropdown')
    if (!searchForm) return
    setPosition({
      left: searchForm.offsetLeft,
      width: searchForm.offsetWidth,
    })
  }, [modals.showSearch])

  useEffect(() => {
    //close modal on resize
    const onResize = () => {
      modalsRef.current.setShowSearch(false)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  if (!modals.showSearch) return null

  return (
    <div>
      <ClickOutHandler
        onClickOut={() => {
          modals.setShowSearch(false)
        }}
      >
        <div
          className="border border-t-0 border-bbaby-border bg-bbaby-brighter right-0 mt-[-1px] rounded-b-[4px] max-h-[482px]"
          style={{
            position: 'fixed',
            zIndex: 100,
            left: position.left,
            top: 44.5,
            width: position.width,
            overflow: 'auto',
          }}
        >
          <div className="pb-2 pt-4 text-bbaby-text_darker text-[10px] font-bold leading-3 uppercase px-4">Trending today</div>
          {trends.length >= 1 && trends.map((trend, index) => <div key={index} />)}
        </div>
      </ClickOutHandler>
    </div>
  )
}

export default SearchDropdown
