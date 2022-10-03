import { Task } from '../interfaces/interface'
import { State } from '../interfaces/interface'

export const displayingTasksSelector = ((state: State): Task[] => state.tasksReducer.displayingTasks)

export const tasksSelector = ((state: State): Task[] => state.tasksReducer.tasks)

export const modeSelector = ((state: State): string => state.tasksReducer.mode)

export const errorSelector = ((state: State): string => state.tasksReducer.errorMessage)

export const messageSelector = ((state: State): string => state.authReducer.message)

export const isAutrorizationSelector = ((state: State): boolean => state.authReducer.isAutrorization)

export const tokenSelector = ((state: State): string | null => state.authReducer.token)

export const loaderSelector = ((state: State): boolean => state.authReducer.isFetching) 