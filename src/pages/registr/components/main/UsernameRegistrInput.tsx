// eslint-disable-next-line
import React, { memo } from 'react'

interface Props {
  onChangeRegistrUsernameHandler: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void
  inputRegistrUsernameValue: string
}
const UsernameRegistrInput: React.FC<Props> = ({
  onChangeRegistrUsernameHandler,
  inputRegistrUsernameValue,
}) => {
  return (
    <>
      <label className="registr-username-label">Username</label>
      <input
        className="registr-username-input"
        type="text"
        placeholder="Enter username"
        onChange={onChangeRegistrUsernameHandler}
        value={inputRegistrUsernameValue}
      />
    </>
  )
}

export default memo(UsernameRegistrInput)
