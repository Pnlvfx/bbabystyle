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
      className="outline-none w-9 h-9 flex justify-center items-center"
    >
      <VideoMuteIcon
        className="w-[18px] h-[18px] transition-opacity"
        style={{ display: isMuted ? 'block' : 'none', opacity: isMuted ? '100' : '0' }}
      />
      <VideoAudioIcon
        className="w-[18px] h-[18px] transition-opacity"
        style={{ display: isMuted ? 'none' : 'block', opacity: isMuted ? '0' : '100' }}
      />
    </button>
  )
}

export default AudioButton
