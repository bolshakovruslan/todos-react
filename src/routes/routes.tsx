// eslint-disable-next-line
import React from 'react'
import { Redirect, Route, Router } from 'react-router-dom'
import LoginPage from '../pages/login/Login'
import RegistrUserPage from '../pages/registr/Registr'
import Todos from '../pages/todos/Todos'
import history from '../history/history'

export const useRoutes = (isAutrorization: boolean) => {
  if (isAutrorization) {
    return (
      <Router history={history}>
        <Route exact path="/todos">
          <Todos />
        </Route>
        <Route exact path="/login">
          <Redirect to="/todos" />
        </Route>
        <Route exact path="/create">
          <Redirect to="/todos" />
        </Route>
        <Route exact path="/">
          <Redirect to="/todos" />
        </Route>
      </Router>
    )
  }
  return (
    <Router history={history}>
      <Route exact path="/create">
        <RegistrUserPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/todos">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Router>
  )
}
