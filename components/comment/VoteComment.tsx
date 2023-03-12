import { useState } from 'react'
import { BiDownvote, BiUpvote } from 'react-icons/bi'

interface CommentVoting {
  comment: CommentProps
}

const VoteComment = ({ comment }: CommentVoting) => {
  const [upVote, setUpVote] = useState(comment?.ups ? comment.ups : 0)
  const userVote = null // to change

  const handleVoteUp = () => {
    //sendVote('up')
  }

  const handleVoteDown = () => {
    //sendVote('down')
  }

  function arrowButton(directionName = 'up') {
    const directionNumber = directionName === 'up' ? 1 : -1
    let classNames = ' block'

    if (directionNumber === userVote) {
      classNames += ' text-bbaby-red '
    } else {
      classNames += ' text-bbaby-text_darker hover:bg-gray-600 '
    }

    if (directionName === 'up') {
      return (
        <button onClick={handleVoteUp} className={classNames}>
          <BiUpvote className="w-6" />
        </button>
      )
    } else {
      return (
        <button onClick={handleVoteDown} className={classNames}>
          <BiDownvote className="w-6" />
        </button>
      )
    }
  }
  return (
    <div className="flex p-2 pl-0">
      {arrowButton('up')}
      <span className="">{upVote}</span>
      {arrowButton('down')}
    </div>
  )
}

export default VoteComment
