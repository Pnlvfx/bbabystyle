'use client'
import { GoogleOAuthProvider } from '@react-oauth/google'

const GoogleProvider = ({ children }: ChildrenProps) => {
  return <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>{children}</GoogleOAuthProvider>
}

export default GoogleProvider
