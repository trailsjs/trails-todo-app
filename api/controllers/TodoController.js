'use strict'

const Controller = require('trails-controller')

/**
 * @module TodoController
 * @description Generated Trails.js Controller.
 */
module.exports = class TodoController extends Controller{

  toggleAll (request, reply) {
    reply('worked')
  }

  clearCompleted (request, reply) {
    reply('should clear all on DEL')
  }

}
