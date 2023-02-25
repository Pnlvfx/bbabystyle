'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import communityapis from '../API/communityapis'
import { buttonClass } from '../utils/buttons/Button'
import { useModals } from '../auth/modal/ModalsProvider'
import { CommunityInfoProps } from '../widget/communityinfo/CommunityInfo'
import { useRouter } from 'next/navigation'

const BoardHeader = ({ community }: CommunityInfoProps) => {
  const modals = useModals()
  const [selectedFile, setSelectedFile] = useState(community.image)
  const filePickerRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const changeAvatar = async (newAvatar: string) => {
    try {
      await communityapis.changeAvatar(community.name, newAvatar)
      setSelectedFile(newAvatar)
    } catch (err) {}
  }

  const previewFile = (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      if (!reader.result) return
      changeAvatar(reader.result.toString())
    }
  }

  const doSubscribe = async () => {
    try {
      await communityapis.subscribe(community.name, modals)
      router.refresh()
    } catch (err) {}
  }

  return (
    <>
      <div
        className={`${community.user_is_moderator && 'cursor-pointer'}`}
        onClick={() => {
          community.user_is_moderator && filePickerRef?.current?.click()
        }}
      >
        <Image
          src={selectedFile}
          alt="community header"
          className="rounded-full border-4 border-solid border-white bg-white bg-cover"
          width={72}
          height={72}
        />
        {community.user_is_moderator && (
          <input
            className="text-[16px]"
            hidden
            type="file"
            name="image"
            accept="image/png, image/jpeg"
            id="file_up"
            ref={filePickerRef}
            onChange={(e) => {
              e.preventDefault()
              if (!e.target.files) return
              const file = e.target.files[0]
              previewFile(file)
            }}
          />
        )}
      </div>
      <div className="relative mt-6 box-border inline-flex w-[calc(100%_-_80px)] flex-1 items-start justify-between pl-4">
        <div className="box-border inline-block max-w-[calc(100%_-_96px)] pr-6">
          <h1 className="inline-block w-full flex-1 overflow-hidden text-ellipsis pr-[2px] pb-[4px] text-[28px] font-bold leading-8">
            {community.name}
          </h1>
          <h2 className="text-[14px] leading-[18px] text-bbaby-text_darker">b/{community.name}</h2>
        </div>
        <div className="flex">
          <div className="w-[96px]">
            <button
              role={'button'}
              tabIndex={0}
              className={`${buttonClass(community.user_is_subscriber ? true : false)} relative w-full ${
                !community.user_is_subscriber && 'border-none'
              } box-border flex min-h-[32px] min-w-[32px] items-center justify-center rounded-full text-center text-[14px] font-bold`}
              onClick={(e) => {
                e.preventDefault()
                doSubscribe()
              }}
            >
              {community.user_is_subscriber ? 'Joined' : 'Join'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardHeader
