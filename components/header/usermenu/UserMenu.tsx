import { useEffect, useRef, useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";
import { useModals } from "../../auth/modal/ModalsProvider";
import styles from "./usermenu.module.css";
import ThemeButton from "./buttons/notuser/ThemeButton";
import TermsPoliciesButton from "./buttons/notuser/TermsPoliciesButton";
import LoginSignUpButton from "./buttons/notuser/LoginSignUpButton";
import { useSession } from "../../auth/UserContextProvider";
import UserMenuIn from "./UserMenuIn";

const UserMenu = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
  });
  const modals = useModals();
  const modalsRef = useRef(modals);
  const ignoreRef = useRef<HTMLElement | null>(null);
  const { session } = useSession();
  const width = session?.user ? 252 : 211;

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
    if (!modalsRef.current.showUserMenu) return;
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
          className={`${
            session?.user
              ? "rounded mt-1 mb-2 pt-2 w-[252px]"
              : "border-t-0 rounded-b-[4px] mt-[-2px] pt-[6px] w-[211px]"
          } border border-bbaby-border max-h-[80%] overflow-y-auto overflow-x-hidden z-[80] bg-bbaby-brighter`}
          style={{
            position: "fixed",
            left: position.left + position.width - width,
            top: session?.user ? 44.5 : 39.5,
          }}
        >
          {session?.user ? (
            <UserMenuIn styles={styles} />
          ) : (
            <>
              <ThemeButton styles={styles} />
              <TermsPoliciesButton styles={styles} />
              <div className="border-t border-bbaby-border mx-4" />
              <LoginSignUpButton styles={styles} />
            </>
          )}
        </div>
      </ClickOutHandler>
    </div>
  );
};

export default UserMenu;
