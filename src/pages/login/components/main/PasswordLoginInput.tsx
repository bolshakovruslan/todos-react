// eslint-disable-next-line
import React, { memo } from 'react'

interface Props {
  onChangeLoginPasswordHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputLoginPasswordValue: string
}

const PasswordLoginInput: React.FC<Props> = ({
  onChangeLoginPasswordHandler,
  inputLoginPasswordValue,
}) => {
  return (
    <>
      <label className="login-password-label">Password</label>
      <input
        className="login-password-input"
        type="password"
        placeholder="Enter password"
        onChange={onChangeLoginPasswordHandler}
        value={inputLoginPasswordValue}
      />
    </>
  )
}

export default memo(PasswordLoginInput)
