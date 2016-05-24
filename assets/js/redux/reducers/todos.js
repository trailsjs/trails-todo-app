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
  TOGGLE_TODOS_COMPLETION_SUCCESS,
  SET_TODOS_FILTER_ALL,
  SET_TODOS_FILTER_ACTIVE,
  SET_TODOS_FILTER_COMPLETED
} from './../actions'

const todoFilters = {
  all: todo => todo,
  active: todo => !todo.completed,
  completed: todo => todo.completed
}

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

function modifyTodo(todos, todoId, callback) {
  return todos.map(todo => {
    if (todo.id === todoId) {
      callback(todo)
    }
    return todo
  })
}

const initialState = {
  todos: [],
  filter: todoFilters.all
}

const todos = (state = initialState, action) => {

  let uncompletedTodos = []

  switch (action.type) {

  case FETCH_TODOS_SUCCESS:
    return Object.assign({}, state, {
      todos: [...action.response]
    })

  case ADD_TODO_REQUEST:
    return Object.assign({}, state, {
      todos: [
        ...state.todos,
        {
          description: action.description,
          completed: false
        }
      ]
    })

  case ADD_TODO_SUCCESS:
    return Object.assign({}, state, {
      todos: state.todos.map(todo => {
        if (todo.description === action.response.description) {
          todo = action.response
        }
        return todo
      })
    })

  case REMOVE_TODO_REQUEST:
    return Object.assign({}, state, {
      todos: state.todos.filter(todo => {
        return todo.id !== action.id
      })
    })

  case TOGGLE_TODO_EDITING:
    return Object.assign({}, state, {
      todos: modifyTodo(state.todos, action.id, todo => {
        todo.editing = !todo.editing
      })
    })

  case TOGGLE_TODO_COMPLETE_REQUEST:
    return Object.assign({}, state, {
      todos: modifyTodo(state.todos, action.id, todo => {
        todo.completed = !todo.completed
      })
    })

  case TOGGLE_TODO_COMPLETE_SUCCESS:
    return Object.assign({}, state, {
      todos: mergeUpdates(state.todos, action.response)
    })

  case UPDATE_TODO_DESCRIPTION_REQUEST:
    return Object.assign({}, state, {
      todos: modifyTodo(state.todos, action.id, todo => {
        todo.description = action.description
        todo.editing = false
      })
    })

  case REMOVE_COMPLETED_TODOS_REQUEST:
    return Object.assign({}, state, {
      todos: state.todos.filter(todo => {
        return !todo.completed
      })
    })

  case TOGGLE_TODOS_COMPLETION_REQUEST:

    // Find all the todos with { completed: false }
    uncompletedTodos = state.todos.filter(todo => {
      return !todo.completed
    })

    // If all existing todos are completed, set completion for all todos to false
    if (!uncompletedTodos.length) {
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          todo.completed = false
          return todo
        })
      })
    }

    // Otherwise, toggle all the todos to true and return the response.
    else {
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          todo.completed = true
          return todo
        })
      })
    }

  case TOGGLE_TODOS_COMPLETION_SUCCESS:
    return Object.assign({}, state, {
      todos: mergeUpdates(state.todos, action.response)
    })

  case SET_TODOS_FILTER_ALL:
    return Object.assign({}, {
      filter: 'all'
    })

  case SET_TODOS_FILTER_ACTIVE:
    return Object.assign({}, {
      filter: 'active'
    })

  case SET_TODOS_FILTER_COMPLETED:
    return Object.assign({}, {
      filter: 'completed'
    })

  default:
    return state
  }

}

export default todos
