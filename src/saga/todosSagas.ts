import { put } from 'redux-saga/effects'
import { END_POINTS } from '../constants/endPoints'
import { URL } from '../constants/app'
import { select } from 'redux-saga/effects'
import { tokenSelector } from '../selectors/selectors'
import { Task } from '../interfaces/interface'
import {
  AddTaskSuccess,
  AddTaskFailed,
  DeleteTaskSuccess,
  DeleteTaskFailed,
  CheckTaskSuccess,
  CheckTaskFailed,
  EditTaskSuccess,
  EditTaskFailed,
  ChangeValueTaskSuccess,
  ChangeValueTaskFailed,
  OnBlurTaskSuccess,
  OnBlurTaskFailed,
  CheckAllTasksSuccess,
  CheckAllTasksFailed,
  ClearCompletedTasksSuccess,
  ClearCompletedTasksFailed,
  GetTasksSuccess,
  GetTasksFailed,
} from '../actions/actionsTodos/actions'
import {
  AddTaskRequestShape,
  ChangeValueTaskRequestShape,
  CheckTaskRequestShape,
  DeleteTaskRequestShape,
  EditTaskRequestShape,
  OnBlurTaskRequestShape,
} from '../actions/actionsTodos/actionShapes'

export function* addTask(action: AddTaskRequestShape) {
  try {
    const { text } = action.payload
    const token = yield select(tokenSelector)
    const response = yield fetch(`${URL}${END_POINTS.ADD}`, {
      method: 'POST',
      body: JSON.stringify(text),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const tasks: Task[] = yield response.json()
    yield put(AddTaskSuccess(tasks))
  } catch (error) {
    yield put(AddTaskFailed('Failed to add task'))
  }
}

export function* deleteTask(action: DeleteTaskRequestShape) {
  try {
    const { id } = action.payload
    const token = yield select(tokenSelector)
    const response = yield fetch(`${URL}${END_POINTS.DELETE}`, {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const tasks: Task[] = yield response.json()
    yield put(DeleteTaskSuccess(tasks))
  } catch (error) {
    yield put(DeleteTaskFailed('Failed to delete task'))
  }
}

export function* checkTask(action: CheckTaskRequestShape) {
  try {
    const { id } = action.payload
    const token = yield select(tokenSelector)
    const response = yield fetch(`${URL}${END_POINTS.CHECK}`, {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const tasks: Task[] = yield response.json()
    yield put(CheckTaskSuccess(tasks))
  } catch (error) {
    yield put(CheckTaskFailed('Failed to check task'))
  }
}

export function* editTask(action: EditTaskRequestShape) {
  try {
    const { id } = action.payload
    const token = yield select(tokenSelector)
    const response = yield fetch(`${URL}${END_POINTS.EDIT}`, {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const tasks: Task[] = yield response.json()
    yield put(EditTaskSuccess(tasks))
  } catch (error) {
    yield put(EditTaskFailed('Failed to edit task'))
  }
}

export function* changeValueTask(action: ChangeValueTaskRequestShape) {
  try {
    const { requestValue } = action.payload
    const token = yield select(tokenSelector)
    const response = yield fetch(`${URL}${END_POINTS.CHANGE_VALUE}`, {
      method: 'POST',
      body: JSON.stringify(requestValue),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const tasks: Task[] = yield response.json()
    yield put(ChangeValueTaskSuccess(tasks))
  } catch (error) {
    yield put(ChangeValueTaskFailed('Failed to change value in task'))
  }
}

export function* onBlurTask(action: OnBlurTaskRequestShape) {
  try {
    const { id } = action.payload
    const token = yield select(tokenSelector)
    const response = yield fetch(`${URL}${END_POINTS.BLUR}`, {
      method: 'POST',
      body: JSON.stringify(id),
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const tasks: Task[] = yield response.json()
    yield put(OnBlurTaskSuccess(tasks))
  } catch (error) {
    yield put(OnBlurTaskFailed('Failed to blur task'))
  }
}

export function* checkAllTasks() {
  try {
    const token = yield select(tokenSelector)
    const response = yield fetch(`${URL}${END_POINTS.CHECK_ALL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const tasks: Task[] = yield response.json()
    yield put(CheckAllTasksSuccess(tasks))
  } catch (error) {
    yield put(CheckAllTasksFailed('Failed to check all tasks'))
  }
}

export function* clearCompletedTasks() {
  try {
    const token = yield select(tokenSelector)
    const response = yield fetch(`${URL}${END_POINTS.CLEAR_COMPLETED}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const tasks: Task[] = yield response.json()
    yield put(ClearCompletedTasksSuccess(tasks))
  } catch (error) {
    yield put(ClearCompletedTasksFailed('Failed to clear completed tasks'))
  }
}

export function* getTasks() {
  try {
    const token = yield select(tokenSelector)
    const response = yield fetch(`${URL}${END_POINTS.TASKS}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const tasks: Task[] = yield response.json()
    yield put(GetTasksSuccess(tasks))
  } catch (error) {
    yield put(GetTasksFailed('Failed to get tasks'))
  }
}
