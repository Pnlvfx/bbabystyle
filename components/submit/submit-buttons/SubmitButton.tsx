import { GrBold } from 'react-icons/gr'
import { GoItalic } from 'react-icons/go'
import { BiLink } from 'react-icons/bi'
import type { ReactNode } from 'react'
import AddImage from './AddImage'
import AddVideo from './AddVideo'
import styles from './submit-button.module.css'

const SubmitButton = () => {
  const Button = (title: string, icon: ReactNode) => {
    return (
      <span className="h-8 w-8">
        <button role={'button'} tabIndex={-1} title={title} className={`${styles.submitButton} transition-all`}>
          {icon}
          <div className="absolute inset-0">
            <div className={`${styles.submitButtonTitle} transition-opacity`}>{title}</div>
          </div>
        </button>
      </span>
    )
  }

  return (
    <>
      <div className="relative ml-1 flex h-full w-full items-center">
        <div className="absolute flex items-center">
          {Button('bold', <GrBold className={styles.submitButtonIcon} />)}
          {Button('Italics', <GoItalic className={styles.submitButtonIcon} />)}
          {Button('Link', <BiLink className={styles.submitButtonIcon} />)}
          <AddImage />
          <AddVideo />
        </div>
      </div>
      <div className={'relative'}>
        <button className="relative box-border flex min-h-[24px] w-auto min-w-[24px] items-center justify-center whitespace-pre-wrap rounded-full border border-solid border-transparent px-2 py-1 text-center text-[12px] font-bold leading-4">
          <span>Markdown Mode</span>
        </button>
      </div>
    </>
  )
}

export default SubmitButton
