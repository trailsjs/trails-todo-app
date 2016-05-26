import React, { Component, PropTypes } from 'react'

import {
  toggleTodoComplete,
  updateTodoDescription,
  removeTodo,
  toggleTodoEditing
} from './../../redux/actions'

const ESCAPE_KEY = 27
const ENTER_KEY = 13

class TodoListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.setState({
      editText: this.props.todo.description
    })
  }

  toggleCompleted(event) {
    const value = event.currentTarget.checked
    this.props.dispatch(toggleTodoComplete(this.props.todo.id, value))
  }

  onEdit() {
    this.props.dispatch(toggleTodoEditing(this.props.id))
    this.refs[`todo_input_${this.props.id}`].focus()
  }

  onSubmit(event) {
    const value = this.state.editText.trim()
    if (value) {
      this.props.dispatch(updateTodoDescription(
        this.props.id,
        value
      ))
      this.setState({editText: value})
    }
    else {
      this.removeTodo()
    }

  }

  onChange(event) {
    this.setState({
      editText: event.target.value
    })
  }

  onKeyDown(event) {
    if (event.which === ESCAPE_KEY) {
      this.setState({editText: this.props.todo.title})
      this.props.dispatch(toggleTodoEditing(this.props.id))
    }
    else if (event.which === ENTER_KEY) {
      if (this.props.todo.editing) {
        this.onSubmit(event)
      }
    }
  }

  removeTodo() {
    this.props.dispatch(removeTodo(this.props.todo.id))
  }

  render() {

    // List items should get the class `editing` when editing and `completed` when marked as completed
    const listItemClasses = []
    this.props.todo.completed && listItemClasses.push('completed')
    this.props.todo.editing && listItemClasses.push('editing')

    return (
      <li className={listItemClasses}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
            onClick={this.toggleCompleted.bind(this)} />
          <label
            onDoubleClick={this.onEdit.bind(this)}>{this.props.todo.description}</label>
          <button
            onClick={this.removeTodo.bind(this)}
            className="destroy"></button>
        </div>
        <input
          ref={`todo_input_${this.props.id}`}
          className="edit"
          value={this.state.editText}
          onBlur={this.onSubmit.bind(this)}
          onChange={this.onChange.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)} />
      </li>
    )
  }

}

TodoListItem.propTypes = {
  dispatch: PropTypes.func,
  todo: PropTypes.object,
  id: PropTypes.number
}

export default TodoListItem
