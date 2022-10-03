import { RequestValue, Task } from '../../interfaces/interface'
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
  FILTER,
} from './actionTypes'

export interface AddTaskRequestShape {
  type: ADD_TASK.REQUEST
  payload: {
    text: string
  }
}

export interface AddTaskSuccessShape {
  type: ADD_TASK.SUCCESS
  payload: {
    tasks: Task[]
  }
}

export interface AddTaskFailedShape {
  type: ADD_TASK.FAILED
  payload: {
    text: string
  }
}

export interface DeleteTaskRequestShape {
  type: DELETE_TASK.REQUEST
  payload: {
    id: string
  }
}

export interface DeleteTaskSuccessShape {
  type: DELETE_TASK.SUCCESS
  payload: {
    tasks: Task[]
  }
}

export interface DeleteTaskFailedShape {
  type: DELETE_TASK.FAILED
  payload: {
    text: string
  }
}

export interface CheckTaskRequestShape {
  type: CHECK_TASK.REQUEST
  payload: {
    id: string
  }
}

export interface CheckTaskSuccessShape {
  type: CHECK_TASK.SUCCESS
  payload: {
    tasks: Task[]
  }
}

export interface CheckTaskFailedShape {
  type: CHECK_TASK.FAILED
  payload: {
    text: string
  }
}

export interface EditTaskRequestShape {
  type: EDIT_TASK.REQUEST
  payload: {
    id: string
  }
}

export interface EditTaskSuccessShape {
  type: EDIT_TASK.SUCCESS
  payload: {
    tasks: Task[]
  }
}

export interface EditTaskFailedShape {
  type: EDIT_TASK.FAILED
  payload: {
    text: string
  }
}

export interface ChangeValueTaskRequestShape {
  type: CHANGE_VALUE_TASK.REQUEST
  payload: {
    requestValue: RequestValue
  }
}

export interface ChangeValueTaskSuccessShape {
  type: CHANGE_VALUE_TASK.SUCCESS
  payload: {
    tasks: Task[]
  }
}

export interface ChangeValueTaskFailedShape {
  type: CHANGE_VALUE_TASK.FAILED
  payload: {
    text: string
  }
}

export interface OnBlurTaskRequestShape {
  type: ON_BLUR_TASK.REQUEST
  payload: {
    id: string
  }
}

export interface OnBlurTaskSuccessShape {
  type: ON_BLUR_TASK.SUCCESS
  payload: {
    tasks: Task[]
  }
}

export interface OnBlurTaskFailedShape {
  type: ON_BLUR_TASK.FAILED
  payload: {
    text: string
  }
}

export interface CheckAllTasksRequestShape {
  type: CHECK_ALL_TASKS.REQUEST
}

export interface CheckAllTasksSuccessShape {
  type: CHECK_ALL_TASKS.SUCCESS
  payload: {
    tasks: Task[]
  }
}

export interface CheckAllTasksFailedShape {
  type: CHECK_ALL_TASKS.FAILED
  payload: {
    text: string
  }
}

export interface ClearCompletedTasksRequestShape {
  type: CLEAR_COMPLETED_TASKS.REQUEST
}

export interface ClearCompletedTasksSuccessShape {
  type: CLEAR_COMPLETED_TASKS.SUCCESS
  payload: {
    tasks: Task[]
  }
}

export interface ClearCompletedTasksFailedShape {
  type: CLEAR_COMPLETED_TASKS.FAILED
  payload: {
    text: string
  }
}

export interface GetTasksRequestShape {
  type: GET_TASKS.REQUEST
}

export interface GetTasksSuccessShape {
  type: GET_TASKS.SUCCESS
  payload: {
    tasks: Task[]
  }
}

export interface GetTasksFailedShape {
  type: GET_TASKS.FAILED
  payload: {
    text: string
  }
}

export interface FilterAllShape {
  type: FILTER.ALL
}

export interface FilterActiveShape {
  type: FILTER.ACTIVE
}

export interface FilterCompletedShape {
  type: FILTER.COMPLETED
}
