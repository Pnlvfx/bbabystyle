import React, { createContext, Dispatch, MutableRefObject, ReactNode, SetStateAction, useContext, useRef, useState } from 'react'
import { VideoPlayerProps } from '../..'

interface VideoPlayerContextProps {
  player: MutableRefObject<HTMLVideoElement | null>
  url:
    | string
    | [
        {
          url: string
        }
      ]
  poster: string
  timelineRef: MutableRefObject<HTMLDivElement | null>
  duration: string
  setDuration: Dispatch<SetStateAction<string>>
  played: string
  setPlayed: Dispatch<SetStateAction<string>>
  isPlaying: boolean
  setIsPlaying: Dispatch<SetStateAction<boolean>>
  progressPosition: number
  setprogressPosition: Dispatch<SetStateAction<number>>
  videoContainerRef: MutableRefObject<HTMLDivElement | null>
  timelineBall: MutableRefObject<HTMLDivElement | null>
  previewPositionRef: MutableRefObject<HTMLDivElement | null>
  isEnded: boolean
  setIsEnded: Dispatch<SetStateAction<boolean>>
  volumeSlider: MutableRefObject<HTMLDivElement | null>
  volumeSliderContainer: MutableRefObject<HTMLDivElement | null>
  isMuted: boolean
  setIsMuted: Dispatch<SetStateAction<boolean>>
  controls: boolean
  setControls: Dispatch<SetStateAction<boolean>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
  Logo: string
}

const VideoPlayerContext = createContext<VideoPlayerContextProps | Record<string, never>>({})

interface VideoPlayerContextProviderProps extends VideoPlayerProps {
  children: ReactNode
}

export const VideoPlayerContextProvider = ({ children, url, poster, Logo }: VideoPlayerContextProviderProps) => {
  const previewPositionRef = useRef(null)
  const volumeSlider = useRef(null)
  const volumeSliderContainer = useRef(null)
  const timelineBall = useRef(null)
  const videoContainerRef = useRef(null)
  const player = useRef(null)
  const timelineRef = useRef(null)
  const [progressPosition, setprogressPosition] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState('0:00')
  const [played, setPlayed] = useState('0:00')
  const [isEnded, setIsEnded] = useState(false)
  const [controls, setControls] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  return (
    <VideoPlayerContext.Provider
      value={{
        player,
        url,
        poster,
        timelineRef,
        duration,
        setDuration,
        played,
        setPlayed,
        isPlaying,
        setIsPlaying,
        progressPosition,
        setprogressPosition,
        videoContainerRef,
        timelineBall,
        previewPositionRef,
        isEnded,
        setIsEnded,
        volumeSlider,
        volumeSliderContainer,
        isMuted,
        setIsMuted,
        controls,
        setControls,
        loading,
        setLoading,
        Logo,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  )
}

export const useProvider = () => {
  const context = useContext(VideoPlayerContext)
  if (!context) {
    throw new Error('VideoPlayer component must be used with VideoPlayerContextProvider component')
  }
  return context
}
