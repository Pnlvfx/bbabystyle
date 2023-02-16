/* eslint-disable no-unused-vars */
interface SessionProps {
  user?: {
    username: string;
    avatar: string;
    role: number;
    email_verified: boolean
  };
  device?: {
    mobile: boolean;
  };
}

type UserProps = {
  username: string
  avatar: string
  role: number
  email: string
  email_verified: boolean
  country: string
  hasExternalAccount: boolean
  externalAccounts: [
    {
      username: string
      provider: string
      url: string
    }
  ]
}
