"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";
import { IoIosNotificationsOutline } from "react-icons/io";
import style from "./notification.module.css";

const NotificationButton = () => {
  const [windowDimension, setWindowDimension] = useState(0);
  const [show, setShow] = useState(false);

  const triggerDropdown = () => {
    setShow(!show);
  };

  const detectSize = () => {
    //-752 originals
    if (window.innerWidth >= 752) {
      setWindowDimension(window.innerWidth - 752);
    } else {
      setWindowDimension(0);
    }
  };

  useEffect(() => {
    if (typeof window === undefined) return;
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  useEffect(() => {
    if (typeof window === undefined) return;
    detectSize();
  }, []);

  return (
    <ClickOutHandler onClickOut={() => setShow(false)}>
      <span className="md:ml-2 h-8">
        <button
          className={`relative rounded-[2px]`}
          aria-expanded={show}
          aria-haspopup="true"
          aria-label="Open notifications"
          onClick={triggerDropdown}
        >
          <div className="relative box-border h-8 w-8">
            {/* <span className="bg-reddit_red rounded-xl box-border text-[10px] font-bold h-4 left-5 leading-4 px-1 absolute text-center top-0 align-middle min-w-[16px] w-auto z-[1]">
              9
            </span> */}
            <IoIosNotificationsOutline className="icon absolute top-0 bottom-0 left-0 right-0 m-auto" />
          </div>
        </button>
        {show && (
          <div
            className={style.dropdown}
            style={{ transform: `translate(${windowDimension}px, 46px)` }}
          >
            <div className={style.dropdownContainer}>
              <div className={style.dropdownContainer2}>
                <nav className={style.dropdownNav}>
                  <span className={style.navSpan}>Notifications</span>
                </nav>
                {
                  <div>
                    <div className="relative">
                      <li className="list-none">
                        <Link
                          href={""}
                          className="flex p-4"
                          rel="noopener noreferrer"
                        >
                          <span className="relative pr-2"></span>
                          <span className="flex-1">
                            <span className="">
                              <span>
                                <span>notification-beta</span>
                                <span>·</span>
                                <span>30h</span>
                              </span>
                            </span>
                            <span></span>
                          </span>
                        </Link>
                      </li>
                    </div>
                  </div>
                }
                <div className="overflow-hidden overflow-y-auto">
                  <div className="flex flex-col items-center justify-center rounded-[4px] p-5 pb-8">
                    <picture>
                      <img
                        src={`/xxx.png`}
                        alt="default user avatar"
                        className="mt-3 h-[128px] rounded-sm"
                      />
                    </picture>
                    <h1 className="mb-2 mt-6 text-[18px] font-medium leading-[22px]">
                      You don&apos;t have any activity yet
                    </h1>
                    <p className="mx-10 text-center text-[14px] leading-[18px] text-reddit_text-darker ">
                      That&apos;s ok, maybe you need the right inspitation. Try
                      posting in{' '}
                      <Link href={""}></Link>a popular community for discussion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </span>
    </ClickOutHandler>
  );
};

export default NotificationButton;
