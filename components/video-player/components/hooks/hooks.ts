import { MutableRefObject } from 'react'

export const getDuration = (player: HTMLVideoElement) => {
  const { duration, seekable } = player
  if (duration === Infinity && seekable.length > 0) {
    return seekable.end(seekable.length - 1)
  }
  return duration
}

export const handlePlayPause = async (player: MutableRefObject<HTMLVideoElement | null>) => {
  try {
    if (!player.current) return
    player.current.paused ? await player.current.play() : player.current.pause()
  } catch (err) {}
}

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
})
export const formatDuration = (time: number) => {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60) % 60
  const hours = Math.floor(time / 3600)
  if (hours === 0) {
    return `${minutes}:${leadingZeroFormatter.format(seconds)}`
  } else {
    return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`
  }
}
