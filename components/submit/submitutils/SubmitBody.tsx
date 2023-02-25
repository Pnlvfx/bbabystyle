import { useState } from 'react'
import { ClickOutHandler } from 'react-clickout-ts'
import { Video } from '@bbabystyle/next-video-player'
import { useSubmitProvider } from '../SubmitProvider'
import { TrashIcon } from '../../utils/svg/SVG'
import { LOGO } from '../../../config/config'
import SubmitButton from '../submit-buttons/SubmitButton'

const Body = () => {
  const [showDeleteOptions, setShowDeleteOptions] = useState(false)
  const [activeClassBody, setActiveClassBody] = useState(false)
  const { thumbnail, selectedFile, setSelectedFile, isImage, setIsImage, body, setBody, isVideo, setIsVideo } = useSubmitProvider()
  const [activeFigure, setActiveFigure] = useState(false)

  const figureClickOut = () => {
    setShowDeleteOptions(false)
    setActiveFigure(false)
  }

  const deleteCurrentImage = () => {
    setSelectedFile(null)
    setIsImage(false)
    setIsVideo(false)
    setShowDeleteOptions(false)
  }

  const clickOnFigure = () => {
    setActiveFigure(true)
    setShowDeleteOptions(true)
  }

  return (
    <div className="relative">
      <ClickOutHandler
        onClickOut={() => {
          setActiveClassBody(false)
        }}
      >
        <div
          className={`solid relative rounded-[4px] border ${activeClassBody ? 'border-reddit_text' : 'border-reddit_border'}`}
          onClick={() => setActiveClassBody(true)}
        >
          <div className="sticky top-12 z-[8] box-border flex flex-nowrap items-center rounded-[4px] bg-[#272729]">
            <SubmitButton />
          </div>
          <div className="relative overflow-auto">
            <div className="relative z-[1]">
              <div className="min-h-[122px] resize-y overflow-hidden whitespace-pre-wrap break-words rounded-[4px] py-2 px-4 text-[14px] leading-[21px] outline-none">
                <div></div>
                {selectedFile && (
                  <>
                    <figure>
                      <ClickOutHandler onClickOut={figureClickOut}>
                        <div className="mt-2 mb-1">
                          {showDeleteOptions && (
                            <div className="sticky bottom-0 top-10 z-10 flex h-0 justify-center" onClick={deleteCurrentImage}>
                              <div
                                className="felx-row box-border flex h-[30px] translate-y-[-40px] items-center rounded-[4px] bg-[#272729] hover:bg-bbaby-hover"
                                style={{
                                  boxShadow: '0 0 0 1px #343536, 0 1px 10px #343536',
                                }}
                              >
                                <button className="relative box-border flex items-center rounded-[4px] border-none p-[3px] outline-none transition-colors">
                                  <TrashIcon className="box-border inline-block h-5 w-5 overflow-hidden p-0 text-[20px] leading-5 text-reddit_text-darker" />
                                  <div></div>
                                </button>
                              </div>
                            </div>
                          )}
                          <div className="pointer-events-none mt-[-1px] h-1 w-0 overflow-hidden">
                            <br />
                          </div>
                          <div contentEditable={false} onClick={clickOnFigure}>
                            <div draggable={true} className="py-1">
                              <div
                                className={`relative flex justify-center overflow-visible rounded-[8px] bg-transparent p-0 shadow-none transition-colors`}
                              >
                                <div
                                  className={`select-all ${
                                    activeFigure && 'shadow-[0_0_0_4px_#d7dadc]'
                                  } relative flex-grow justify-center overflow-hidden rounded-[8px] transition-shadow ${
                                    isVideo && 'block pt-[56.25%]'
                                  }`}
                                >
                                  {isVideo && (
                                    <>
                                      <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] opacity-100">
                                        <div className="relative h-full max-h-[100%] max-w-[100%] cursor-default select-none overflow-hidden whitespace-nowrap">
                                          <Video url={selectedFile} poster={thumbnail as string} Logo={LOGO} />
                                          <div className="absolute top-0 bottom-0 left-0 right-0" />
                                        </div>
                                      </div>
                                    </>
                                  )}
                                  {isImage && (
                                    <>
                                      <picture>
                                        <img draggable={false} src={selectedFile} alt={''} className="z-0 max-w-[100%] self-center rounded-[8px]" />
                                      </picture>
                                      <div className="absolute bottom-0 left-0 right-0 z-10 h-[64px] opacity-0"></div>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pointer-events-none mt-[-1px] h-1 w-0 overflow-hidden">
                            <br />
                          </div>
                        </div>
                      </ClickOutHandler>
                    </figure>
                    <div className="mx-[10%] mb-3">
                      <div className="relative whitespace-pre-wrap text-center text-[13px] leading-[18px]">
                        <span className="text-reddit_text-darker">Add a caption</span>
                      </div>
                    </div>
                  </>
                )}
                {!selectedFile && ( //body start here
                  <div className="relative whitespace-pre-wrap text-left ">
                    <textarea
                      className="min-h-[135px] w-full bg-reddit_dark-brighter text-[16px] placeholder-reddit_text-darker outline-none"
                      placeholder={'Text (optional)'}
                      onChange={(e) => setBody(e.target.value)}
                      value={body}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ClickOutHandler>
    </div>
  )
}

export default Body
