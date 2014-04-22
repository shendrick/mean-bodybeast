'use strict';

//Articles service used for articles REST endpoint
angular.module('mean').factory('Schedules', ['$resource', function($resource) {
    return $resource('bodybeast/assets/data/schedules.json', {}, {
        query: {method:'GET', isArray:true}
    });
}]);