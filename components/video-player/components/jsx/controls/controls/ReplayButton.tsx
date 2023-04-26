import { MouseEvent } from 'react'
import { VideoCenterReplayIcon } from '../../../SVG/SVG'
import { useProvider } from '../../VideoPlayerContext'

const ReplayButton = () => {
  const { player, setIsEnded } = useProvider()

  const replayVideo = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!player.current) return
    player.current.currentTime = 0
    player.current.play()
    setIsEnded(false)
  }

  return (
    <div className="h-auto w-auto opacity-95">
      <button className="flex items-center justify-center bg-transparent outline-none" onClick={replayVideo}>
        <VideoCenterReplayIcon className="h-[50px] w-[50px] overflow-hidden" />
        <span
          className="ml-[10px] flex items-center text-center text-[12px] font-bold leading-6 text-white"
          style={{
            letterSpacing: '.5px',
          }}
        >
          REPLAY VIDEO
        </span>
      </button>
    </div>
  )
}

export default ReplayButton
