/*jshint -W079 */
var Promise = Promise || ES6Promise.Promise;

(function() {
	'use strict';
	angular.module('filters', [])
	angular.module('directives', [])
	angular.module('services', ['ngResource'])

	angular.module('controllers', ['currencyFilter', 'services', 'filters'])
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
