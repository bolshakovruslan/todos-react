// eslint-disable-next-line
import React, { memo } from 'react'

interface Props {
  onChangeLoginUsernameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputLoginUsernameValue: string
}

const UsernameLoginInput: React.FC<Props> = ({
  onChangeLoginUsernameHandler,
  inputLoginUsernameValue,
}) => {
  return (
    <>
      <label className="login-username-label">Username</label>
      <input
        className="login-username-input"
        type="text"
        placeholder="Enter username"
        onChange={onChangeLoginUsernameHandler}
        value={inputLoginUsernameValue}
      />
    </>
  )
}

export default memo(UsernameLoginInput)
