import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  REMOVE_TODO_REQUEST,
  TOGGLE_TODO_COMPLETE_REQUEST,
  TOGGLE_TODO_COMPLETE_SUCCESS,
  TOGGLE_TODO_EDITING,
  UPDATE_TODO_DESCRIPTION_REQUEST,
  REMOVE_COMPLETED_TODOS_REQUEST
} from './../actions'

const todos = (state = [], action) => {

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
    return state.map(todo => {
      if (todo.description === action.description) {
        todo = action.response
      }
      return todo
    })

  case REMOVE_TODO_REQUEST:
    return state.filter(todo => {
      return todo.id !== action.id
    })

  case TOGGLE_TODO_EDITING:
    return state.map(todo => {
      if (todo.id === action.id) {
        todo.editing = !todo.editing
      }
      return todo
    })

  case TOGGLE_TODO_COMPLETE_REQUEST:
    return state.map(todo => {
      if (todo.id === action.id) {
        todo.completed = !todo.completed
      }
      return todo
    })

  case TOGGLE_TODO_COMPLETE_SUCCESS:
    return state.map(todo => {
      if (todo.id === action.id) {
        todo = action.response
      }
      return todo
    })

  case UPDATE_TODO_DESCRIPTION_REQUEST:
    return state.map(todo => {
      if (todo.id === action.id) {
        todo.description = action.description
        todo.editing = false
      }
      return todo
    })

  case REMOVE_COMPLETED_TODOS_REQUEST:
    return state.filter(todo => {
      return !todo.completed
    })

  default:
    return state

  }

}

export default todos
