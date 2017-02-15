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
                $state.go('app.test.mockup1');
                if(data.sessionId && data.jwt){
                }
            }, function(error){
                console.log(error);
            });
        };
    }]);