import '../../css/controls.css'
import React, { MouseEvent } from 'react'
import { LoadingIcon, VideoCenterPlayIcon } from '../../SVG/SVG'
import { useProvider } from '../VideoPlayerContext'
import { handlePlayPause } from '../../hooks/hooks'
import ReplayButton from './controls/ReplayButton'
import DownControls from './controls/DownControls'

const Controls = () => {
  const { isPlaying, isEnded, player, loading } = useProvider()

  const playVideo = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    handlePlayPause(player)
  }

  return (
    <>
      <div className="absolute flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.4)]">{isEnded && !loading && <ReplayButton />}</div>
      {!isPlaying && !isEnded && !loading && (
        <div onClick={playVideo} className="absolute top-[50%] left-[50%] ml-[-30px] mt-[-30px] z-10 cursor-pointer">
          <VideoCenterPlayIcon />
        </div>
      )}
      {loading && (
        <div className="absolute top-[50%] left-[50%] ml-[-30px] mt-[-30px] z-10 cursor-pointer">
          <LoadingIcon className="animate-spin mx-auto w-[50px] h-[50px]" />
        </div>
      )}
      <DownControls />
    </>
  )
}

export default Controls
