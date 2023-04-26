import { BsMoon } from 'react-icons/bs'
import styles from '../../usermenu.module.css'

const ThemeButton = () => {
  return (
    <div className={`my-1 h-10 bg-bbaby-brighter ${styles.button2K}`}>
      <BsMoon className="absolute left-4 h-5 w-5 align-middle" />
      <div className="inline-block align-middle text-[14px] font-medium leading-[18px]">Dark Mode</div>
      <button type="button" role={'switch'} aria-checked={true}></button>
    </div>
  )
}

export default ThemeButton
