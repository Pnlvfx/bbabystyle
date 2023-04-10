import Effects from './components/jsx/Effects'
import ScrollObserver from './components/jsx/ScrollObserver'
import VideoPlayer from './components/jsx/VideoPlayer'
import { VideoPlayerContextProvider } from './components/jsx/VideoPlayerContext'

export interface VideoPlayerProps {
  url: string
  poster: string
  Logo: string
  duration?: number
  scroll?: boolean
}

const Video = ({ url, poster, duration, scroll, Logo }: VideoPlayerProps) => {
  return (
    <VideoPlayerContextProvider duration={duration}>
      <ScrollObserver enable={scroll}>
        <Effects>
          <VideoPlayer url={url} poster={poster} Logo={Logo} />
        </Effects>
      </ScrollObserver>
    </VideoPlayerContextProvider>
  )
}

export default Video
