import React, { Component, PropTypes } from 'react'

import {
  removeCompletedTodos
} from './../../redux/actions'

class TodoListFilter extends Component {

  countUncompleted() {
    return this.props.todos.filter(todo => {
      return !todo.completed
    }).length
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

        {/*} Remove this if you don't implement routing */}
        <ul className="filters">
          <li>
            <a className="selected" href="#/">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
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
  dispatch: PropTypes.func
}

export default TodoListFilter
