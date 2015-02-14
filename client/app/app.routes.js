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

})();