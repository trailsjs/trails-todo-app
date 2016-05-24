import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import {
  fetchTodos
} from './../../redux/actions'

import TodoListItemCreator from './../molecules/TodoListItemCreator'
import TodoListFilter from './../organisms/TodoListFilter'
import TodoListCredits from './../organisms/TodoListCredits'
import TodoListItems from './../organisms/TodoListItems'

const todoFilters = {
  all: todo => todo,
  active: todo => !todo.completed,
  completed: todo => todo.completed
}


class TodoList extends Component {

  componentWillMount() {
    this.props.dispatch(fetchTodos())
  }

  getFilteredTodos() {
    return this.props.todos.filter(todoFilters[this.props.filter])
  }

  render() {

    const todos = this.getFilteredTodos()

    return (
      <div>
        <section className="todoapp">
          <TodoListItemCreator
            dispatch={this.props.dispatch} />
          <TodoListItems
            dispatch={this.props.dispatch}
            todos={todos} />
          {
            this.props.todos.length >= 1 &&
            <TodoListFilter
              dispatch={this.props.dispatch}
              filter={this.props.filter}
              todos={todos} />
          }
        </section>
        <TodoListCredits />
      </div>
    )

  }

}

TodoList.propTypes = {
  dispatch: PropTypes.func,
  todos: PropTypes.array,
  filter: PropTypes.string
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter
  }
}

export default connect(mapStateToProps)(TodoList)
