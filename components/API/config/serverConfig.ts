import { cookies } from 'next/headers'
import { clientUrl } from '../../../config/config'
import { headers } from 'next/headers'
import { userAgentFromString } from 'next/server'

export const getHeaders = () => {
  const headerList = headers()
  const user_agent = headerList.get('user-agent')
  const lang = headerList.get('accept-language')
  const token = cookies().get('token')
  const _headers = {
    cookie: `${token?.name}=${token?.value}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
    origin: clientUrl,
    'user-agent': user_agent || '',
    'Accept-Language': lang || '',
  }
  return _headers
}

export const deviceIsMobile = () => {
  const headerList = headers()
  const user_agent = headerList.get('user-agent')
  const isMobile = userAgentFromString(user_agent || '').device.type === 'mobile' ? true : false
  return isMobile
}
