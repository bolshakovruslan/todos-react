// eslint-disable-next-line
import React, { memo } from 'react'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes/routes'
import { useSelector } from 'react-redux'
import { isAutrorizationSelector } from './selectors/selectors'
import Loader from './loader/Loader'

const App: React.FC = () => {
  const isAutrorization = useSelector(isAutrorizationSelector)
  const routes = useRoutes(isAutrorization)

  return (
    <BrowserRouter>
      {routes}
      <Loader />
    </BrowserRouter>
  )
}

export default memo(App)
