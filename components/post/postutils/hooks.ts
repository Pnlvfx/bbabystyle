import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Dispatch, MouseEvent, SetStateAction } from "react";

export const openPost = (e: MouseEvent<HTMLDivElement | HTMLAnchorElement>, post: PostProps, router: AppRouterInstance, setPostForModal: Dispatch<SetStateAction<PostProps | undefined>>) => {
  e.preventDefault();
  e.stopPropagation();
  const mobile = window.innerWidth >= 820 ? false : true;
  if (mobile) {
    router.push(post.permalink);
  } else {
    setPostForModal(post);
    window.history.pushState({}, '', post.permalink)
  }
};
