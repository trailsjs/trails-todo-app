'use strict'

const Controller = require('trails-controller')

/**
 * @module TodoController
 * @description Generated Trails.js Controller.
 */
module.exports = class TodoController extends Controller{

  toggleAll (request, reply) {

    // Find all the Todos with { completed: false } and set completed to true.
    this.app.services.FootprintService.update(
      'Todo',
      { completed: false },
      { completed: true }
    )
    .then(todos => {

      // If all Todos are already completed, set completed for all the
      // todos to false.
      if (!todos.length) {
        return this.app.services.FootprintService.update(
          'Todo',
          { completed: true },
          { completed: false }
        ).then(todos => {
          reply(todos)
        })
      }

      else {
        reply(todos)
      }

    })

  }

  clearCompleted (request, reply) {
    reply('should clear all on DEL')
  }

}
