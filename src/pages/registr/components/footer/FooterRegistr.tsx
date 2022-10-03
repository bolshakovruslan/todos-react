// eslint-disable-next-line
import React, { memo } from 'react'

interface Props {
  validationMessage: string
}

const FooterRegistr: React.FC<Props> = ({ validationMessage }) => {
  return (
    <footer>
      <div className="registr-footer-container">
        <p className="registr-footer-message">{validationMessage}</p>
      </div>
      <span className="registr-footer-span">
        Have an account?{' '}
        <a href="/login" className="registr-footer-link">
          Sign in
        </a>
      </span>
    </footer>
  )
}

export default memo(FooterRegistr)
