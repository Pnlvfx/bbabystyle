import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ClickOutHandler } from 'react-clickout-ts'
import communityapis from '../API/communityapis'
import { useModals } from '../auth/modal/ModalsProvider'
import { buttonClass } from '../utils/buttons/Button'
import { Spinner } from '../utils/Spinner'
import { CloseIcon, PrivateCommunity, PublicCommunity } from '../utils/svg/SVG'
import { showErrMsg } from '../utils/validation/Validation'
import CommunityFormType from './CommunityFormType'

interface Status {
  err: string
  success: string
}

const CommunityFormModal = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<Status>()
  const modals = useModals()

  const create = async () => {
    try {
      setLoading(true)
      await communityapis.newCommunity(name)
      modals.setShowCommunity(false)
      router.push(`/b/${name.toLowerCase()}?new_community=true`)
    } catch (err) {
      if (err instanceof Error) {
        setStatus({ err: err.message, success: '' })
      } else if (typeof err === 'string') {
        setStatus({ err, success: '' })
      }
      setLoading(false)
    }
  }

  const close = async () => {
    modals.setShowCommunity(false)
    setName('')
    setLoading(false)
    setStatus(undefined)
  }

  return (
    <div
      className={
        'fixed top-0 z-50 box-border flex h-full w-full items-center overflow-auto bg-[rgba(28,28,28,.9)] pt-[75px] pr-[30px] pb-5 pl-[30px]'
      }
    >
      <ClickOutHandler
        onClickOut={close}
      >
        <div aria-modal="true" className="pointer-events-auto z-50 m-auto rounded-md border border-[#343536] bg-reddit_dark-brighter">
          <div className="pointer-events-none flex">
            <div className="rounde-md pointer-events-auto relative flex max-h-[100vh] w-[fit-content] max-w-[568px] self-center overflow-y-auto">
              <div className="relative m-0 box-border flex max-h-[100%] max-w-[100vw] flex-1 items-center overflow-y-auto rounded-b-md p-4">
                <div className="max-h-[100%] max-w-[492px]">
                  <h1 className="mb-4 flex justify-between border-b border-solid border-reddit_border pb-4 text-[16px] font-medium leading-5">
                    Create a community
                    <CloseIcon onClick={() => close()} className="ml-auto h-4 w-4 cursor-pointer fill-bbaby-text_darker overflow-hidden text-[16px] leading-5 " />
                  </h1>
                  <div className="mb-[30px] flex flex-col" style={{ flexWrap: 'wrap' }}>
                    <div className="mb-[-4] mr-2 flex max-w-[100%] flex-col">
                      <h2 className="flex- mb-1 text-[16px] font-medium leading-5">Name</h2>
                      <p className="text-[12px] leading-4 text-reddit_text-darker">
                        <span className="w-full">Community names including capitalization cannot be changed.</span>
                      </p>
                    </div>
                    <div id="community name" className="mt-3 flex flex-grow flex-col items-start justify-end">
                      <span className="relative top-[26px] left-3 text-reddit_text-darker">b/</span>
                      <input
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                        className={`mb-2 box-border h-12 max-h-[37px] w-full rounded border border-reddit_border bg-reddit_dark-brighter pt-1 pl-6 pb-1 pr-6 text-[14px] leading-[21px] md:text-[16px]`}
                        maxLength={21}
                        type={'text'}
                      />
                      <div className="mb-1 pt-1 text-xs text-reddit_text-darker">21 Characters remaining</div>
                    </div>
                  </div>
                  <div className="mt-[-32px] mb-4 flex pt-1 text-right text-[12px] leading-4">{status?.err && showErrMsg(status.err)}</div>
                  <div className="mb-[30px] flex flex-col">
                    <div className="mb-[-4px] mr-2 flex max-w-[100%] flex-col">
                      <h3 className="mb-1 flex text-[16px] font-medium leading-5">Community type</h3>
                    </div>
                    <div className="mt-3 flex flex-grow flex-col items-start justify-end">
                      <div aria-label="type" role={'radiogroup'}>
                        <input type={'hidden'} value={''} />
                        <CommunityFormType
                          text={{
                            title: 'Public',
                            body: 'Anyone can view, post and comment to this community.',
                          }}
                          icon={<PublicCommunity className="mr-1 h-4 w-4" />}
                          checked={true}
                        />
                        <CommunityFormType
                          text={{
                            title: 'Private',
                            body: 'Only approved users can view and submit to this community.',
                          }}
                          icon={<PrivateCommunity className="mr-1 h-4 w-4" />}
                          checked={false}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mx-[-16px] mt-4 mb-[-16px] flex justify-end rounded-br bg-[#343536] p-4">
                    <button role={'button'} tabIndex={0} onClick={close} className={`mr-2 h-[32px] w-[80px] ${buttonClass(true)}`}>
                      Cancel
                    </button>
                    <button
                      role={'button'}
                      tabIndex={0}
                      disabled={loading}
                      onClick={() => create()}
                      className={`h-[32px] w-[160px] ${buttonClass()}`}
                    >
                      {loading && <Spinner />}
                      {!loading && <p>Create a community</p>}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ClickOutHandler>
    </div>
  )
}

export default CommunityFormModal
