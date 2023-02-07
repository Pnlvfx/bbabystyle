"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface RootCommentContextProps {
  post: PostProps;
  comments: CommentProps[];
  setComments: Dispatch<SetStateAction<CommentProps>>;
  getComments: () => CommentProps[];
}

const RootCommentContext = createContext<RootCommentContextProps | {}>({});

interface RootCommentContextProviderProps extends ChildrenProps {
  post: PostProps;
}

export const RootCommentContextProvider = ({ children, post }: RootCommentContextProviderProps) => {
  const [comments, setComments] = useState<CommentProps[]>([]);

  //   const getComments = async () => {
  //     try {
  //       const c = await getCommentsFromPost(post._id)
  //       setComments(c)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  return (
    <RootCommentContext.Provider
      value={{
        post,
        comments,
        setComments,
        //getComments,
      }}
    >
      {children}
    </RootCommentContext.Provider>
  );
};

export const useCommentProvider = () => {
  const context = useContext(RootCommentContext) as RootCommentContextProps;
  if (!context) {
    throw new Error("Comment context components must be used within RootCommentContextProvider");
  }
  return context;
};
