import React, { Component, PropTypes } from 'react'

class TodoListFilter extends Component {

  countRemaining() {
    return this.props.todos.filter(todo => {
      return !todo.completed
    }).length
  }

  render() {
    // This footer should hidden by default and shown when there are todos

    const remainingTodos = this.countRemaining()

    return (
      <footer className="footer">
        {/*} This should be `0 items left` by default */}
        <span className="todo-count">
          <strong>{remainingTodos}</strong>{' '}
          {remainingTodos === 1 ? 'item left' : 'items left'}
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
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }

}

TodoListFilter.propTypes = {
  todos: PropTypes.array
}

export default TodoListFilter
