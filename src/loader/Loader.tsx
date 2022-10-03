// eslint-disable-next-line
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import loader from '../img/loader.gif'
import { loaderSelector } from '../selectors/selectors'

const Loader: React.FC = () => {
  const isFetching: boolean = useSelector(loaderSelector)
  return (
    <img alt="loader" src={`${isFetching ? loader : null}`} className={`loader ${isFetching ? '' : 'hidden'}`} />
  )
}

export default memo(Loader)