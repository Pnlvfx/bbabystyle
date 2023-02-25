"use client";
import CommentForm from "./CommentForm";
import { GoCommentDiscussion } from "react-icons/go";
import Comments from "./Comments";
import { useEffect, useRef, useState } from "react";
import commentapis from "../API/commentapis";
import { catchError } from "../API/config/apiErrors";

const Comment = ({ post }: { post: PostProps }) => {
  const [comments, setComments] = useState<CommentProps[]>([]);
  const postRef = useRef(post);

  const getComments = async () => {
    try {
      const reqcomments = await commentapis.getCommentsFromPost(postRef.current._id);
      setComments(reqcomments);
    } catch (err) {
      catchError(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      {!!post && !!post._id && (
        <div className="relative my-6 lg:mx-10">
          <CommentForm rootId={post._id} parentId={post._id} showAuthor={true} getComments={getComments} />
          <div className="my-4">
            <hr className="border-bbaby-border" />
            {comments.length < 1 && (
              <div className="flex min-h-[600px] w-full items-center justify-center">
                <div className="text-center text-bbaby-text_darker">
                  <GoCommentDiscussion className="my-3 mx-auto h-[28px] w-[28px]" />
                  <p className="font-bold">No Comments yet</p>
                  <p className="mt-1 text-sm font-bold">Be the first to share what you think!</p>
                </div>
              </div>
            )}
          </div>
          <Comments comments={comments} parentId={post._id} rootId={post._id} getComments={getComments} />
        </div>
      )}
    </>
  );
};

export default Comment;
