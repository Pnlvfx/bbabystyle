import { FaHeartBroken } from 'react-icons/fa'
import PostNotFoundButton from './PostNotFoundButton'

const PostNotFound = () => {
  return (
    <div className="min-h-[calc(100vh-48px)] w-full bg-bbaby-brighter pt-[48px]">
      <div className="relative mx-auto mb-[60px] flex h-[500px] min-h-[340px] w-[1200px] max-w-[95%] flex-col items-center justify-center rounded">
        <div className="mt-[81px] flex min-h-[340px] flex-col items-center justify-center">
          <FaHeartBroken className="mb-5 h-[28px] w-[28px]" />
          <p className="mx-[50px] mb-5 text-center text-[18px] font-medium leading-[22px] text-bbaby-text_darker opacity-60">
            Sorry there doesn&apos;t seem to be anything here.
          </p>
          <PostNotFoundButton />
        </div>
      </div>
    </div>
  )
}

export default PostNotFound
