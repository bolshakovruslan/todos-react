import {
  REGISTR_USER,
  LOGIN_USER,
  LOGOUT_USER,
  START_APP,
} from '../actions/actionsAuth/actionTypes'
import {
  RegistrUserFailedShape,
  RegistrUserSuccessShape,
  LoginUserFailedShape,
  LoginUserSuccessShape,
  LogoutUserFailedShape,
  LogoutUserSuccessShape,
  StartAppSuccessShape,
  RegistrUserRequestShape,
  LoginUserRequestShape,
  LogoutUserRequestShape,
} from '../actions/actionsAuth/actionShapes'

export interface RAuth {
  message: string
  token: string | null
  isAutrorization: boolean
  isFetching: boolean
}

type Actions =
  | RegistrUserFailedShape
  | RegistrUserSuccessShape
  | LoginUserFailedShape
  | LoginUserSuccessShape
  | LogoutUserSuccessShape
  | LogoutUserFailedShape
  | StartAppSuccessShape
  | RegistrUserRequestShape
  | LoginUserRequestShape
  | LogoutUserRequestShape

const initialState: RAuth = {
  message: '',
  token: null,
  isAutrorization: false,
  isFetching: false,
}

export const authReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case REGISTR_USER.REQUEST:
    case LOGIN_USER.REQUEST:
    case LOGOUT_USER.REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case REGISTR_USER.SUCCESS:
      return {
        ...state,
        message: action.payload.responseText,
        isFetching: false,
      }
    case LOGIN_USER.SUCCESS:
    case START_APP.SUCCESS:
      const { token } = action.payload.tokenBody
      return {
        ...state,
        token: token,
        isAutrorization: true,
        isFetching: false,
      }
    case LOGOUT_USER.SUCCESS:
      return {
        ...state,
        token: null,
        message: '',
        isAutrorization: false,
        isFetching: false,
      }
    case REGISTR_USER.FAILED:
    case LOGIN_USER.FAILED:
    case LOGOUT_USER.FAILED:
      return {
        ...state,
        message: action.payload.responseText,
        isFetching: false,
      }
    default:
      return state
  }
}
