// eslint-disable-next-line
import React, { memo } from 'react'

interface Props {
  onSubmitLogin: () => void
}

const ButtonLogin: React.FC<Props> = ({ onSubmitLogin }) => {
  return (
    <button onClick={onSubmitLogin} className="login-main-button">
      LOGIN
    </button>
  )
}

export default memo(ButtonLogin)
