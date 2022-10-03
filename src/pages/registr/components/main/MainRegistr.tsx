// eslint-disable-next-line
import React, { memo } from 'react'
import ButtonRegistr from './ButtonRegistr'
import PasswordRegistrInput from './PasswordRegistrInput'
import UsernameRegistrInput from './UsernameRegistrInput'

interface Props {
  onChangeRegistrUsernameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onChangeRegistrPasswordHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onSubmitRegistr: () => void,
  inputRegistrUsernameValue: string,
  inputRegistrPasswordValue: string
}

const MainRegistr: React.FC<Props> = ({ 
  onChangeRegistrUsernameHandler, 
  onChangeRegistrPasswordHandler, 
  onSubmitRegistr,
  inputRegistrUsernameValue,
  inputRegistrPasswordValue
}) => {
  return (
    <main className="registr-main">
      <UsernameRegistrInput onChangeRegistrUsernameHandler={onChangeRegistrUsernameHandler} inputRegistrUsernameValue={inputRegistrUsernameValue} />
      <PasswordRegistrInput onChangeRegistrPasswordHandler={onChangeRegistrPasswordHandler} inputRegistrPasswordValue={inputRegistrPasswordValue} />
      <ButtonRegistr onSubmitRegistr={onSubmitRegistr} />
    </main>
  )
}

export default memo(MainRegistr)