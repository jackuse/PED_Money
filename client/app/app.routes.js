(function() {
	'use strict';

	

	/* App Module */

	angular
		.module('appModule')
		.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/login');
	  // Now set up the states
	  $stateProvider
	  	.state('login', {
	      url: '/login',
	       templateUrl: 'app/components/login/loginView.html',
	 	   controller: 'LoginController',
       data: {
        requireLogin: false
      }
	     })
	  	 .state('signup', {
	      url: '/signup',
	     templateUrl: 'app/components/signup/signupView.html',
	      controller: 'SignupController',
        data: {
        requireLogin: false
      }
	   }).state('compte', {
	      url: '/compte',
	     templateUrl: 'app/components/compte/compte.html',
        data: {
        requireLogin: true
      }
	   });
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
		
}])
.run(function ($rootScope,$state) {

  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var requireLogin = toState.data.requireLogin;
    if (requireLogin && $rootScope.currentUserSignedIn==null) {
      event.preventDefault();
     $state.go('login');
    }
  });
});
})();