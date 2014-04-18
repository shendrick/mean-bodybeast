'use strict';

angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        //================================================
        // Check if the user is connected
        //================================================
        var checkLoggedin = function($q, $timeout, $http, $location) {
            // Initialize a new promise
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user) {
                // Authenticated
                if (user !== '0')
                    $timeout(deferred.resolve, 0);

                // Not Authenticated
                else {
                    $timeout(function() {
                        deferred.reject();
                    }, 0);
                    $location.url('/login');
                }
            });

            return deferred.promise;
        };
        //================================================
        // Check if the user is not conntect
        //================================================
        var checkLoggedOut = function($q, $timeout, $http, $location) {
            // Initialize a new promise
            var deferred = $q.defer();

            // Make an AJAX call to check if the user is logged in
            $http.get('/loggedin').success(function(user) {
                // Authenticated
                if (user !== '0') {
                    $timeout(function() {
                        deferred.reject();
                    }, 0);
                    $location.url('/login');

                }

                // Not Authenticated
                else {
                    $timeout(deferred.resolve, 0);

                }
            });

            return deferred.promise;
        };
        //================================================


        // states for my app
        $stateProvider
            .state('rounds', {
                url: '/rounds',
                templateUrl: 'bodybeast/views/rounds/list.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('create round', {
                url: '/rounds/create',
                templateUrl: 'bodybeast/views/rounds/create.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('edit round', {
                url: '/rounds/:roundId/edit',
                templateUrl: 'bodybeast/views/rounds/edit.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .state('round by id', {
                url: '/rounds/:roundId',
                templateUrl: 'bodybeast/views/rounds/view.html',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
    }
])

    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);