import { BsMoon } from "react-icons/bs";

export interface UserMenuButton {
  styles: {
    readonly [key: string]: string;
}
}

const ThemeButton = ({ styles }: UserMenuButton) => {
  return (
    <div className={`bg-bbaby-brighter h-10 my-1 ${styles.button2K}`}>
      <BsMoon className="w-5 h-5 align-middle left-4 absolute" />
      <div className="text-[14px] leading-[18px] inline-block align-middle font-medium">
        Dark Mode
      </div>
      <button type="button" role={"switch"} aria-checked={true}></button>
    </div>
  );
};

export default ThemeButton;
