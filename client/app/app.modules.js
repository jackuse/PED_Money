var Promise = Promise || ES6Promise.Promise;

(function() {
	'use strict';
	angular.module('services', ['ngResource'])

	angular.module('controllers', ['currencyFilter', 'services'])
	// angular.module('controllers', [])

	angular
		.module('appModule', [
			'ui.router',
			// 'ngDialog',
			// 'ccDirectives',
			'controllers'
			// 'ccServices'
		])

})();
