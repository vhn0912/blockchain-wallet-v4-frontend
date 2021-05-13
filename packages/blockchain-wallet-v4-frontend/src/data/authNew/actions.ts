import * as AT from './actionTypes'
import { AuthNewActionTypes } from './types'

// INITIALIZE LOGIN
export const initializeLogin = () => ({
  type: AT.INTIALIZE_LOGIN
})

export const intializeLoginLoading = (): AuthNewActionTypes => ({
  type: AT.INTIALIZE_LOGIN_LOADING
})

export const initializeLoginSuccess = (): AuthNewActionTypes => ({
  type: AT.INTIALIZE_LOGIN_SUCCESS
})

export const intializeLoginFailure = (): AuthNewActionTypes => ({
  type: AT.INTIALIZE_LOGIN_FAILURE
})

// LOGIN GUID
export const loginGuid = (email: string) => ({
  type: AT.LOGIN_GUID,
  payload: { email }
})
export const loginGuidLoading = (): AuthNewActionTypes => ({
  type: AT.LOGIN_GUID_LOADING
})
export const loginGuidSuccess = (): AuthNewActionTypes => ({
  type: AT.LOGIN_GUID_SUCCESS
})
export const loginGuidFailure = (): AuthNewActionTypes => ({
  type: AT.LOGIN_GUID_FAILURE
})
export const loginGuidNotAsked = () => ({ type: AT.LOGIN_GUID_NOTASKED })

// FIRST GUID SUBMISSION
export const guidWallet = (guid: string) => ({
  type: AT.GUID_WALLET,
  payload: { guid }
})

export const guidWalletLoading = (): AuthNewActionTypes => ({
  type: AT.GUID_WALLET_LOADING
})

export const guidWalletSuccess = (): AuthNewActionTypes => ({
  type: AT.GUID_WALLET_SUCCESS
})

export const guidWalletFailure = (): AuthNewActionTypes => ({
  type: AT.GUID_WALLET_FAILURE
})

// LOGIN
export const login = (guid, password, code, sharedKey, mobileLogin) => ({
  type: AT.LOGIN,
  payload: { guid, password, code, sharedKey, mobileLogin }
})
export const loginLoading = (): AuthNewActionTypes => ({
  type: AT.LOGIN_LOADING
})
export const loginSuccess = (data): AuthNewActionTypes => ({
  type: AT.LOGIN_SUCCESS,
  payload: { data }
})
export const loginFailure = (err: string): AuthNewActionTypes => ({
  type: AT.LOGIN_FAILURE,
  payload: { err }
})
export const setFirstLogin = firstLogin => ({
  type: AT.SET_FIRST_LOGIN,
  payload: { firstLogin }
})

// LOGOUT
export const logout = () => ({ type: AT.LOGOUT })
export const logoutClearReduxStore = () => ({
  type: AT.LOGOUT_CLEAR_REDUX_STORE
})
export const startLogoutTimer = () => ({ type: AT.START_LOGOUT_TIMER })

// MOBILE LOGIN
export const mobileLogin = data => ({
  type: AT.MOBILE_LOGIN,
  payload: { data }
})
export const mobileLoginStarted = () => ({ type: AT.MOBILE_LOGIN_START })
export const mobileLoginFinish = () => ({ type: AT.MOBILE_LOGIN_FINISH })

// REGISTER
export const register = (email, password, language) => ({
  type: AT.REGISTER,
  payload: { email, password, language }
})
export const registerLoading = (): AuthNewActionTypes => ({
  type: AT.REGISTER_LOADING
})
export const registerSuccess = (): AuthNewActionTypes => ({
  type: AT.REGISTER_SUCCESS
})
export const registerFailure = (): AuthNewActionTypes => ({
  type: AT.REGISTER_FAILURE
})

// 2FA
export const resendSmsCode = guid => ({
  type: AT.RESEND_SMS_CODE,
  payload: { guid }
})
export const reset2fa = (
  guid,
  email,
  newEmail,
  secretPhrase,
  message,
  code,
  sessionToken
) => ({
  type: AT.RESET_2FA,
  payload: { guid, email, newEmail, secretPhrase, message, code, sessionToken }
})
export const reset2faLoading = (): AuthNewActionTypes => ({
  type: AT.RESET_2FA_LOADING
})
export const reset2faSuccess = (): AuthNewActionTypes => ({
  type: AT.RESET_2FA_SUCCESS
})
export const reset2faFailure = (err: string): AuthNewActionTypes => ({
  type: AT.RESET_2FA_FAILURE,
  payload: { err }
})

// WALLET RESTORE
export const restore = (
  mnemonic: string,
  email: string | undefined,
  password: string,
  language: string,
  network: string | undefined
): AuthNewActionTypes => ({
  type: AT.RESTORE,
  payload: { mnemonic, email, password, language, network }
})
export const restoreLoading = (): AuthNewActionTypes => ({
  type: AT.RESTORE_LOADING
})
export const restoreSuccess = (): AuthNewActionTypes => ({
  type: AT.RESTORE_SUCCESS
})
export const restoreFailure = (): AuthNewActionTypes => ({
  type: AT.RESTORE_FAILURE
})

// WALLET RESTORE FROM METADATA
export const restoreFromMetadata = mnemonic => ({
  type: AT.RESTORE_FROM_METADATA,
  payload: { mnemonic }
})
export const restoreFromMetadataLoading = (): AuthNewActionTypes => ({
  type: AT.RESTORE_FROM_METADATA_LOADING
})
export const restoreFromMetadataSuccess = (
  mnemonic: string
): AuthNewActionTypes => ({
  type: AT.RESTORE_FROM_METADATA_SUCCESS,
  payload: { mnemonic }
})
export const restoreFromMetadataFailure = (
  err: string
): AuthNewActionTypes => ({
  type: AT.RESTORE_FROM_METADATA_FAILURE,
  payload: { err }
})

// MOBILE AUTH CHANNEL LOGIN
export const secureChannelLoginLoading = (): AuthNewActionTypes => ({
  type: AT.SECURE_CHANNEL_LOGIN_LOADING
})
export const secureChannelLoginSuccess = (): AuthNewActionTypes => ({
  type: AT.SECURE_CHANNEL_LOGIN_SUCCESS
})
export const secureChannelLoginNotAsked = () => ({
  type: AT.SECURE_CHANNEL_LOGIN_NOTASKED
})
export const secureChannelLoginFailure = (err: string): AuthNewActionTypes => ({
  type: AT.SECURE_CHANNEL_LOGIN_FAILURE,
  payload: { err }
})

// MISC
export const authenticate = () => ({ type: AT.AUTHENTICATE })
export const deauthorizeBrowser = () => ({ type: AT.DEAUTHORIZE_BROWSER })
export const setAuthType = (authType: number): AuthNewActionTypes => ({
  type: AT.SET_AUTH_TYPE,
  payload: { authType }
})
export const setRegisterEmail = (email: string): AuthNewActionTypes => ({
  type: AT.SET_REGISTER_EMAIL,
  payload: { email }
})
export const upgradeWallet = version => ({
  type: AT.UPGRADE_WALLET,
  payload: { version }
})
