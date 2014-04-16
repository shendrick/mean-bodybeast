'use strict';

angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('bodybeast example page', {
        url: '/bodybeast/example',
        templateUrl: 'bodybeast/views/index.html'
      })
  }
])