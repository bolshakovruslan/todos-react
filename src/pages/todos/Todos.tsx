// eslint-disable-next-line
import React, { useCallback, useState, useEffect, memo, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { MODES } from '../../constants/app'
import { Task } from '../../interfaces/interface'
import {
  displayingTasksSelector,
  modeSelector,
  errorSelector,
  tasksSelector,
} from '../../selectors/selectors'
import {
  AddTaskRequest,
  DeleteTaskRequest,
  CheckTaskRequest,
  EditTaskRequest,
  ChangeValueTaskRequest,
  OnBlurTaskRequest,
  CheckAllTasksRequest,
  ClearCompletedTasksRequest,
  GetTasksRequest,
  FilterAll,
  FilterActive,
  FilterCompleted,
} from '../../actions/actionsTodos/actions'
import { LogoutUserRequest } from '../../actions/actionsAuth/actions'

const Todos: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputItemValue, setInputItemValue] = useState<string>('')
  const displayingTasks: Task[] = useSelector(displayingTasksSelector)
  const allTasks: Task[] = useSelector(tasksSelector)
  const mode: string = useSelector(modeSelector)
  const errorMessage: string = useSelector(errorSelector)
  const dispatch = useDispatch()

  const getTasks = useCallback(() => {
    dispatch(GetTasksRequest())
  }, [dispatch])

  useEffect(() => {
    getTasks()
  }, [getTasks])

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    },
    []
  )

  const onPressed = useCallback(
    async (e: React.KeyboardEvent) => {
      const trimInputValue = inputValue.trim()
      const keyEnter = 'Enter'

      if (!trimInputValue) {
        return
      }

      if (e.key === keyEnter) {
        setInputValue('')
        dispatch(AddTaskRequest(inputValue))
      }
    },
    [inputValue, dispatch]
  )

  const deleteItemHandler = useCallback(
    (id: string) => {
      dispatch(DeleteTaskRequest(id))
    },
    [dispatch]
  )

  const checkItemHandler = useCallback(
    (id: string) => {
      dispatch(CheckTaskRequest(id))
    },
    [dispatch]
  )

  const editItemHandler = useCallback(
    (id: string) => {
      dispatch(EditTaskRequest(id))
    },
    [dispatch]
  )

  const onChangeValueItemHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputItemValue(e.target.value)
    },
    []
  )

  const onPressedInputItemHandler = useCallback(
    (e: React.KeyboardEvent, id: string) => {
      const keyEnter = 'Enter'
      if (e.key === keyEnter) {
        const requestValue = {
          text: inputItemValue,
          id,
        }
        setInputItemValue(inputItemValue)
        dispatch(ChangeValueTaskRequest(requestValue))
        setInputItemValue('')
      }
    },
    [inputItemValue, dispatch]
  )

  const onBlurHandler = useCallback(
    (id: string) => {
      dispatch(OnBlurTaskRequest(id))
    },
    [dispatch]
  )

  const checkAllHandler = useCallback(() => {
    dispatch(CheckAllTasksRequest())
  }, [dispatch])

  const clearCompletedHandler = useCallback(() => {
    dispatch(ClearCompletedTasksRequest())
  }, [dispatch])

  const filterAll = useCallback(() => {
    dispatch(FilterAll())
  }, [dispatch])

  const filterActive = useCallback(() => {
    dispatch(FilterActive())
  }, [dispatch])

  const filterCompleted = useCallback(() => {
    dispatch(FilterCompleted())
  }, [dispatch])

  const countTasks = useMemo(() => {
    if (allTasks.length || mode === MODES.ACTIVE || mode === MODES.COMPLETED) {
      const count = allTasks.filter((item: Task) => !item.active).length
      return `${count} ${count === 1 ? 'item left' : 'items left'}`
    }
  }, [allTasks, mode])

  const logoutHandler = useCallback(() => {
    dispatch(LogoutUserRequest())
  }, [dispatch])

  return (
    <>
      <Header
        onChangeHandler={onChangeValue}
        onPressedHandler={onPressed}
        errorMessage={errorMessage}
        inputValue={inputValue}
        logoutHandler={logoutHandler}
      />
      <Main
        tasks={displayingTasks}
        onClickCheckAll={checkAllHandler}
        onCheckHandler={checkItemHandler}
        onDeleteHandler={deleteItemHandler}
        onEditHandler={editItemHandler}
        onBlurChangeHandler={onBlurHandler}
        onChangeValueItemHandler={onChangeValueItemHandler}
        onPressedItemHandler={onPressedInputItemHandler}
      />
      <Footer
        mode={mode}
        tasks={displayingTasks}
        counter={countTasks}
        filterAll={filterAll}
        filterActive={filterActive}
        filterCompleted={filterCompleted}
        clearCompletedHandler={clearCompletedHandler}
      />
    </>
  )
}

export default memo(Todos)
