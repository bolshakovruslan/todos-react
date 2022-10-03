import { RequestUserValue, TokenBody } from '../../interfaces/interface'
import {
  RegistrUserFailedShape,
  RegistrUserRequestShape,
  RegistrUserSuccessShape,
  LoginUserFailedShape,
  LoginUserRequestShape,
  LoginUserSuccessShape,
  LogoutUserFailedShape,
  LogoutUserRequestShape,
  LogoutUserSuccessShape,
  StartAppSuccessShape
} from './actionShapes'
import { 
  REGISTR_USER,
  LOGIN_USER,
  LOGOUT_USER,
  START_APP
} from './actionTypes'

export const RegistrUserRequest = (requestUserValue: RequestUserValue): RegistrUserRequestShape => {
    return {
      type: REGISTR_USER.REQUEST,
      payload: {
        requestUserValue
      }
    }
  }
  
  export const RegistrUserSuccess = (responseText: string): RegistrUserSuccessShape => {
    return {
      type: REGISTR_USER.SUCCESS,
      payload: {
        responseText
      }
    }
  }
  
  export const RegistrUserFailed = (responseText: string): RegistrUserFailedShape => {
    return {
      type: REGISTR_USER.FAILED,
      payload: {
        responseText
      }
    }
  }
  
  export const LoginUserRequest = (requestUserValue: RequestUserValue): LoginUserRequestShape => {
    return {
      type: LOGIN_USER.REQUEST,
      payload: {
        requestUserValue
      }
    }
  }
  
  export const LoginUserSuccess = (tokenBody: TokenBody): LoginUserSuccessShape => {
    return {
      type: LOGIN_USER.SUCCESS,
      payload: {
        tokenBody
      }
    }
  }
  
  export const LoginUserFailed = (responseText: string): LoginUserFailedShape => {
    return {
      type: LOGIN_USER.FAILED,
      payload: {
        responseText
      }
    }
  }
  
  export const LogoutUserRequest = (): LogoutUserRequestShape => {
    return {
      type: LOGOUT_USER.REQUEST
    }
  }
  
  export const LogoutUserSuccess = (): LogoutUserSuccessShape => {
    return {
      type: LOGOUT_USER.SUCCESS
    }
  }
  
  export const LogoutUserFailed = (responseText: string): LogoutUserFailedShape => {
    return {
      type: LOGOUT_USER.FAILED,
      payload: {
        responseText
      }
    }
  }
  
  export const StartAppSuccess = (tokenBody: TokenBody): StartAppSuccessShape => {
    return {
      type: START_APP.SUCCESS,
      payload: {
        tokenBody
      }
    }
  }