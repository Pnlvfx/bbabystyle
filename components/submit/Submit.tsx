'use client'
import { useState } from 'react'
import { buttonClass } from '../utils/buttons/Button'
import postapis from '../API/postapis/postapis'
import { useSubmitProvider } from './SubmitProvider'
import { useRouter } from 'next/navigation'
import { useMessage } from '../utils/message/TimeMsgContext'
import { catchErrorWithMessage } from '../API/config/apiErrors'
import CommunityDropdown from './submitutils/comunity-dropdown/CommunityDropdown'
import SubmitTitle from './submitutils/SubmitTitle'
import SubmitBody from './submitutils/SubmitBody'
import SubmitShareButtons from './submitutils/SubmitShareButtons'
import { Spinner } from '../utils/Spinner'
import SubmitType from './submitutils/SubmitType'

const Submit = () => {
  const { title, selectedCommunity, body, height, isImage, isVideo, selectedFile, sharePostToTG, sharePostToTwitter, width, minimal, session } =
    useSubmitProvider()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const message = useMessage()

  const createPost = async () => {
    try {
      setLoading(true)
      if (!selectedCommunity) return
      const post = await postapis.newPost(title, selectedCommunity.name, {
        body,
        height,
        isImage,
        isVideo,
        selectedFile,
        sharePostToTG,
        sharePostToTwitter,
        width,
      })
      if (session?.user?.role === 0) {
        router.push(post.permalink)
      } else {
        message.showMessage('Post created successfully', {
          status: 'success',
        })
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
      catchErrorWithMessage(err, message)
    }
  }

  return (
    <>
      <div tabIndex={0} />
      <div className={`${loading ? 'opacity-40' : 'opacity-100'} px-2 md:px-0`}>
        {!minimal && (
          <div className="my-4 flex border-b border-solid border-reddit_border p-1">
            <div className="flex-1 text-[18px] font-medium leading-[22px]">Create a Post</div>
            <button
              role={'button'}
              className="relative ml-[10px] box-border min-h-[40px] w-auto min-w-[40px] items-center rounded-full border border-transparent px-4 py-1 text-center text-[12px] font-bold leading-6"
              style={{ letterSpacing: 0.5 }}
            >
              DRAFTS
              <span className="ml-1 px-[3px] py-[1px] font-normal leading-4 ">0</span>
            </button>
          </div>
        )}
        <CommunityDropdown />
        <div className="mb-5 rounded-[5px] bg-reddit_dark-brighter">
          {!minimal && <SubmitType />}
          <div className="m-4">
            <SubmitTitle />
            <SubmitBody />
          </div>
          <hr className="mx-3 mb-4 mt-12 border-reddit_border" />
          <div className="mx-4 pb-4 text-right">
            <button className={`mr-2 h-[30px] opacity-20 ${buttonClass(true)}`}>
              <p>Save Draft</p>
            </button>
            <button
              className={`h-[30px] ${buttonClass()} ${
                title.length >= 1 && selectedCommunity ? 'text-opacity-100' : 'cursor-not-allowed text-opacity-40'
              }`}
              disabled={title.length >= 1 && selectedCommunity ? false : true}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                createPost()
              }}
            >
              {!loading && <p>Post</p>}
              {loading && <Spinner />}
            </button>
          </div>
          <SubmitShareButtons />
        </div>
      </div>
    </>
  )
}

export default Submit
