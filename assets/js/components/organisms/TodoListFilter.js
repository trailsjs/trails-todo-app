import React, { Component, PropTypes } from 'react'

import {
  removeCompletedTodos,
  setTodosFilterAll,
  setTodosFilterActive,
  setTodosFilterCompleted
} from './../../redux/actions'

class TodoListFilter extends Component {

  countUncompleted() {
    return this.props.todos.filter(todo => {
      return !todo.completed
    }).length
  }

  setTodosFilterAll (event) {
    event.preventDefault()
    this.props.dispatch(setTodosFilterAll())
  }

  setTodosFilterActive (event) {
    event.preventDefault()
    this.props.dispatch(setTodosFilterActive())
  }

  setTodosFilterCompleted (event) {
    event.preventDefault()
    this.props.dispatch(setTodosFilterCompleted())
  }

  removeCompletedTodos() {
    this.props.dispatch(removeCompletedTodos())
  }

  render() {

    // This footer should hidden by default and shown when there are todos
    const uncompletedTodos = this.countUncompleted()
    const completedTodos = this.props.todos.length - uncompletedTodos

    return (
      <footer className="footer">

        {/*} This should be `0 items left` by default */}
        <span className="todo-count">
          <strong>{uncompletedTodos}</strong>{' '}
          {uncompletedTodos === 1 ? 'item left' : 'items left'}
        </span>

        <ul className="filters">
          <li>
            <a
              onClick={this.setTodosFilterAll.bind(this)}
              className={this.props.filter === 'all' && 'selected'}
              href="#">All</a>
          </li>
          <li>
            <a
              onClick={this.setTodosFilterActive.bind(this)}
              className={this.props.filter === 'active' && 'selected'}
              href="#">Active</a>
          </li>
          <li>
            <a
              onClick={this.setTodosFilterCompleted.bind(this)}
              className={this.props.filter === 'completed' && 'selected'}
              href="#">Completed</a>
          </li>
        </ul>

        {/*} Hidden if no completed items are left ↓ */}
        { completedTodos >= 1 &&
          <button
            onClick={this.removeCompletedTodos.bind(this)}
            className="clear-completed">Clear completed</button>
        }
      </footer>
    )
  }

}

TodoListFilter.propTypes = {
  todos: PropTypes.array,
  filter: PropTypes.string,
  dispatch: PropTypes.func
}

export default TodoListFilter
