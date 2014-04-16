'use strict';

angular.module('mean').controller('BodybeastController', ['$scope', 'Global',
  function($scope, Global, Bodybeast) {
    $scope.global = Global;
    $scope.bodybeast = {name:'bodybeast'};

  }
]);