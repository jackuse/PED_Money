(function(){

'use strict';

    angular
        .module('appModule')
        .controller('LoginController', LoginController);


    function LoginController($scope) {

        $scope.test = "Coucou operation";

    }


	
})();