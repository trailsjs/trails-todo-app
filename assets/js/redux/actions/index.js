import fetch from 'isomorphic-fetch'
import checkStatus from './../lib/checkStatus'

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE'

export const fetchTodosRequest = () => {
  return {
    type: FETCH_TODOS_REQUEST
  }
}

export const fetchTodosSuccess = response => {
  return {
    type: FETCH_TODOS_SUCCESS,
    response
  }
}

export const fetchTodosFailure = error => {
  return {
    type: FETCH_TODOS_FAILURE,
    error
  }
}

export const fetchTodos = () => {
  return dispatch => {
    dispatch(fetchTodosRequest())
    return fetch('/api/v1/todo')
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(fetchTodosSuccess(response))
    })
    .catch(error => {
      dispatch(fetchTodosFailure(error))
    })
  }
}

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'

export const addTodoRequest = description => {
  return {
    type: ADD_TODO_REQUEST,
    description
  }
}

export const addTodoSuccess = response => {
  return {
    type: ADD_TODO_SUCCESS,
    response
  }
}

export const addTodoFailure =  error => {
  return {
    type: ADD_TODO_FAILURE,
    error
  }
}

export const addTodo = description => {
  return dispatch => {
    dispatch(addTodoRequest(description))
    return fetch('/api/v1/todo', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description
      })
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(addTodoSuccess(response))
    })
    .catch(error => {
      dispatch(addTodoFailure(error))
    })
  }
}

export const TOGGLE_TODO_COMPLETE_REQUEST = 'TOGGLE_TODO_COMPLETE_REQUEST'
export const TOGGLE_TODO_COMPLETE_SUCCESS = 'TOGGLE_TODO_COMPLETE_SUCCESS'
export const TOGGLE_TODO_COMPLETE_FAILURE = 'TOGGLE_TODO_COMPLETE_FAILURE'

export const toggleTodoCompleteRequest = id => {
  return {
    type: TOGGLE_TODO_COMPLETE_REQUEST,
    id
  }
}

export const toggleTodoCompleteSuccess = response => {
  return {
    type: TOGGLE_TODO_COMPLETE_SUCCESS,
    response
  }
}

export const toggleTodoCompleteFailure = error => {
  return {
    type: TOGGLE_TODO_COMPLETE_FAILURE,
    error
  }
}

export const toggleTodoComplete = (id, value) => {
  return dispatch => {
    dispatch(toggleTodoCompleteRequest(id))
    return fetch(`/api/v1/todo/${id}`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        completed: value
      })
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(toggleTodoCompleteSuccess(response))
    })
    .catch(error => {
      dispatch(toggleTodoCompleteFailure(error))
    })
  }
}

export const REMOVE_TODO_REQUEST = 'REMOVE_TODO_REQUEST'
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS'
export const REMOVE_TODO_FAILURE = 'REMOVE_TODO_FAILURE'

export const removeTodoRequest = id => {
  return {
    type: REMOVE_TODO_REQUEST,
    id
  }
}

export const removeTodoSuccess = response => {
  return {
    type: REMOVE_TODO_SUCCESS,
    response
  }
}

export const removeTodoFailure = error => {
  return {
    type: REMOVE_TODO_FAILURE,
    error
  }
}

export const removeTodo = id => {
  return dispatch => {
    dispatch(removeTodoRequest(id))
    return fetch(`/api/v1/todo/${id}`, {
      method: 'delete'
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(removeTodoSuccess(response))
    })
    .catch(error => {
      dispatch(removeTodoFailure(error))
    })
  }
}

export const UPDATE_TODO_DESCRIPTION_REQUEST = 'UPDATE_TODO_DESCRIPTION_REQUEST'
export const UPDATE_TODO_DESCRIPTION_SUCCESS = 'UPDATE_TODO_DESCRIPTION_SUCCESS'
export const UPDATE_TODO_DESCRIPTION_FAILURE = 'UPDATE_TODO_DESCRIPTION_FAILURE'

export const updateTodoDescriptionRequest = (id, description) => {
  return {
    type: UPDATE_TODO_DESCRIPTION_REQUEST,
    id,
    description
  }
}

export const updateTodoDescriptionSuccess = response => {
  return {
    type: UPDATE_TODO_DESCRIPTION_SUCCESS,
    response
  }
}

export const updateTodoDescriptionFailure = error => {
  return {
    type: UPDATE_TODO_DESCRIPTION_FAILURE,
    error
  }
}

export const updateTodoDescription = (id, description) => {
  return dispatch => {
    dispatch(updateTodoDescriptionRequest(id, description))
    return fetch(`/api/v1/todo/${id}`, {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description
      })
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(updateTodoDescriptionSuccess(response))
    })
    .catch(error => {
      dispatch(updateTodoDescriptionFailure(error))
    })
  }
}

export const TOGGLE_TODO_EDITING = 'TOGGLE_TODO_EDITING'

export const toggleTodoEditing = id => {
  return {
    type: TOGGLE_TODO_EDITING,
    id
  }
}

export const REMOVE_COMPLETED_TODOS_REQUEST = 'REMOVE_COMPLETED_TODOS_REQUEST'
export const REMOVE_COMPLETED_TODOS_SUCCESS = 'REMOVE_COMPLETED_TODOS_SUCCESS'
export const REMOVE_COMPLETED_TODOS_FAILURE = 'REMOVE_COMPLETED_TODOS_FAILURE'

export const removeCompletedTodosRequest = () => {
  return {
    type: REMOVE_COMPLETED_TODOS_REQUEST
  }
}

export const removeCompletedTodosSuccess = response => {
  return {
    type: REMOVE_COMPLETED_TODOS_SUCCESS
  }
}

export const removeCompletedTodosFailure = error => {
  return {
    type: REMOVE_COMPLETED_TODOS_FAILURE
  }
}

export const removeCompletedTodos = () => {
  return dispatch => {
    dispatch(removeCompletedTodosRequest())
    return fetch('/api/v1/todo?completed=1', {
      method: 'del'
    })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => {
      dispatch(removeCompletedTodosSuccess(response))
    })
    .catch(error => {
      dispatch(removeCompletedTodosFailure(error))
    })
  }
}
