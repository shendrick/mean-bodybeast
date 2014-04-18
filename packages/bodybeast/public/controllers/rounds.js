'use strict';

angular.module('mean').controller('RoundsController', ['$scope', 'Global',
  function($scope, Global, Rounds) {
      $scope.global = Global;

      $scope.create = function() {
          var round = new Rounds({
              title: this.title,
              content: this.content
          });
         round.$save(function(response) {
              $location.path('rounds/' + response._id);
          });

          this.title = '';
          this.content = '';
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

          article.$update(function() {
              $location.path('round/' + round._id);
          });
      };

      $scope.find = function() {
          Rounds.query(function(rounds) {
              $scope.articles = rounds;
          });
      };

      $scope.findOne = function() {
          Rounds.get({
              articleId: $stateParams.articleId
          }, function(article) {
              $scope.article = article;
          });
      };

  }
]);

