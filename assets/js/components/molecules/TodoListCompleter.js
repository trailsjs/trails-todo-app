import React, { Component, PropTypes } from 'react'

import {
  toggleTodosCompletion
} from './../../redux/actions'

class TodoListCompleter extends Component {

  toggleTodosCompletion() {
    this.props.dispatch(toggleTodosCompletion())
  }

  render() {
    return (
      <div>
        <input
          onChange={this.toggleTodosCompletion.bind(this)}
          className="toggle-all"
          type="checkbox" />
        <label style={{display: 'none'}} htmlFor="toggle-all">Mark all as complete</label>
      </div>
    )
  }

}

TodoListCompleter.propTypes = {
  dispatch: PropTypes.func
}

export default TodoListCompleter
