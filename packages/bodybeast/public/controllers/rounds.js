'use strict';

angular.module('mean').controller('RoundsController', ['$scope', '$stateParams', '$location', 'Global', 'Rounds', function ($scope, $stateParams, $location, Global, Rounds) {
      $scope.global = Global;

      $scope.create = function() {
          var round = new Rounds({
              'date': this.date,
              'schedule': this.schedule.id,
              'activeWeek': 1,
              'activePhase': 1


          });
         round.$save(function(response) {
              $location.path('rounds/' + response._id);
          });

          var now = new Date();

          this.date = dateTime('now');
          this.schedule = 0;
      };

      $scope.remove = function(round) {
          if (round) {
              round.$remove();

              for (var i in $scope.rounds) {
                  if ($scope.rounds[i] === round) {
                      $scope.rounds.splice(i, 1);
                  }
              }
          }
          else {
              $scope.round.$remove();
              $location.path('rounds');
          }
      };

      $scope.update = function() {
          var round = $scope.round;
          if (!round.updated) {
              round.updated = [];
          }
          round.updated.push(new Date().getTime());

          round.$update(function() {
              $location.path('round/' + round._id);
          });
      };

      $scope.find = function() {
          Rounds.query(function(rounds) {
              $scope.rounds = rounds;
          });
      };

      $scope.findOne = function() {
          Rounds.get({
              roundId: $stateParams.roundId
          }, function(round) {
              $scope.round = round;
          });
      };

  }
]);

