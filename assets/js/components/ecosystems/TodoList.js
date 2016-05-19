import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import {
  fetchTodos
} from './../../redux/actions'

import TodoListItemCreator from './../molecules/TodoListItemCreator'
import TodoListFilter from './../organisms/TodoListFilter'
import TodoListCredits from './../organisms/TodoListCredits'
import TodoListItems from './../organisms/TodoListItems'

class TodoList extends Component {

  componentWillMount() {
    this.props.dispatch(fetchTodos())
  }

  render() {

    return (
      <div>
        <section className="todoapp">
          <TodoListItemCreator
            dispatch={this.props.dispatch} />
          <TodoListItems
            dispatch={this.props.dispatch}
            todos={this.props.todos} />
          {
            this.props.todos.length >= 1 &&
            <TodoListFilter
              dispatch={this.props.dispatch}
              todos={this.props.todos} />
          }
        </section>
        <TodoListCredits />
      </div>
    )

  }

}

TodoList.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(TodoList)
