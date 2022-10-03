// eslint-disable-next-line
import React, { memo } from 'react'
import ButtonLogin from './ButtonLogin'
import PasswordLoginInput from './PasswordLoginInput'
import UsernameLoginInput from './UsernameLoginInput'

interface Props {
  onChangeLoginUsernameHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangeLoginPasswordHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmitLogin: () => void
  inputLoginUsernameValue: string
  inputLoginPasswordValue: string
}

const MainLogin: React.FC<Props> = ({
  onChangeLoginUsernameHandler,
  onChangeLoginPasswordHandler,
  onSubmitLogin,
  inputLoginUsernameValue,
  inputLoginPasswordValue,
}) => {
  return (
    <main className="login-main">
      <UsernameLoginInput
        onChangeLoginUsernameHandler={onChangeLoginUsernameHandler}
        inputLoginUsernameValue={inputLoginUsernameValue}
      />
      <PasswordLoginInput
        onChangeLoginPasswordHandler={onChangeLoginPasswordHandler}
        inputLoginPasswordValue={inputLoginPasswordValue}
      />
      <ButtonLogin onSubmitLogin={onSubmitLogin} />
    </main>
  )
}

export default memo(MainLogin)
