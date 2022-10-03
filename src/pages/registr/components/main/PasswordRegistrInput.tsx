// eslint-disable-next-line
import React, { memo } from 'react'

interface Props {
  onChangeRegistrPasswordHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  inputRegistrPasswordValue: string
}

const PasswordRegistrInput: React.FC<Props> = ({
  onChangeRegistrPasswordHandler,
  inputRegistrPasswordValue,
}) => {
  return (
    <>
      <label className="registr-password-label">Password</label>
      <input
        className="registr-password-input"
        type="password"
        placeholder="Enter password"
        onChange={onChangeRegistrPasswordHandler}
        value={inputRegistrPasswordValue}
      />
    </>
  )
}

export default memo(PasswordRegistrInput)
