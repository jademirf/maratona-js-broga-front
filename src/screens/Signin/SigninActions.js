import {apiPost} from '../../helper/api'
export const SIGN_IN = 'SIGN_IN'

export const signIn = (data) => {
  const payload = apiPost('/auth/sign-in', data)
  return {
    type: SIGN_IN,
    payload
  }
}