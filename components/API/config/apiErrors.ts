import { TimeMsgContextProps } from '../../utils/message/TimeMsgContext'

export const catchError = (err: unknown) => {
  if (err instanceof Error) throw new Error(err.message)
  else if (typeof err === 'string') throw new Error(err)
  else throw new Error('API error')
}

export const catchServer = (err: unknown) => {
  if (err instanceof Error) return new Error(err.message)
  else if (typeof err === 'string') return new Error(err)
  else return new Error('API error')
}

export const catchErrorWithMessage = (err: unknown, transporter: TimeMsgContextProps): void => {
  if (err instanceof Error) {
    transporter.setMessage({ value: err.message, status: 'error' })
  } else if (typeof err === 'string') {
    transporter.setMessage({ value: err, status: 'error' })
  } else {
    transporter.setMessage({ value: `That's really strange!`, status: 'error' })
  }
}
