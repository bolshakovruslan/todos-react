// eslint-disable-next-line
import React, { memo } from 'react'

interface Props {
  message: string
}

const HeaderRegistr: React.FC<Props> = ({ message }) => {
  return (
    <header className="registr-header">
      <h1 className="registr-tittle">Registration</h1>
      <div className="registr-message-container">
        <p className="registr-message">{message}</p>
      </div>
    </header>
  )
}

export default memo(HeaderRegistr)
