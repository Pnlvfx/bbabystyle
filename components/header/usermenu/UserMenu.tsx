import { useEffect, useRef, useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";
import { useModals } from "../../auth/modal/ModalsProvider";
import styles from "./usermenu.module.css";
import ThemeButton from "./buttons/ThemeButton";
import TermsPoliciesButton from "./buttons/TermsPoliciesButton";
import LoginSignUpButton from "./buttons/LoginSignUpButton";

const UserMenu = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  });
  const modals = useModals();
  const modalsRef = useRef(modals);
  const ignoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    //get modal position
    if (!modals.showUserMenu) return;
    const userButton = document.getElementById("USER_DROPDOWN_ID");
    if (!userButton) return;
    ignoreRef.current = userButton;
    setPosition({
      left: userButton.offsetLeft,
      width: userButton.offsetWidth,
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
      <ClickOutHandler
        ignoredElements={ignoreRef.current ? [ignoreRef.current] : []}
        onClickOut={() => modals.setShowUserMenu(false)}
      >
        <div
          role={"menu"}
          tabIndex={0}
          className="rounded-b-[4px] border border-bbaby-border border-t-0 mt-[-2px] max-h-[80%] overflow-y-auto overflow-x-hidden pt-[6px] w-[211px] z-[80] bg-bbaby-brighter"
          style={{
            position: "fixed",
            left: position.left + position.width - 211,
            top: 39.5,
          }}
        >
          <ThemeButton styles={styles} />
          <TermsPoliciesButton styles={styles} />
          <div className="border-t border-bbaby-border mx-4" />
          <LoginSignUpButton styles={styles} />
        </div>
      </ClickOutHandler>
    </div>
  );
};

export default UserMenu;
