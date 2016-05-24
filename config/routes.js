/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the index view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.index'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },

  {
    method: 'DEL',
    path: '/api/v1/todo/clear_completed',
    handler: 'TodoController.clearCompleted'
  },

  {
    method: [ 'PUT' ],
    path: '/api/v1/todo/toggle_all',
    handler: 'TodoController.toggleAll'
  }

]
