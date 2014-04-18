'use strict';

//Articles service used for articles REST endpoint
angular.module('mean').factory('Rounds', ['$resource', function($resource) {
    return $resource('rounds/:roundId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);