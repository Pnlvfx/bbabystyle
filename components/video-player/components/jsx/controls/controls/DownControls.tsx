import Image from 'next/image'
import Link from 'next/link'
import { VideoFullscreenIcon, VideoPauseFromBarIcon, VideoPlayFromBarIcon, VideoSettingsIcon } from '../../../SVG/SVG'
import Slider from '../Slider'
import AudioButton from './AudioButton'
import { useProvider } from '../../VideoPlayerContext'
import { MouseEvent } from 'react'
import { handlePlayPause } from '../../../hooks/hooks'

const DownControls = ({ Logo }: { Logo: string }) => {
  const { controls, isPlaying, volumeSlider, volumeSliderContainer, played, duration, videoContainerRef, player } = useProvider()

  const toggleFullScreenMode = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (!videoContainerRef.current) return
    if (document.fullscreenElement == null) {
      videoContainerRef.current.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const playVideo = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    handlePlayPause(player)
  }

  return (
    <div className="absolute inset-x-0 bottom-0 m-0 flex items-end justify-between p-2 align-baseline">
      <div style={{ background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, .5)' }} className="absolute inset-x-0 bottom-0 h-full" />
      <div className={`video-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'} ml-1`}>
        <div>
          <Link href={'/'} className="m-0 flex h-[36px] w-[36px] items-center justify-center p-0 align-baseline">
            <div className="flex h-6 w-6 items-center justify-center">
              <Image src={Logo} height={24} width={24} alt="Logo" />
            </div>
          </Link>
        </div>
      </div>
      <div className={`video-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'}`}>
        <button onClick={playVideo} aria-label="Play" className="flex h-9 w-9 items-center justify-center outline-none">
          {isPlaying ? <VideoPauseFromBarIcon className="block h-[18px] w-[18px]" /> : <VideoPlayFromBarIcon className="block h-[18px] w-[18px]" />}
        </button>
      </div>
      <div className={`time-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'}`}>{played}</div>
      <Slider />
      <div className={`time-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'}`}>{duration}</div>
      <div className={`video-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'}`}>
        <div className="absolute">
          <div></div>
        </div>
        <button className="flex h-9 w-9 items-center justify-center outline-none" aria-label="settings" aria-haspopup="true">
          <VideoSettingsIcon className="h-[18px] w-[18px]" />
        </button>
      </div>
      <div className={`video-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'}`}>
        <button onClick={toggleFullScreenMode} className="flex h-9 w-9 items-center justify-center outline-none" aria-label="Fullscreen">
          <VideoFullscreenIcon className="h-[18px] w-[18px]" />
        </button>
      </div>
      <div className={`video-button [&>div:nth-child(1)]:hover:md:block [&>div:nth-child(1)]:hover:md:opacity-100`}>
        <div
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className="absolute bottom-[100%] m-0 hidden h-[96px] w-6 cursor-pointer rounded-[4px] bg-[rgba(0,0,0,.6)] opacity-0 transition-opacity"
        >
          <div ref={volumeSliderContainer} className="absolute inset-x-0 inset-y-2 mx-auto my-[6px] w-1 rounded-sm bg-[#ffffff80]">
            <div ref={volumeSlider} className="absolute inset-x-0 bottom-0 mx-auto my-0 w-1 rounded-sm bg-[#0079d3]" style={{ height: '0%' }}>
              <div className="absolute left-[-4px] top-[-6px] mx-auto h-3 w-3 bg-[#fff]" style={{ borderRadius: '50%' }} />
            </div>
          </div>
        </div>
        <AudioButton />
      </div>
    </div>
  )
}

export default DownControls
