import { MODES } from '../constants/app'
import { FILTER } from '../actions/actionsTodos/actionTypes'
import { Task } from '../interfaces/interface'
import {
  ADD_TASK,
  DELETE_TASK,
  CHECK_TASK,
  EDIT_TASK,
  CHANGE_VALUE_TASK,
  ON_BLUR_TASK,
  CHECK_ALL_TASKS,
  CLEAR_COMPLETED_TASKS,
  GET_TASKS,
} from '../actions/actionsTodos/actionTypes'
import {
  AddTaskFailedShape,
  AddTaskSuccessShape,
  ChangeValueTaskFailedShape,
  ChangeValueTaskSuccessShape,
  CheckAllTasksFailedShape,
  CheckAllTasksSuccessShape,
  CheckTaskFailedShape,
  CheckTaskSuccessShape,
  ClearCompletedTasksFailedShape,
  ClearCompletedTasksSuccessShape,
  DeleteTaskFailedShape,
  DeleteTaskSuccessShape,
  EditTaskFailedShape,
  EditTaskSuccessShape,
  FilterActiveShape,
  FilterAllShape,
  FilterCompletedShape,
  GetTasksFailedShape,
  GetTasksSuccessShape,
  OnBlurTaskFailedShape,
  OnBlurTaskSuccessShape,
} from '../actions/actionsTodos/actionShapes'

export interface RTasks {
  tasks: Task[]
  displayingTasks: Task[]
  mode: string
  errorMessage: string
}

type Actions =
  | AddTaskSuccessShape
  | AddTaskFailedShape
  | DeleteTaskSuccessShape
  | DeleteTaskFailedShape
  | CheckTaskSuccessShape
  | CheckTaskFailedShape
  | EditTaskSuccessShape
  | EditTaskFailedShape
  | ChangeValueTaskSuccessShape
  | ChangeValueTaskFailedShape
  | OnBlurTaskSuccessShape
  | OnBlurTaskFailedShape
  | CheckAllTasksSuccessShape
  | CheckAllTasksFailedShape
  | ClearCompletedTasksSuccessShape
  | ClearCompletedTasksFailedShape
  | GetTasksSuccessShape
  | GetTasksFailedShape
  | FilterAllShape
  | FilterActiveShape
  | FilterCompletedShape

const initialState: RTasks = {
  tasks: [],
  displayingTasks: [],
  mode: MODES.ALL,
  errorMessage: '',
}

export const tasksReducer = (state = initialState, action: Actions) => {
  const { tasks } = state
  switch (action.type) {
    case ADD_TASK.SUCCESS:
    case DELETE_TASK.SUCCESS:
    case CHECK_TASK.SUCCESS:
    case EDIT_TASK.SUCCESS:
    case CHANGE_VALUE_TASK.SUCCESS:
    case ON_BLUR_TASK.SUCCESS:
    case CHECK_ALL_TASKS.SUCCESS:
    case CLEAR_COMPLETED_TASKS.SUCCESS:
    case GET_TASKS.SUCCESS:
      return {
        ...state,
        tasks: action.payload.tasks,
        displayingTasks: action.payload.tasks,
        mode: MODES.ALL,
      }
    case ADD_TASK.FAILED:
    case DELETE_TASK.FAILED:
    case CHECK_TASK.FAILED:
    case EDIT_TASK.FAILED:
    case CHANGE_VALUE_TASK.FAILED:
    case ON_BLUR_TASK.FAILED:
    case CHECK_ALL_TASKS.FAILED:
    case CLEAR_COMPLETED_TASKS.FAILED:
    case GET_TASKS.FAILED:
      return {
        ...state,
        mode: MODES.ALL,
        errorMessage: action.payload.text,
      }
    case FILTER.ALL:
      return {
        ...state,
        displayingTasks: tasks,
        mode: MODES.ALL,
      }
    case FILTER.ACTIVE:
      const filteredActiveTasks = tasks.filter((item: Task) => !item.active)
      return {
        ...state,
        displayingTasks: filteredActiveTasks,
        mode: MODES.ACTIVE,
      }
    case FILTER.COMPLETED:
      const filteredCompletedTasks = tasks.filter((item: Task) => item.active)
      return {
        ...state,
        displayingTasks: filteredCompletedTasks,
        mode: MODES.COMPLETED,
      }
    default:
      return state
  }
}
