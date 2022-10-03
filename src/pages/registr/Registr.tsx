// eslint-disable-next-line
import React, { memo, useCallback, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RegistrUserRequest } from '../../actions/actionsAuth/actions'
import { messageSelector } from '../../selectors/selectors'
import FooterRegistr from './components/footer/FooterRegistr'
import HeaderRegistr from './components/header/HeaderRegistr'
import MainRegistr from './components/main/MainRegistr'

const RegistrUserPage = () => {
  const [inputRegistrUsernameValue, setInputRegistrUsernameValue] = useState<string>('')
  const [inputRegistrPasswordValue, setInputRegistrPasswordValue] = useState<string>('')
  const [validationMessage, setValidationMessage] = useState<string>('')
  const message: string = useSelector(messageSelector)
  const dispatch = useDispatch()

  const onChangeRegistrUsernameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputRegistrUsernameValue(e.target.value)
  }, [])

  const onChangeRegistrPasswordHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputRegistrPasswordValue(e.target.value)
  }, [])

  const onSubmitRegistr = useCallback(() => {
    setValidationMessage('Username must be at least 4 characters and password must be at least 6 symbols')
    const trimInputUsernameValue = inputRegistrUsernameValue.trim()
    const trimInputPasswordValue = inputRegistrPasswordValue.trim()

    if (!trimInputUsernameValue || !trimInputPasswordValue || trimInputUsernameValue.length < 4 || trimInputPasswordValue.length < 6) {
      setInputRegistrPasswordValue('')
      return
    }

    const requestUserValue = {
      username: trimInputUsernameValue,
      password: trimInputPasswordValue
    }
        
    dispatch(RegistrUserRequest(requestUserValue))
    setInputRegistrPasswordValue('')
    setValidationMessage('')
  }, [inputRegistrUsernameValue, inputRegistrPasswordValue, dispatch])

  const onPressed = useCallback((e:React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setValidationMessage('Username must be at least 4 characters and password must be at least 6 symbols')
      const trimInputUsernameValue = inputRegistrUsernameValue.trim()
      const trimInputPasswordValue = inputRegistrPasswordValue.trim()
        
      if (!trimInputUsernameValue || !trimInputPasswordValue || trimInputUsernameValue.length < 4 || trimInputPasswordValue.length < 6) {
        setInputRegistrPasswordValue('')
        return
      }
    
      const requestUserValue = {
        username: trimInputUsernameValue,
        password: trimInputPasswordValue
      }
            
      dispatch(RegistrUserRequest(requestUserValue))
      setInputRegistrPasswordValue('')
      setValidationMessage('')
    }
  }, [inputRegistrUsernameValue, inputRegistrPasswordValue, dispatch])

  return (
    <div onKeyPress={onPressed}>
      <HeaderRegistr message={message} />
      <MainRegistr 
        onChangeRegistrUsernameHandler={onChangeRegistrUsernameHandler}
        onChangeRegistrPasswordHandler={onChangeRegistrPasswordHandler}
        inputRegistrUsernameValue={inputRegistrUsernameValue}
        inputRegistrPasswordValue={inputRegistrPasswordValue}
        onSubmitRegistr={onSubmitRegistr}
      />
      <FooterRegistr validationMessage={validationMessage} />
    </div>
  )
}

export default memo(RegistrUserPage)