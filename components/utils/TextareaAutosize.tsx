import { DetailedHTMLProps, TextareaHTMLAttributes, useEffect, useRef } from 'react'

const TextareaAutosize = (props: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) => {
  const tx = useRef<HTMLTextAreaElement>(null)

  const resizeTextarea = () => {
    if (tx.current) {
      tx.current.style.height = '0'
      tx.current.style.height = tx.current.scrollHeight + 'px'
    }
  }

  useEffect(() => {
    if (tx.current) resizeTextarea()
  }, [props.value])

  return <textarea style={{ overflowWrap: 'break-word', height: 'auto', overflow: 'hidden' }} ref={tx} {...props} />
}

export default TextareaAutosize
