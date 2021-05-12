import * as AT from './actionTypes'

export enum LoginSteps {
  CHECK_EMAIL = 'CHECK_EMAIL',
  ENTER_EMAIL_GUID = 'ENTER_EMAIL_GUID',
  ENTER_PASSWORD = 'ENTER_PASSWORD',
  ENTER_TWO_FACTOR = 'ENTER_TWO_FACTOR',
  LOADING = 'LOADING',
  VERIFICATION_MOBILE = 'VERIFICATION_MOBILE'
}

export type LoginFormType = {
  email: string
  guid: string
  guidOrEmail: string
  password: string
  step: LoginSteps
  twoFA?: number | string
}

export type LoginObject = {
  email: string
  email_code: string
  guid: string
  is_mobile_setup: string | boolean
}

// actions

interface InitalizeLoginSuccessActionType {
  type: typeof AT.INTIALIZE_LOGIN_SUCCESS
}

interface InitializeLoginLoadingActionType {
  type: typeof AT.INTIALIZE_LOGIN_LOADING
}

interface InitializeLoginFailureActionType {
  type: typeof AT.INTIALIZE_LOGIN_FAILURE
}

interface LoginGuidSuccessActionType {
  type: typeof AT.LOGIN_GUID_SUCCESS
}

interface LoginGuidLoadingActionType {
  type: typeof AT.LOGIN_GUID_LOADING
}

interface LoginGuidFailureActionType {
  type: typeof AT.LOGIN_GUID_FAILURE
}

interface WalletGuidSubmitSuccessActionType {
  type: typeof AT.GUID_WALLET_SUCCESS
}

interface WalletGuidSubmitLoadingActionType {
  type: typeof AT.GUID_WALLET_LOADING
}

interface WalletGuidSubmitFailureActionType {
  type: typeof AT.GUID_WALLET_FAILURE
}
interface LoginSuccessActionType {
  type: typeof AT.LOGIN_SUCCESS
}

interface LoginFailureActionType {
  type: typeof AT.LOGIN_FAILURE
}

interface LoginLoadingActionType {
  type: typeof AT.LOGIN_LOADING
}

interface RegisterSuccessActionType {
  type: typeof AT.REGISTER_SUCCESS
}

interface RegisterFailureActionType {
  type: typeof AT.REGISTER_FAILURE
}

interface RegisterLoadingActionType {
  type: typeof AT.REGISTER_LOADING
}

interface Reset2faLoadingActionType {
  type: typeof AT.RESET_2FA_LOADING
}

interface Reset2faFailureActionType {
  type: typeof AT.RESET_2FA_FAILURE
}

interface Reset2faSuccessActionType {
  type: typeof AT.RESET_2FA_SUCCESS
}

interface RestoreLoadingActionType {
  type: typeof AT.RESTORE_LOADING
}

interface RestoreSuccessActionType {
  type: typeof AT.RESTORE_SUCCESS
}

interface RestoreFailureActionType {
  type: typeof AT.RESTORE_FAILURE
}

interface RestoreFromMetadataLoadingActionType {
  type: typeof AT.RESTORE_FROM_METADATA_LOADING
}

interface RestoreFromMetadataSuccessActionType {
  type: typeof AT.RESTORE_FROM_METADATA_SUCCESS
}

interface RestoreFromMetadataFailureActionType {
  type: typeof AT.RESTORE_FROM_METADATA_FAILURE
}

interface SecureChannelLoadingActionType {
  type: typeof AT.SECURE_CHANNEL_LOGIN_LOADING
}
interface SecureChannelSuccessActionType {
  type: typeof AT.SECURE_CHANNEL_LOGIN_SUCCESS
}
interface SecureChannelFailureActionType {
  type: typeof AT.SECURE_CHANNEL_LOGIN_FAILURE
}

export type AuthNewActionTypes =
  | InitializeLoginFailureActionType
  | InitializeLoginLoadingActionType
  | InitalizeLoginSuccessActionType
  | LoginGuidFailureActionType
  | LoginGuidLoadingActionType
  | LoginGuidSuccessActionType
  | LoginFailureActionType
  | LoginLoadingActionType
  | LoginSuccessActionType
  | RegisterLoadingActionType
  | RegisterFailureActionType
  | RegisterSuccessActionType
  | Reset2faLoadingActionType
  | Reset2faFailureActionType
  | Reset2faSuccessActionType
  | RestoreFailureActionType
  | RestoreLoadingActionType
  | RestoreSuccessActionType
  | RestoreFromMetadataFailureActionType
  | RestoreFromMetadataLoadingActionType
  | RestoreFromMetadataSuccessActionType
  | SecureChannelFailureActionType
  | SecureChannelLoadingActionType
  | SecureChannelSuccessActionType
  | WalletGuidSubmitSuccessActionType
  | WalletGuidSubmitLoadingActionType
  | WalletGuidSubmitFailureActionType
