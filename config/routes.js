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

  {
    method: 'GET',
    path: '/api/v1/todo/clear_completed',
    handler: 'TodoController.clearCompleted'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  }

]
