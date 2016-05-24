import _ from 'lodash'

import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  REMOVE_TODO_REQUEST,
  TOGGLE_TODO_COMPLETE_REQUEST,
  TOGGLE_TODO_COMPLETE_SUCCESS,
  TOGGLE_TODO_EDITING,
  UPDATE_TODO_DESCRIPTION_REQUEST,
  REMOVE_COMPLETED_TODOS_REQUEST,
  TOGGLE_TODOS_COMPLETION_REQUEST,
  TOGGLE_TODOS_COMPLETION_SUCCESS
} from './../actions'

function mergeUpdates(collection, updates) {

  if (!updates.length) {
    updates = [updates]
  }

  return collection.map(todo => {
    const updatedTodo = updates.find(update => update.id === todo.id)
    if (updatedTodo) {
      todo = updatedTodo
    }
    return todo
  })
}

function modifyTodo(state, todoId, callback) {
  return state.map(todo => {
    if (todo.id === todoId) {
      callback(todo)
    }
    return todo
  })
}

const todos = (state = [], action) => {

  let uncompletedTodos = []

  switch (action.type) {

  case FETCH_TODOS_SUCCESS:
    return [...action.response]

  case ADD_TODO_REQUEST:
    return [
      ...state,
      {
        id: state.length + 1,
        description: action.description,
        completed: false
      }
    ]

  case ADD_TODO_SUCCESS:
    return mergeUpdates(state, action.response)

  case REMOVE_TODO_REQUEST:
    return state.filter(todo => {
      return todo.id !== action.id
    })

  case TOGGLE_TODO_EDITING:
    return modifyTodo(state, action.id, todo => {
      todo.editing = !todo.editing
    })

  case TOGGLE_TODO_COMPLETE_REQUEST:
    return modifyTodo(state, action.id, todo => {
      todo.completed = !todo.completed
    })

  case TOGGLE_TODO_COMPLETE_SUCCESS:
    return mergeUpdates(state, action.response)

  case UPDATE_TODO_DESCRIPTION_REQUEST:
    return modifyTodo(state, action.id, todo => {
      todo.description = action.description
      todo.editing = false
    })

  case REMOVE_COMPLETED_TODOS_REQUEST:
    return state.filter(todo => {
      return !todo.completed
    })

  case TOGGLE_TODOS_COMPLETION_REQUEST:

    // Find all the todos with { completed: false }
    uncompletedTodos = state.filter(todo => {
      return !todo.completed
    })

    // If all existing todos are completed, set completion for all todos to false
    if (!uncompletedTodos.length) {
      return state.map(todo => {
        todo.completed = false
        return todo
      })
    }
    else {
      return state.map(todo => {
        todo.completed = true
        return todo
      })
    }

  case TOGGLE_TODOS_COMPLETION_SUCCESS:
    return mergeUpdates(state, action.response)

  default:
    return state

  }

}

export default todos
