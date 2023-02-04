import { useEffect, useRef, useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";
import { BsMoon } from "react-icons/bs";
import { useModals } from "../../auth/modal/ModalsProvider";

const UserMenu = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0
  });
  const modals = useModals();
  const modalsRef = useRef(modals);

  useEffect(() => {
    //get modal position
    if (!modals.showUserMenu) return;
    const userButton = document.getElementById("USER_DROPDOWN_ID");
    if (!userButton) return;
    setPosition({
      left: userButton.offsetLeft,
      width: userButton.offsetWidth
    });
  }, [modals.showUserMenu]);

  useEffect(() => {
    //close modal on resize
    const onResize = () => {
      modalsRef.current.setShowUserMenu(false);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div>
      <ClickOutHandler onClickOut={() => modals.setShowUserMenu(false)}>
        <div
          role={'menu'}
          tabIndex={0}
          className="rounded-b-[4px] border border-bbaby-border border-t-0 mt-[-2px] max-h-[80%] overflow-y-auto overflow-x-hidden pt-[6px] w-[211px] z-[80] bg-bbaby-brighter"
          style={{
            position: "fixed",
            left: position.left + position.width - 211,
            top: 39.5,
          }}
        >
          <button className="bg-bbaby-brighter flex h-10 box-border my-1 w-full py-[10px] pr-4 pl-12 relative items-center justify-between text-left">
            <BsMoon className="w-5 h-5 align-middle left-4 absolute" />
            <div className="text-[14px] leading-[18px] inline-block align-middle font-medium">Dark Mode</div>
            <button type="button" role={'switch'} aria-checked={true}>

            </button>
          </button>
        </div>
      </ClickOutHandler>
    </div>
  );
};

export default UserMenu;
