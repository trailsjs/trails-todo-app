'use strict'

const Model = require('trails-model')

/**
 * @module Todo
 * @description todo
 */
module.exports = class Todo extends Model {

  static config () {
  }

  static schema () {
    return {

      description: {
        type: 'string'
      },

      completed: {
        type: 'boolean',
        defaultsTo: false
      }

    }
  }
}
