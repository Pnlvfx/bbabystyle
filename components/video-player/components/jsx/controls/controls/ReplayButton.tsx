import { MouseEvent } from 'react'
import { VideoCenterReplayIcon } from '../../../SVG/SVG'
import { useProvider } from '../../VideoPlayerContext'

const ReplayButton = () => {
  const { player, setIsPlaying, setIsEnded } = useProvider()

  const replayVideo = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!player.current) return
    player.current.currentTime = 0
    player.current.play()
    setIsPlaying(true)
    setIsEnded(false)
  }

  return (
    <div className="h-auto w-auto opacity-95">
      <button className="flex items-center justify-center outline-none bg-transparent" onClick={replayVideo}>
        <VideoCenterReplayIcon className="w-[50px] h-[50px] overflow-hidden" />
        <span
          className="flex items-center text-[12px] font-bold text-white ml-[10px] text-center leading-6"
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
