import React, { Component, PropTypes } from 'react'

import TodoListItem from './../molecules/TodoListItem'
import TodoListCompleter from './../molecules/TodoListCompleter'

class TodoListItems extends Component {

  render() {
    return (
      <section className="main">
        <TodoListCompleter />
        <ul className="todo-list">
          {this.props.todos.map((todo, index) => {
            return (
              <TodoListItem
                key={index}
                id={todo.id}
                dispatch={this.props.dispatch}
                todo={todo} />
            )
          })}
        </ul>
      </section>
    )
  }

}

TodoListItems.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.array
}

export default TodoListItems
