import { useState } from 'react'
import { BiDownvote, BiUpvote } from 'react-icons/bi'
import postapis from '../../API/postapis/postapis'
import { useModals } from '../../auth/modal/ModalsProvider'

interface VotingProps {
  ups: number
  postId: string
  liked: boolean | null
}

const Voting = ({ ups, postId, session, liked }: WithSession & VotingProps) => {
  let dir = 0 //vote
  const [upVote, setUpVote] = useState(ups)
  const modals = useModals()
  const [voted, setVoted] = useState(liked) //true false or null

  const refreshVote = async () => {
    try {
      if (!session?.user) {
        modals.setShowAuth('login')
        return
      }
      const data = await postapis.vote(postId, dir)
      if (dir === 1) {
        if (voted === true) {
          setVoted(null) //if user have already voted
        } else {
          setVoted(true) //vote normal
        }
      } else {
        if (voted === false) {
          setVoted(null)
        } else {
          setVoted(false)
        }
      }
      setUpVote(data.vote)
    } catch (err) {}
  }

  const handleVoteUp = () => {
    dir = 1
    refreshVote()
  }

  const handleVoteDown = () => {
    dir = -1
    refreshVote()
  }

  return (
    <>
      <button
        aria-label="upvote"
        className="h-6 w-6"
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
          handleVoteUp()
        }}
      >
        <BiUpvote className={`h-6 w-6 text-center hover:text-blue-600 ${voted === true ? 'text-blue-600' : 'text-reddit_text-darker'}`} />
      </button>
      <div className="pointer-events-none mx-[1px] w-8 overflow-hidden text-center text-[12px] font-bold leading-[15px]">
        {upVote === 0 ? 'Vote' : upVote}
      </div>
      <button
        aria-label="downvote"
        className="h-6 w-6"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleVoteDown()
        }}
      >
        <BiDownvote className={`h-6 w-6 hover:text-bbaby-orange ${voted === false ? 'text-bbaby-orange' : 'text-reddit_text-darker'}`} />
      </button>
    </>
  )
}

export default Voting
