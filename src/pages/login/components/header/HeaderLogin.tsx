// eslint-disable-next-line
import React, { memo } from 'react'

interface Props {
  message: string
}

const HeaderLogin: React.FC<Props> = ({ message }) => {
  return (
    <header className="login-header">
      <h1 className="login-tittle">Login</h1>
      <div className="login-message-container">
        <p className="login-message">{message}</p>
      </div>
    </header>
  )
}

export default memo(HeaderLogin)
