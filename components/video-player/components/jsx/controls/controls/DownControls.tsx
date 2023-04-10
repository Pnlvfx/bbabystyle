import Image from 'next/image'
import Link from 'next/link'
import { VideoFullscreenIcon, VideoPauseFromBarIcon, VideoPlayFromBarIcon, VideoSettingsIcon } from '../../../SVG/SVG'
import Slider from '../Slider'
import AudioButton from './AudioButton'
import { useProvider } from '../../VideoPlayerContext'
import { MouseEvent } from 'react'
import { handlePlayPause } from '../../../hooks/hooks'

const DownControls = () => {
  const { controls, Logo, isPlaying, volumeSlider, volumeSliderContainer, played, duration, videoContainerRef, player } = useProvider()

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
    <div className="absolute flex justify-between items-end bottom-0 left-0 right-0 p-2 align-baseline m-0">
      <div style={{ background: 'linear-gradient(180deg, transparent, rgba(0, 0, 0, .5)' }} className="absolute h-full left-0 right-0 bottom-0" />
      <div className={`video-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'} ml-1`}>
        <div>
          <Link href={'/'} className="m-0 p-0 flex justify-center items-center w-[36px] h-[36px] align-baseline">
            <div className="w-6 h-6 flex justify-center items-center">
              <Image src={Logo} height={24} width={24} alt="Logo" />
            </div>
          </Link>
        </div>
      </div>
      <div className={`video-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'}`}>
        <button onClick={playVideo} aria-label="Play" className="outline-none w-9 h-9 flex justify-center items-center">
          {isPlaying ? <VideoPauseFromBarIcon className="h-[18px] w-[18px] block" /> : <VideoPlayFromBarIcon className="h-[18px] w-[18px] block" />}
        </button>
      </div>
      <div className={`time-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'}`}>{played}</div>
      <Slider />
      <div className={`time-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'}`}>{duration}</div>
      <div className={`video-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'}`}>
        <div className="absolute">
          <div></div>
        </div>
        <button className="outline-none w-9 h-9 flex justify-center items-center" aria-label="settings" aria-haspopup="true">
          <VideoSettingsIcon className="w-[18px] h-[18px]" />
        </button>
      </div>
      <div className={`video-button ${controls ? 'opacity-0 md:opacity-100' : 'opacity-0'}`}>
        <button onClick={toggleFullScreenMode} className="outline-none w-9 h-9 flex justify-center items-center" aria-label="Fullscreen">
          <VideoFullscreenIcon className="w-[18px] h-[18px]" />
        </button>
      </div>
      <div className={`video-button [&>div:nth-child(1)]:hover:md:block [&>div:nth-child(1)]:hover:md:opacity-100`}>
        <div
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className="rounded-[4px] absolute m-0 h-[96px] w-6 bottom-[100%] bg-[rgba(0,0,0,.6)] cursor-pointer hidden opacity-0 transition-opacity"
        >
          <div ref={volumeSliderContainer} className="bg-[#ffffff80] top-2 bottom-2 my-[6px] mx-auto w-1 absolute left-0 right-0 rounded-sm">
            <div ref={volumeSlider} className="bg-[#0079d3] absolute bottom-0 w-1 my-0 mx-auto left-0 right-0 rounded-sm" style={{ height: '0%' }}>
              <div className="absolute left-[-4px] top-[-6px] mx-auto w-3 h-3 bg-[#fff]" style={{ borderRadius: '50%' }} />
            </div>
          </div>
        </div>
        <AudioButton />
      </div>
    </div>
  )
}

export default DownControls
