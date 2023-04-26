/* eslint-disable no-unused-vars */
/// <reference types="gtag.js" />

declare module 'gtag.js'

interface ChildrenProps {
  children: ReactNode
}

interface WithSession {
  session: SessionProps | null
}
