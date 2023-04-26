'use client'
import { buttonClass } from '../utils/buttons/Button'
import { CloseIcon } from '../utils/svg/SVG'

interface PopUpProps {
  title: string
  description: string
  trigger: () => void
  button1: {
    name: string
    click: () => void
  }
  button2: {
    name: string
    click: () => void
  }
}

const PopUp = ({ title, trigger, description, button1, button2 }: PopUpProps) => {
  return (
    <div className="fixed top-0 z-50 box-border flex h-full w-full items-center overflow-auto bg-[rgba(28,28,28,.4)] px-[30px] pb-5 pt-[75px]">
      <div aria-modal="true" className="pointer-events-auto z-50 m-auto rounded-md border border-[#343536] bg-bbaby-brighter">
        <div className="pointer-events-none flex">
          <div className="pointer-events-auto relative flex max-h-[100vh] w-[fit-content] max-w-[568px] self-center overflow-y-auto rounded-md">
            <div className="relative m-0 box-border flex max-h-[100%] max-w-[100vw] flex-1 items-center overflow-y-auto rounded-b-md p-4">
              <div className="max-h-[100%] max-w-[492px]">
                <h1 className="mb-4 flex justify-between border-b border-solid border-bbaby-border pb-4 text-[16px] font-medium leading-5">
                  {title}
                  <CloseIcon
                    onClick={trigger}
                    className="ml-auto h-4 w-4 cursor-pointer overflow-hidden fill-bbaby-text_darker text-[16px] leading-5 "
                  />
                </h1>
                <div className="mb-[30px] flex flex-col" style={{ flexWrap: 'wrap' }}>
                  <div className="mb-[-4] mr-2 flex max-w-[100%] flex-col text-center">
                    <p className="whitespace-pre-wrap text-[12px] leading-4 text-bbaby-text_darker">
                      <span className="w-full">{description}</span>
                    </p>
                  </div>
                </div>
                <div className="mx-[-16px] mb-[-16px] mt-4 flex justify-center rounded-br bg-[#343536] p-4">
                  <button role={'button'} tabIndex={0} onClick={button1.click} className={`mr-4 h-[32px] w-[80px] ${buttonClass(true)}`}>
                    {button1.name}
                  </button>
                  <button onClick={button2.click} role={'button'} tabIndex={0} className={`h-[32px] ${buttonClass()}`}>
                    {button2.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp
