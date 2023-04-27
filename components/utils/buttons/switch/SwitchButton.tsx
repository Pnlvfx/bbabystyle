import styles from './switch.module.css'

interface SwitchButtonProps {
  content: string
  checked: boolean
  extraClass?: string
  callback: () => void
}

const SwitchButton = ({ content, extraClass, checked, callback }: SwitchButtonProps) => {
  return (
    <div
      className={`relative box-border flex h-10 w-full cursor-pointer items-center justify-between pl-[52px] pr-4 text-[14px] font-medium leading-[18px] ${extraClass}`}
      onClick={callback}
    >
      <span>{content}</span>
      <button
        role="switch"
        aria-checked={checked}
        type="button"
        tabIndex={-1}
        className={`${styles.checkBox2e_1as} flex items-center rounded-[100px] ${
          checked ? 'justify-end bg-[#0079d3]' : 'justify-start bg-[rgba(215,218,220,0.1)]'
        }`}
        onClick={callback}
      >
        <div className={styles.checkBox} />
      </button>
    </div>
  )
}

export default SwitchButton
