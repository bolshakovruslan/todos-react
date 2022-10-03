import { call, takeEvery } from 'redux-saga/effects'
import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTR_USER,
} from '../actions/actionsAuth/actionTypes'
import {
  ADD_TASK,
  CHANGE_VALUE_TASK,
  CHECK_ALL_TASKS,
  CHECK_TASK,
  CLEAR_COMPLETED_TASKS,
  DELETE_TASK,
  EDIT_TASK,
  GET_TASKS,
  ON_BLUR_TASK,
} from '../actions/actionsTodos/actionTypes'
import { registrUser, loginUser, logoutUser, startApp } from './authSagas'
import {
  addTask,
  changeValueTask,
  checkAllTasks,
  checkTask,
  clearCompletedTasks,
  deleteTask,
  editTask,
  getTasks,
  onBlurTask,
} from './todosSagas'

export default function* rootSaga() {
  yield call(startApp)
  yield takeEvery(ADD_TASK.REQUEST, addTask)
  yield takeEvery(DELETE_TASK.REQUEST, deleteTask)
  yield takeEvery(CHECK_TASK.REQUEST, checkTask)
  yield takeEvery(EDIT_TASK.REQUEST, editTask)
  yield takeEvery(CHANGE_VALUE_TASK.REQUEST, changeValueTask)
  yield takeEvery(ON_BLUR_TASK.REQUEST, onBlurTask)
  yield takeEvery(CHECK_ALL_TASKS.REQUEST, checkAllTasks)
  yield takeEvery(CLEAR_COMPLETED_TASKS.REQUEST, clearCompletedTasks)
  yield takeEvery(GET_TASKS.REQUEST, getTasks)
  yield takeEvery(REGISTR_USER.REQUEST, registrUser)
  yield takeEvery(LOGIN_USER.REQUEST, loginUser)
  yield takeEvery(LOGOUT_USER.REQUEST, logoutUser)
}
