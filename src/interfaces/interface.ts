import { RAuth } from '../reducers/authReducer'
import { RTasks } from '../reducers/tasksReducer'

export interface Task {
  text: string
  _id: string
  active: boolean
  edit: boolean
}

export interface RequestValue {
  text: string
  id: string
}

export interface RequestUserValue {
  username?: string
  password?: string
}

export interface TokenBody {
  text: string
  token: string | null
}

export interface State {
  authReducer: RAuth
  tasksReducer: RTasks
}

export interface RegistrData {
  status: number
  text: string
  username?: string
  password?: string
}
