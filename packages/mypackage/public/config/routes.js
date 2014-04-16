'use strict';

angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('mypackage example page', {
        url: '/mypackage/example',
        templateUrl: 'mypackage/views/index.html'
      })
  }
])