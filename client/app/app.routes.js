(function() {
	'use strict';

	

	/* App Module */

	angular
		.module('appModule')
		.config(configUiRoute)

	function configUiRoute($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/login');
	  // Now set up the states
	  $stateProvider
	  	.state('login', {
	      url: '/login',
	       templateUrl: 'app/components/login/loginView.html',
	 	   controller: 'LoginController'
	     })
	  	 .state('signup', {
	      url: '/signup',
	     templateUrl: 'app/components/signup/signupView.html',
	      controller: 'SignupController'
	   }).state('compte', {
	      url: '/compte',
	     templateUrl: 'app/components/compte/compte.html'
	   })
	   //  .state('account.expenses', {
	   //    url: '/expenses',
	   //    templateUrl: 'components/expense/expenseView.html',
	   //    controller: 'expensesController',
	   //    parent : 'account'
	   //  })
	   //  .state('account.bilan', {
	   //    url: '/bilan',
	   //    templateUrl: 'components/bilan/bilanView.html',
	   //    controller: 'bilanController',
	   //    parent : 'account'
	   //  })
	   //  .state('settings', {
	   //    url: '/settings',
	   //    templateUrl: 'components/settings/settingsView.html',
	   //    controller: 'settingsController'
	   //  })
	}
		/*$httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        $location.path('/signin');
                    }
                    return $q.reject(response);
                }
            };
        }]);*/
})();