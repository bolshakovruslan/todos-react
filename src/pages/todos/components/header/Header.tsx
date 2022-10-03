// eslint-disable-next-line
import React, { memo } from 'react'
import Input from './Input'

interface Props {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  onPressedHandler: (e: React.KeyboardEvent) => void
  logoutHandler: () => void
  errorMessage: string
  inputValue: string
}

const Header: React.FC<Props> = ({
  onChangeHandler,
  onPressedHandler,
  errorMessage,
  inputValue,
  logoutHandler,
}) => {
  return (
    <header className="header">
      <h1 className="todos-tittle">todos</h1>
      <span>{errorMessage}</span>
      <button onClick={logoutHandler} className="todos-button-logout">
        LOGOUT
      </button>
      <Input
        inputValue={inputValue}
        onChangeHandler={onChangeHandler}
        onPressedHandler={onPressedHandler}
      />
    </header>
  )
}

export default memo(Header)
