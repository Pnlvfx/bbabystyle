"use client";
import CommentForm from "./CommentForm";
import { RootCommentContextProvider, useCommentProvider } from "./CommentProvider";
import { GoCommentDiscussion } from "react-icons/go";
import Comments from "./Comments";

const Comment = ({ post }: { post: PostProps }) => {
  const { comments } = useCommentProvider();
  console.log(comments);
  return (
    <RootCommentContextProvider post={post}>
      {!!post && !!post._id && (
        <div className="relative my-6 lg:mx-10">
          <CommentForm rootId={post._id} parentId={post._id} showAuthor={true} />
          <div className="my-4">
            <hr className="border-reddit_border" />
            {comments.length < 1 && (
              <div className="flex min-h-[600px] w-full items-center justify-center">
                <div className="text-center">
                  <GoCommentDiscussion className="my-3 mx-auto h-[28px] w-[28px] text-reddit_text-darker" />
                  <p className="font-bold text-reddit_text-darker">No Comments yet</p>
                  <p className="mt-1 text-sm font-bold text-reddit_text-darker">Be the first to share what you think!</p>
                </div>
              </div>
            )}
          </div>
          <Comments parentId={post._id} rootId={post._id} />
        </div>
      )}
    </RootCommentContextProvider>
  );
};

export default Comment;
