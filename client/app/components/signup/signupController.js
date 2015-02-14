(function(){

'use strict';

    angular
        .module('appModule')
        .controller('SignupController',['$scope','signupService','$state' , function($scope,signupService,$state){


        	$scope.SignupController=function(){
        		$scope.test=$scope.User;
        		var test=$scope.User;
        		signupService.saveUser(test) .then(function() {
                $state.go('login');
            });
        		
        	};

        }]);

 })();
   

	
