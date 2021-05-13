import { path } from 'ramda'

// export const isAuthenticated = path(['auth', 'isAuthenticated'])
export const getRegistering = path(['auth', 'registering'])
// export const getFirstLogin = path(['auth', 'firstLogin'])
// export const getAuthType = path(['auth', 'auth_type'])
export const getReset2fa = path(['auth', 'reset_2fa'])
export const getSecureChannelLogin = path(['auth', 'secureChannelLogin'])
export const getLogin = path(['auth', 'login'])
// export const getMobileLoginStarted = path(['auth', 'mobileLoginStarted'])
// export const getRegisterEmail = path(['auth', 'registerEmail'])
// state
export const getMetadataRestore = path(['auth', 'metadataRestore'])
