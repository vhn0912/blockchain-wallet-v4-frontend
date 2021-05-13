import Remote from 'blockchain-wallet-v4/src/remote/remote'

import * as AT from './actionTypes'
import { AuthNewActionTypes, AuthState } from './types'

const INITIAL_STATE: AuthState = {
  auth_type: 0,
  isLoggingIn: false,
  isAuthenticated: false,
  firstLogin: false,
  metadataRestore: Remote.NotAsked,
  mobileLoginStarted: false,
  login: Remote.NotAsked,
  registerEmail: undefined
}

export function AuthReducer(
  state = INITIAL_STATE,
  action: AuthNewActionTypes
): AuthState {
  switch (action.type) {
    case AT.LOGIN: {
      return {
        ...state,
        isLoggingIn: true
      }
    }
    case AT.LOGIN_LOADING: {
      return {
        ...state,
        login: Remote.Loading
      }
    }
    //   case AT.LOGIN_SUCCESS: {
    //     return {
    //       ...state,
    //       login: Remote.Success(action.payload)
    //   }
    // }
    case AT.LOGIN_FAILURE: {
      return {
        ...state,
        login: Remote.Failure(action.payload.err)
      }
    }
    case AT.AUTHENTICATE: {
      return {
        ...state,
        isAuthenticated: true
      }
    }
    case AT.MOBILE_LOGIN_START: {
      return {
        ...state,
        mobileLoginStarted: true
      }
    }
    case AT.MOBILE_LOGIN_FINISH: {
      return {
        ...state,
        mobileLoginStarted: false
      }
    }

    case AT.SET_FIRST_LOGIN: {
      return {
        ...state,
        firstLogin: action.payload.firstLogin
      }
    }

    case AT.SET_AUTH_TYPE: {
      return {
        ...state,
        auth_type: action.payload.authType
      }
    }
    case AT.SET_REGISTER_EMAIL: {
      return {
        ...state,
        registerEmail: action.payload.email
      }
    }

    default:
      return state
  }
}
