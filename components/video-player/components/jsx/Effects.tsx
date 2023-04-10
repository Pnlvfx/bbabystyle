import React, { ReactNode, useEffect } from 'react'
import { useProvider } from './VideoPlayerContext'

interface EffectsProps {
  children: ReactNode
}

const Effects = ({ children }: EffectsProps) => {
  const { player, setIsMuted, volumeSliderContainer, volumeSlider, timelineBall, setProgressPosition, timelineRef, previewPositionRef } =
    useProvider()

  let isScrabbing = false
  let wasPaused = false

  let isChangeVolume = false
  let isStillClicked = false

  const toggleScrubbing = (e: MouseEvent) => {
    const rect = timelineRef.current?.getBoundingClientRect()
    if (!rect?.x || !timelineBall.current || !player.current) return
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    isScrabbing = (e.buttons & 1) === 1
    timelineBall.current.style.opacity = '1'
    if (isScrabbing) {
      wasPaused = player.current.paused
      player.current.pause()
    } else {
      player.current.currentTime = percent * player.current.duration
      if (!wasPaused) player.current.play()
      setTimeout(() => {
        if (!timelineBall.current) return
        timelineBall.current.style.opacity = '0'
      }, 300)
    }
    handleTimelineUpdate(e)
  }

  const handleTimelineUpdate = (e: MouseEvent) => {
    if (!timelineRef.current || !previewPositionRef.current) return
    const rect = timelineRef.current.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
    previewPositionRef.current.style.width = `${percent * 100}%`

    if (isScrabbing) {
      e.preventDefault()
      setProgressPosition(percent)
    }
  }

  const documentMouseUP = (e: MouseEvent) => {
    if (isScrabbing) toggleScrubbing(e)
    if (isStillClicked) {
      e.preventDefault()
      e.stopPropagation()
      isChangeVolume = false
    }
  }

  const documentMouseMOVE = (e: MouseEvent) => {
    if (isScrabbing) handleTimelineUpdate(e)
  }

  const clickVolumeSlider = (e: MouseEvent) => {
    if (!volumeSliderContainer.current || !player.current || !volumeSlider.current) return
    e.preventDefault()
    isChangeVolume = true
    isStillClicked = true
    const rect = volumeSliderContainer.current.getBoundingClientRect()
    const percent = Math.min(Math.max(0, e.y - rect.y), rect.height) / rect.height
    const reverse = 1 - Math.abs(percent)
    player.current.volume = reverse
    player.current.muted = reverse === 0
    setIsMuted(reverse === 0)
    volumeSlider.current.style.height = `${reverse * 100}%`
  }

  const slideOnVolume = (e: MouseEvent) => {
    e.preventDefault()
    if (isChangeVolume) {
      if (!volumeSliderContainer.current || !player.current || !volumeSlider.current) return
      const rect = volumeSliderContainer.current.getBoundingClientRect()
      const percent = Math.min(Math.max(0, e.y - rect.y), rect.height) / rect.height
      const reverse = 1 - Math.abs(percent)
      player.current.volume = reverse
      player.current.muted = reverse === 0
      volumeSlider.current.style.height = `${reverse * 100}%`
    }
  }

  const addListeners = () => {
    //PROGRESS BAR
    timelineRef.current?.addEventListener('mousemove', handleTimelineUpdate) //preview
    timelineRef.current?.addEventListener('mousedown', toggleScrubbing) //progress
    document.addEventListener('mouseup', documentMouseUP)
    document.addEventListener('mousemove', documentMouseMOVE)
    //VOLUME
    volumeSliderContainer.current?.addEventListener('mousedown', clickVolumeSlider)
    volumeSliderContainer.current?.addEventListener('mousemove', slideOnVolume)
  }

  const removeListeners = () => {
    //PROGRESS BAR
    timelineRef.current?.removeEventListener('mousemove', handleTimelineUpdate) //preview
    timelineRef.current?.removeEventListener('mousedown', toggleScrubbing) //progress
    document.removeEventListener('mouseup', documentMouseUP)
    document.removeEventListener('mousemove', documentMouseMOVE)
    //VOLUME
    volumeSliderContainer.current?.removeEventListener('mousedown', clickVolumeSlider)
    volumeSliderContainer.current?.removeEventListener('mousemove', slideOnVolume)
  }

  useEffect(() => {
    addListeners()
    return () => {
      removeListeners()
    }
  }, [])

  return <>{children}</>
}

export default Effects
