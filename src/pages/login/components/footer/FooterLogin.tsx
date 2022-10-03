// eslint-disable-next-line
import React, { memo } from 'react'

const FooterLogin: React.FC = () => {
  return (
    <footer className="login-footer">
      <span className="login-footer-span">Don't have an account? <a className="login-footer-link" href="/create">Registration</a></span>
    </footer>
  )
}

export default memo(FooterLogin)