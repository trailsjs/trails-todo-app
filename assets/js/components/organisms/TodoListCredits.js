import React, { PropTypes, Component } from 'react'

class TodoListCredits extends Component {

  render() {
    return (
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="https://github.com/langateam">langateam</a></p>
        <p>Based on <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    )
  }

}

TodoListCredits.propTypes = {}

export default TodoListCredits
