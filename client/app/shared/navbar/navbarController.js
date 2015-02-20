(function(){

'use strict';

    angular
        .module('appModule')
        .controller('NavbarController', ['$scope','$rootScope','$state','localStorageService', function($scope,$rootScope,$state,localStorageService) {
                $rootScope.currentUserSignedIn = localStorageService.cookie.get('token');
                //alert($localStorage.token);
           $scope.logout = function() {
                localStorageService.cookie.remove('token');
                $rootScope.currentUserSignedIn = null;
                $state.go('login');
            }, function() {
                alert("Failed to logout!");
            
        };
        
}]);
	
})();