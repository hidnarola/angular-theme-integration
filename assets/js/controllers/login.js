'use strict';

/* Controllers */

angular.module('app')
    // Chart controller 
    .controller('LoginCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
        $scope.user = {};
        $scope.userLogin = function(){
            var req = {
                'payload' : $scope.user
            };
            $http({
                method : 'POST',
                url : 'http://ec2-52-53-208-151.us-west-1.compute.amazonaws.com/m0/sessions/login',
                data : req
            }).then(function(data) {
                $http({
                    method : 'POST',
                    url : 'http://ec2-52-53-208-151.us-west-1.compute.amazonaws.com/m0/sessions/heartbeat',
                    headers :{
                        "Authentication" : "JWT " + data.data.data.jwt,
                        "Content-Type" : "application/json"
                    }
                }).then(function(heartbeat_data) {
                    $state.go('app.services');
                }, function(heartbeat_error){
                    $state.go('app.services');
                    console.log(heartbeat_error);
                });
            }, function(error){
                console.log(error);
            });
        };
    }]);