// eslint-disable-next-line
import React, { memo } from 'react'

interface Props {
  onSubmitRegistr: () => void
}

const ButtonRegistr: React.FC<Props> = ({ onSubmitRegistr }) => {
  return (
    <button onClick={onSubmitRegistr} className="registr-main-button">
      CREATE
    </button>
  )
}

export default memo(ButtonRegistr)
