import React, { Component, PropTypes } from 'react'

class TodoListCompleter extends Component {

  render() {
    return (
      <div>
        <input className="toggle-all" type="checkbox" />
        <label style={{display: 'none'}} for="toggle-all">Mark all as complete</label>
      </div>
    )
  }

}

TodoListCompleter.propTypes = {}

export default TodoListCompleter
