import { RequestUserValue, TokenBody } from '../../interfaces/interface'
import {
  REGISTR_USER,
  LOGIN_USER,
  LOGOUT_USER,
  START_APP,
} from './actionTypes'

export interface RegistrUserRequestShape {
    type: REGISTR_USER.REQUEST
    payload: {
      requestUserValue: RequestUserValue
    }
  }
  
  export interface RegistrUserSuccessShape {
    type: REGISTR_USER.SUCCESS
    payload: {
      responseText: string
    }
  }
  
  export interface RegistrUserFailedShape {
    type: REGISTR_USER.FAILED
    payload: {
      responseText: string
    }
  }
  
  export interface LoginUserRequestShape {
    type: LOGIN_USER.REQUEST
    payload: {
      requestUserValue: RequestUserValue
    }
  }
  
  export interface LoginUserSuccessShape {
    type: LOGIN_USER.SUCCESS
    payload: {
      tokenBody: TokenBody
    }
  }
  
  export interface LoginUserFailedShape {
    type: LOGIN_USER.FAILED
    payload: {
      responseText: string
    }
  }
  
  export interface LogoutUserRequestShape {
    type: LOGOUT_USER.REQUEST
  }
  
  export interface LogoutUserSuccessShape {
    type: LOGOUT_USER.SUCCESS
  }
  
  export interface LogoutUserFailedShape {
    type: LOGOUT_USER.FAILED
    payload: {
      responseText: string
    }
  }
  
  export interface StartAppSuccessShape {
    type: START_APP.SUCCESS
    payload: {
      tokenBody: TokenBody
    }
  }
  