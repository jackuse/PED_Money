(function() {
    'use strict';

    

    /* App Module */

    angular
        .module('appModule')
        .config(configUiRoute)

    function configUiRoute($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home')
        //
        // Now set up the states
        $stateProvider
            .state('home', {
              url: '/home/',
              template: 'Hello World !'
            })

            .state('operation', {
                url: '/operation',
                templateUrl: 'app/components/operation/operationView.html',
                controller: 'OperationController'
            })

            .state('optPeriod', {
              url: '/operation/period/',
              templateUrl: 'app/components/operation/period/periodView.html',
              controller: 'periodController'
            })
    }

})();