'use strict'

const Controller = require('trails-controller')

/**
 * @module TodoController
 * @description Generated Trails.js Controller.
 */

module.exports = class TodoController extends Controller{

  clearCompleted (request, reply) {
    this.app.services.FootprintService.destroy('Todo', {completed: true})
    .then(todos => {
      reply(todos)
    })
  }

}
