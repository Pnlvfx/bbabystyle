import { catchError } from "./config/apiErrors"

interface UserIpInfoProps {
  businessName: string
  businessWebsite: string
  city: string
  continent: string
  country: string
  countryCode: string
  ipName: string
  ipType: string
  isp: string
  lat: string
  lon: string
  org: string
  query: string
  region: string
  status: string
}

export const getUserInfo = async () => {
  try {
    const url = `https://extreme-ip-lookup.com/json?key=${process.env.NEXT_PUBLIC_IP_LOOKUP_API_KEY}`
    const res = await fetch(url, {
      method: 'get',
    })
    const userIpInfo = await res.json()
    if (!res.ok) throw new Error(userIpInfo?.msg)
    return userIpInfo as UserIpInfoProps
  } catch (err) {
    throw catchError(err)
  }
}