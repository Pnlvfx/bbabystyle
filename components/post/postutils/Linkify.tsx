import React from 'react'
import ReactLinkify from 'react-linkify'

const Linkify = ({ children }: ChildrenProps) => {
  return (
    <ReactLinkify
      componentDecorator={(decoratedHref, decoratedText, key) => (
        <a className="text-bbaby-blue" target={'_blank'} href={decoratedHref} key={key} rel={'noopener nofollow ugc noreferrer'}>
          {decoratedText}
        </a>
      )}
    >
      {children}
    </ReactLinkify>
  )
}

export default Linkify
