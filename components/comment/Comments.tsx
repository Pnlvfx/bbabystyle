import { useState } from 'react'
import Link from 'next/link'
import CommentForm from './CommentForm'
import Linkify from 'react-linkify'
import VoteComment from './VoteComment'
import ReplyButton from './ReplyButton'
import TimeAgo from '../react-time-ago'

interface CommentsProps {
  comments: CommentProps[]
  session: SessionProps | null
  parentId: string
  rootId: string
  getComments: () => Promise<void>
}

const Comments = ({ parentId, rootId, comments: propsComments, getComments, session }: CommentsProps) => {
  const [showForm, setShowForm] = useState(false)
  const comments = propsComments.filter((comment) => parentId === comment.parentId)

  const onCancel = () => {
    setShowForm(false)
  }

  return (
    <div className={'my-2 bg-bbaby-brighter'}>
      {comments.map((comment) => {
        const replies = propsComments.filter((c) => c.parentId === comment._id)
        return (
          <div className="mb-2" key={comment._id}>
            <div className="mb-2 flex">
              <picture>
                <img src={comment.authorAvatar} alt="User Avatar" className="mr-2 h-8 w-8 rounded-full" />
              </picture>
              <Link href={`/user/${comment.author.toLowerCase()}`} className="pr-2 font-sans text-sm leading-10 hover:underline">
                {comment.author}
              </Link>
              <TimeAgo className="font-sans text-sm leading-10 text-bbaby-text_darker" date={comment.createdAt} />
            </div>
            <div className="ml-[18px] border-l-2 border-bbaby-text_darker p-3">
              <div className="-mt-4 pl-4">
                <div className="inline flex-none break-words text-sm leading-6">
                  <Linkify
                    componentDecorator={(decoratedHref, decoratedText, key) => (
                      <a className="text-bbaby-blue" target={'_blank'} href={decoratedHref} key={key} rel={'noopener nofollow ugc noreferrer'}>
                        {decoratedText}
                      </a>
                    )}
                  >
                    <p className="inline whitespace-pre-wrap">{comment.body}</p>
                  </Linkify>
                </div>
                <div className="flex w-auto p-2 pl-0">
                  <VoteComment comment={comment} />
                  <ReplyButton
                    type={'button'}
                    onClick={() => {
                      setShowForm(!!comment._id)
                    }}
                  >
                    Reply
                  </ReplyButton>
                </div>
                {!!comment._id === showForm && (
                  <CommentForm
                    parentId={comment._id}
                    rootId={rootId}
                    showAuthor={false}
                    onCancel={onCancel}
                    getComments={getComments}
                    session={session}
                  />
                )}
                {replies.length > 0 && (
                  <Comments comments={propsComments} parentId={comment._id} rootId={rootId} getComments={getComments} session={session} />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Comments
