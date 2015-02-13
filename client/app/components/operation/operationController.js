
(function() {
    'use strict';

    angular
        .module('appModule')
        .controller('OperationController', OperationController);


    function OperationController($scope) {

        $scope.test = "Coucou operation";

    }

})();
