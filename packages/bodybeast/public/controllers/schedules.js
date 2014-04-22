'use strict';

angular.module('mean').controller('SchedulesController', ['$scope', '$stateParams', '$location', 'Global', 'Schedules', function ($scope, $stateParams, $location, Global, Schedules) {
    $scope.global = Global;

    $scope.find = function() {
        Schedules.query(function(schedules) {
            $scope.schedules = schedules;
        });
    };
    $scope.findOne = function(scheduleId) {
        Schedules.query(function(response) {
            angular.forEach(response, function (schedule) {
                if (schedule.id == scheduleId) {
                    $scope.schedule = schedule;
                }
            });
        });
    };

    $scope.round.then(function(){
        $scope.schedule = $scope.findOne($scope.round.schedule);
    });
}
]);
