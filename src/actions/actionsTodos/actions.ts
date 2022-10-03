import { RequestValue, Task } from '../../interfaces/interface'
import {
  AddTaskFailedShape,
  AddTaskRequestShape,
  AddTaskSuccessShape,
  ChangeValueTaskFailedShape,
  ChangeValueTaskRequestShape,
  ChangeValueTaskSuccessShape,
  CheckAllTasksFailedShape,
  CheckAllTasksRequestShape,
  CheckAllTasksSuccessShape,
  CheckTaskFailedShape,
  CheckTaskRequestShape,
  CheckTaskSuccessShape,
  ClearCompletedTasksFailedShape,
  ClearCompletedTasksRequestShape,
  ClearCompletedTasksSuccessShape,
  DeleteTaskFailedShape,
  DeleteTaskRequestShape,
  DeleteTaskSuccessShape,
  EditTaskFailedShape,
  EditTaskRequestShape,
  EditTaskSuccessShape,
  FilterActiveShape,
  FilterAllShape,
  FilterCompletedShape,
  GetTasksFailedShape,
  GetTasksRequestShape,
  GetTasksSuccessShape,
  OnBlurTaskFailedShape,
  OnBlurTaskRequestShape,
  OnBlurTaskSuccessShape,
} from './actionShapes'
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
  FILTER,
} from './actionTypes'

export const AddTaskRequest = (text: string): AddTaskRequestShape => {
  return {
    type: ADD_TASK.REQUEST,
    payload: {
      text
    }
  }
}

export const AddTaskSuccess = (tasks: Task[]): AddTaskSuccessShape => {
  return {
    type: ADD_TASK.SUCCESS,
    payload: {
      tasks
    }
  }
}

export const AddTaskFailed = (text: string): AddTaskFailedShape => {
  return {
    type: ADD_TASK.FAILED,
    payload: {
      text
    }
  }
}

export const DeleteTaskRequest = (id: string): DeleteTaskRequestShape => {
  return {
    type: DELETE_TASK.REQUEST,
    payload: {
      id
    }
  }
}

export const DeleteTaskSuccess = (tasks: Task[]): DeleteTaskSuccessShape => {
  return {
    type: DELETE_TASK.SUCCESS,
    payload: {
      tasks
    }
  }
}

export const DeleteTaskFailed = (text: string): DeleteTaskFailedShape => {
  return {
    type: DELETE_TASK.FAILED,
    payload: {
      text
    }
  }
}

export const CheckTaskRequest = (id: string): CheckTaskRequestShape => {
  return {
    type: CHECK_TASK.REQUEST,
    payload: {
      id
    }
  }
}

export const CheckTaskSuccess = (tasks: Task[]): CheckTaskSuccessShape => {
  return {
    type: CHECK_TASK.SUCCESS,
    payload: {
      tasks
    }
  }
}

export const CheckTaskFailed = (text: string): CheckTaskFailedShape => {
  return {
    type: CHECK_TASK.FAILED,
    payload: {
      text
    }
  }
}

export const EditTaskRequest = (id: string): EditTaskRequestShape => {
  return {
    type: EDIT_TASK.REQUEST,
    payload: {
      id
    }
  }
}

export const EditTaskSuccess = (tasks: Task[]): EditTaskSuccessShape => {
  return {
    type: EDIT_TASK.SUCCESS,
    payload: {
      tasks
    }
  }
}

export const EditTaskFailed = (text: string): EditTaskFailedShape => {
  return {
    type: EDIT_TASK.FAILED,
    payload: {
      text
    }
  }
}

export const ChangeValueTaskRequest = (requestValue: RequestValue): ChangeValueTaskRequestShape => {
  return {
    type: CHANGE_VALUE_TASK.REQUEST,
    payload: {
      requestValue
    }
  }
}

export const ChangeValueTaskSuccess = (tasks: Task[]): ChangeValueTaskSuccessShape => {
  return {
    type: CHANGE_VALUE_TASK.SUCCESS,
    payload: {
      tasks
    }
  }
}

export const ChangeValueTaskFailed = (text: string): ChangeValueTaskFailedShape => {
  return {
    type: CHANGE_VALUE_TASK.FAILED,
    payload: {
      text
    }
  }
}

export const OnBlurTaskRequest = (id: string): OnBlurTaskRequestShape => {
  return {
    type: ON_BLUR_TASK.REQUEST,
    payload: {
      id
    }
  }
}

export const OnBlurTaskSuccess = (tasks: Task[]): OnBlurTaskSuccessShape => {
  return {
    type: ON_BLUR_TASK.SUCCESS,
    payload: {
      tasks
    }
  }
}

export const OnBlurTaskFailed = (text: string): OnBlurTaskFailedShape => {
  return {
    type: ON_BLUR_TASK.FAILED,
    payload: {
      text
    }
  }
}

export const CheckAllTasksRequest = (): CheckAllTasksRequestShape => {
  return {
    type: CHECK_ALL_TASKS.REQUEST,
  }
}

export const CheckAllTasksSuccess = (tasks: Task[]): CheckAllTasksSuccessShape => {
  return {
    type: CHECK_ALL_TASKS.SUCCESS,
    payload: {
      tasks
    }
  }
}

export const CheckAllTasksFailed = (text: string): CheckAllTasksFailedShape => {
  return {
    type: CHECK_ALL_TASKS.FAILED,
    payload: {
      text
    }
  }
}

export const ClearCompletedTasksRequest = (): ClearCompletedTasksRequestShape => {
  return {
    type: CLEAR_COMPLETED_TASKS.REQUEST,
  }
}

export const ClearCompletedTasksSuccess = (tasks: Task[]): ClearCompletedTasksSuccessShape => {
  return {
    type: CLEAR_COMPLETED_TASKS.SUCCESS,
    payload: {
      tasks
    }
  }
}

export const ClearCompletedTasksFailed = (text: string): ClearCompletedTasksFailedShape => {
  return {
    type: CLEAR_COMPLETED_TASKS.FAILED,
    payload: {
      text
    }
  }
}

export const GetTasksRequest = (): GetTasksRequestShape => {
  return {
    type: GET_TASKS.REQUEST,
  }
}

export const GetTasksSuccess = (tasks: Task[]): GetTasksSuccessShape => {
  return {
    type: GET_TASKS.SUCCESS,
    payload: {
      tasks
    }
  }
}

export const GetTasksFailed = (text: string): GetTasksFailedShape => {
  return {
    type: GET_TASKS.FAILED,
    payload: {
      text
    }
  }
}

export const FilterAll = (): FilterAllShape => {
  return {
    type: FILTER.ALL
  }
}

export const FilterActive = (): FilterActiveShape => {
  return {
    type: FILTER.ACTIVE
  }
}

export const FilterCompleted = (): FilterCompletedShape => {
  return {
    type: FILTER.COMPLETED
  }
}
