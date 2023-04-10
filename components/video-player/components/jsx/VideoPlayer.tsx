import React, { MouseEvent, useState } from 'react'
import { formatDuration, handlePlayPause } from '../hooks/hooks'
import { useProvider } from './VideoPlayerContext'
import Controls from './controls/Controls'
import '../css/video.css'
import { VideoPlayerProps } from '../..'

const VideoPlayer = ({ url, poster, Logo }: VideoPlayerProps) => {
  const { player, videoContainerRef, setIsPlaying, setIsEnded, setPlayed, setProgressPosition, setDuration, volumeSlider, setIsMuted, setControls } =
    useProvider()
  const [loading, setLoading] = useState(false)

  const playFromContainer = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    handlePlayPause(player)
  }

  const onPlay = () => {
    setIsPlaying(true)
    setIsEnded(false)
    setLoading(false)
  }

  const onLoading = () => {
    setLoading(true)
  }

  const onPause = () => {
    setIsPlaying(false)
  }

  const onEnded = () => {
    setIsPlaying(false)
    setIsEnded(true)
  }

  const onTimeUpdate = () => {
    if (!player.current) return
    setPlayed(formatDuration(player.current.currentTime))
    const percent = player.current.currentTime / player.current.duration
    setProgressPosition(percent)
  }

  const onLoadedMetadata = () => {
    if (!player.current) return
    const d = formatDuration(player.current?.duration)
    setDuration(d)
    setLoading(false)
  }

  const onVolumeChange = () => {
    if (!volumeSlider.current || !player.current) return
    volumeSlider.current.style.height = `${player.current.volume * 100}%`
    if (player.current.muted || player.current.volume === 0) {
      volumeSlider.current.style.height = '0'
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  /// CONTAINER

  const onVideo = () => {
    setControls(true)
  }

  const outVideo = () => {
    setControls(false)
  }

  return (
    <div className="container" onMouseEnter={onVideo} onMouseLeave={outVideo} ref={videoContainerRef} onClick={playFromContainer}>
      <video
        className="video"
        ref={player}
        poster={poster}
        autoPlay={false}
        muted
        playsInline
        onPlay={onPlay}
        // onWaiting={onLoading} // important
        onLoadStart={onLoading}
        onPause={onPause}
        onEnded={onEnded}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onVolumeChange={onVolumeChange}
      >
        {Array.isArray(url) ? url.map((source, index) => <source key={index} src={source.url} />) : <source src={url} />}
      </video>
      <Controls loading={loading} Logo={Logo} />
    </div>
  )
}

export default VideoPlayer
