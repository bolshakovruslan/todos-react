// eslint-disable-next-line
import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import HeaderLogin from './components/header/HeaderLogin'
import MainLogin from './components/main/MainLogin'
import FooterLogin from './components/footer/FooterLogin'
import { LoginUserRequest } from '../../actions/actionsAuth/actions'
import { messageSelector } from '../../selectors/selectors'

const LoginPage = () => {
  const [inputLoginUsernameValue, setInputLoginUsernameValue] = useState<string>('')
  const [inputLoginPasswordValue, setInputLoginPasswordValue] = useState<string>('')
  const message: string = useSelector(messageSelector)
  const dispatch = useDispatch()

  const onChangeLoginUsernameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLoginUsernameValue(e.target.value)
  }, [])

  const onChangeLoginPasswordHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputLoginPasswordValue(e.target.value)
  }, [])

  const onSubmitLogin = useCallback(() => {
    const trimInputUsernameValue = inputLoginUsernameValue.trim()
    const trimInputPasswordValue = inputLoginPasswordValue.trim()

    if (!trimInputUsernameValue || !trimInputPasswordValue) {
      setInputLoginPasswordValue('')
      return
    }

    const requestUserValue = {
      username: trimInputUsernameValue,
      password: trimInputPasswordValue
    }

    dispatch(LoginUserRequest(requestUserValue))
    setInputLoginPasswordValue('')
  }, [inputLoginUsernameValue, inputLoginPasswordValue, dispatch])

  const onPressed = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const trimInputUsernameValue = inputLoginUsernameValue.trim()
      const trimInputPasswordValue = inputLoginPasswordValue.trim()

      if (!trimInputUsernameValue || !trimInputPasswordValue) {
        setInputLoginPasswordValue('')
        return
      }

    const requestUserValue = {
      username: trimInputUsernameValue,
      password: trimInputPasswordValue
    }
    dispatch(LoginUserRequest(requestUserValue))
    setInputLoginPasswordValue('')
    }
  }, [inputLoginUsernameValue, inputLoginPasswordValue, dispatch])

  return (
    <div onKeyPress={onPressed}>
      <HeaderLogin message={message} />
      <MainLogin
        onChangeLoginUsernameHandler={onChangeLoginUsernameHandler}
        onChangeLoginPasswordHandler={onChangeLoginPasswordHandler}
        inputLoginUsernameValue={inputLoginUsernameValue}
        inputLoginPasswordValue={inputLoginPasswordValue}
        onSubmitLogin={onSubmitLogin}
      />
    <FooterLogin />
    </div>
  )
}

export default memo(LoginPage)