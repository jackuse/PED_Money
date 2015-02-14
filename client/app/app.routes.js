(function() {
	'use strict';

	

	/* App Module */

	angular
		.module('appModule')
		.config(configUiRoute)

	function configUiRoute($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('home');
	  //
	  // Now set up the states
	  $stateProvider
	  	// .state('login', {
	   //    url: '/login',
	   //    templateUrl: 'components/auth/loginView.html',
	   //    controller: 'loginController'
	   //  })
		.state('home', {
	      url: '/home/',
	      template: 'Hello World !'
	    })
	  	.state('optPeriod', {
	      url: '/operation/period/',
	      templateUrl: 'app/components/operation/period/periodView.html',
	      controller: 'periodController'
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