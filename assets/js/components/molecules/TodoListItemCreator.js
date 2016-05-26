import React, { Component, PropTypes } from 'react'

import {
  addTodo
} from './../../redux/actions'

const ENTER_KEY = 13

class TodoListItemsCreator extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.setState({
      newTodo: ''
    })
  }

  onKeyDown(event) {
    if (event.which === ENTER_KEY) {
      const value = this.state.newTodo.trim()
      if (value) {
        this.props.dispatch(addTodo(value))
      }
      this.setState({
        newTodo: ''
      })
    }
  }

  onChange(event) {
    this.setState({
      newTodo: event.target.value
    })
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          value={this.state.newTodo}
          onKeyDown={this.onKeyDown.bind(this)}
          onChange={this.onChange.bind(this)}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus />
      </header>
    )
  }

}

TodoListItemsCreator.propTypes = {
  dispatch: PropTypes.func
}

export default TodoListItemsCreator
