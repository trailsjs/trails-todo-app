import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './../ecosystems/TodoList'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import todos from './../../redux/reducers/todos'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const middlewares = [thunk]

const logger = createLogger()
middlewares.push(logger)

const store = createStore(
  todos,
  applyMiddleware(...middlewares)
)

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
)
