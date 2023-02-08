import { server } from "../../config/config";
import { ModalContextProps } from "../auth/modal/ModalsProvider";
import { catchError } from "./config/apiErrors";
import { HEADERS } from "./config/clientConfig";

const commentapis = {
  postComment: async (
    commentBody: string,
    parentId: string,
    rootId: string,
    modals: ModalContextProps
  ) => {
    try {
      const url = `${server}/comments`;
      const body = JSON.stringify({ body: commentBody, parentId, rootId });
      const res = await fetch(url, {
        method: "POST",
        headers: HEADERS,
        credentials: "include",
        body,
      });
      const data = await res.json();
      if (!res.ok) {
        if (res.status === 401) {
          modals.setShowAuth("login");
        }
        throw new Error(data?.msg);
      }
      return data as CommentProps;
    } catch (err) {
      throw catchError(err);
    }
  },
  getCommentsFromPost: async (postId: string) => {
    try {
      const url = `${server}/comments/root/${postId}`;
      const res = await fetch(url, {
        method: "GET",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.msg);
      return data as CommentProps[];
    } catch (err) {
      throw catchError(err);
    }
  },
};

export default commentapis;
