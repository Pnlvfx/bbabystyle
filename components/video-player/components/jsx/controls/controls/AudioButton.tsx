import { VideoAudioIcon, VideoMuteIcon } from '../../../SVG/SVG'
import { useProvider } from '../../VideoPlayerContext'

const AudioButton = () => {
  const { player, isMuted } = useProvider()
  const toggleMute = () => {
    if (!player.current) return
    player.current.muted = !player.current.muted
  }
  return (
    <button
      aria-label="Video Sound"
      onClick={(e) => {
        e.preventDefault()
        toggleMute()
        e.stopPropagation()
      }}
      className="flex h-9 w-9 items-center justify-center outline-none"
    >
      <VideoMuteIcon
        className="h-[18px] w-[18px] transition-opacity"
        style={{ display: isMuted ? 'block' : 'none', opacity: isMuted ? '100' : '0' }}
      />
      <VideoAudioIcon
        className="h-[18px] w-[18px] transition-opacity"
        style={{ display: isMuted ? 'none' : 'block', opacity: isMuted ? '0' : '100' }}
      />
    </button>
  )
}

export default AudioButton
