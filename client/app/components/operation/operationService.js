
(function() {
    'use strict';

    angular
        .module('appModule')
        .factory('OperationResource', ['$resource', OperationResource]);


    function OperationResource($resource) {

        console.log("Operation Resource");
    }

})();
