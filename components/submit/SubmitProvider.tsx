'use client'
import { useContext } from 'react'
import { createContext, Dispatch, SetStateAction, useState } from 'react'

const SubmitContext = createContext<SubmitContextType | undefined>(undefined)

interface SubmitContextType {
  session: SessionProps | null
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  body?: string
  setBody: Dispatch<SetStateAction<string | undefined>>
  height: number
  setHeight: Dispatch<SetStateAction<number>>
  width: number
  setWidth: Dispatch<SetStateAction<number>>
  selectedFile: string | null
  setSelectedFile: Dispatch<SetStateAction<string | null>>
  thumbnail: string | null
  setThumbnail: SetStateAction<string | null>
  selectedCommunity?: CommunityProps
  setSelectedCommunity: Dispatch<SetStateAction<CommunityProps | undefined>>
  isImage: boolean
  setIsImage: Dispatch<SetStateAction<boolean>>
  isVideo: boolean
  setIsVideo: Dispatch<SetStateAction<boolean>>
  sharePostToTG: boolean
  setSharePostToTG: Dispatch<SetStateAction<boolean>>
  sharePostToTwitter: boolean
  setSharePostToTwitter: Dispatch<SetStateAction<boolean>>
  minimal: boolean
  initialCommunity?: CommunityProps
}

interface SubmitContextProviderProps extends ChildrenProps {
  minimal: boolean
  session: SessionProps | null
  initialCommunity?: CommunityProps
  title?: string
  body?: string
  image?: string
  width?: number
  height?: number
  video?: string
  type?: string
}

export const SubmitContextProvider = (props: SubmitContextProviderProps) => {
  const [title, setTitle] = useState(props.title || '')
  const [body, setBody] = useState(props.type === 'photo' ? '' : props.type === 'video' ? '' : props.body)
  const [width, setWidth] = useState(props.width || 0)
  const [height, setHeight] = useState(props.height || 0)
  const [selectedCommunity, setSelectedCommunity] = useState(props.initialCommunity || undefined)
  const [selectedFile, setSelectedFile] = useState(props.type === 'photo' ? props.image || null : props.type === 'video' ? props.video || null : null)
  const [thumbnail, setThumbnail] = useState<string | null>(null)
  const [isImage, setIsImage] = useState(props.type === 'photo' ? true : false)
  const [isVideo, setIsVideo] = useState(props.type === 'video' ? true : false)
  const [sharePostToTG, setSharePostToTG] = useState(props.session?.user?.role === 1 && process.env.NODE_ENV === 'production' ? true : false)
  const [sharePostToTwitter, setSharePostToTwitter] = useState(false)

  return (
    <SubmitContext.Provider
      value={{
        title,
        setTitle,
        body,
        setBody,
        height,
        setHeight,
        width,
        setWidth,
        selectedCommunity,
        setSelectedCommunity,
        selectedFile,
        setSelectedFile,
        isImage,
        setIsImage,
        isVideo,
        setIsVideo,
        sharePostToTG,
        setSharePostToTG,
        sharePostToTwitter,
        setSharePostToTwitter,
        thumbnail,
        setThumbnail,
        minimal: props.minimal,
        initialCommunity: props.initialCommunity,
        session: props.session,
      }}
    >
      {props.children}
    </SubmitContext.Provider>
  )
}

export const useSubmitProvider = () => {
  const context = useContext(SubmitContext)
  if (!context) {
    throw new Error('Session component must be used with UserContextProvider component')
  }
  return context
}
