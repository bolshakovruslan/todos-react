import history from '../history/history'
import { put } from 'redux-saga/effects'
import { RegistrData, TokenBody } from '../interfaces/interface'
import { END_POINTS } from '../constants/endPoints'
import { URL, LOCAL_STORAGE_TOKEN } from '../constants/app'
import {
  LoginUserSuccess,
  RegistrUserSuccess,
  RegistrUserFailed,
  LoginUserFailed,
  LogoutUserFailed,
  LogoutUserSuccess,
  StartAppSuccess,
  LoginUserRequest,
} from '../actions/actionsAuth/actions'
import {
  LoginUserRequestShape,
  RegistrUserRequestShape,
} from '../actions/actionsAuth/actionShapes'

export function* registrUser(action: RegistrUserRequestShape) {
  try {
    const { requestUserValue } = action.payload
    const response = yield fetch(`${URL}${END_POINTS.SIGN_UP}`, {
      method: 'POST',
      body: JSON.stringify(requestUserValue),
    })

    const data: RegistrData = yield response.json()

    yield put(RegistrUserSuccess(data.text))
    if (data.status === 200) {
      history.push('/todos')
      const requestUserValue = {
        username: data.username,
        password: data.password,
      }
      yield put(LoginUserRequest(requestUserValue))
    }
  } catch (error) {
    yield put(RegistrUserFailed('Failed to create user'))
  }
}

export function* loginUser(action: LoginUserRequestShape) {
  try {
    const { requestUserValue } = action.payload
    const response = yield fetch(`${URL}${END_POINTS.SIGN_IN}`, {
      method: 'POST',
      body: JSON.stringify(requestUserValue),
    })

    const data: TokenBody = yield response.json()

    if (data.token !== null) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN, data.token)
      history.push('/todos')
      yield put(LoginUserSuccess(data))
    } else {
      yield put(LoginUserFailed(data.text))
    }
  } catch (error) {
    yield put(LoginUserFailed('Failed to login'))
  }
}

export function* logoutUser() {
  try {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN)
    history.push('/login')
    yield put(LogoutUserSuccess())
  } catch (error) {
    yield put(LogoutUserFailed('Oops.. Try again later'))
  }
}

export function* startApp() {
  try {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN)
    if (token) {
      yield put(StartAppSuccess({ text: 'app is running', token }))
    }
  } catch (error) {
    console.log(error)
  }
}
