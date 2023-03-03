export interface TiktokProps {
  id: string
  video: {
    url: string
    filename: string
    format: string
  }
  text?: string
  translated?: string
  textArray?: TextArrayProps[]
}

export type TextArrayProps = {
  text: string
  start: number
  end: number
}
