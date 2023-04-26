import '../../css/controls.css'
import React, { MouseEvent } from 'react'
import { LoadingIcon, VideoCenterPlayIcon } from '../../SVG/SVG'
import { useProvider } from '../VideoPlayerContext'
import { handlePlayPause } from '../../hooks/hooks'
import ReplayButton from './controls/ReplayButton'
import DownControls from './controls/DownControls'

interface VideoControls {
  loading: boolean
  Logo: string
}

const Controls = ({ loading, Logo }: VideoControls) => {
  const { isPlaying, isEnded, player } = useProvider()

  const playVideo = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    handlePlayPause(player)
  }

  return (
    <>
      <div className="absolute flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.4)]">{isEnded && !loading && <ReplayButton />}</div>
      {!isPlaying && !isEnded && !loading && (
        <div onClick={playVideo} className="absolute left-[50%] top-[50%] z-10 ml-[-30px] mt-[-30px] cursor-pointer">
          <VideoCenterPlayIcon />
        </div>
      )}
      {loading && (
        <div className="absolute left-[50%] top-[50%] z-10 ml-[-30px] mt-[-30px] cursor-pointer">
          <LoadingIcon className="mx-auto h-[50px] w-[50px] animate-spin" />
        </div>
      )}
      <DownControls Logo={Logo} />
    </>
  )
}

export default Controls
