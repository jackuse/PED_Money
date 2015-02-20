// periodController.js
(function() {
	'use strict';


	angular.module('controllers')
		.factory('periodHelper', function() {
			return {
				/**
				 * @Description
				 * Simulate the periodic operation who will be generate
				 * @Param {Object} The periodic operation to project
				 * @Return {Object} The projected periodic operation
				 */
				genProjection: function(period) {
					var projection = []
						// console.log(period)

					var date = moment(period.dateBegin)

					// Set the first operation
					projection.push({
						date: date.clone().toDate(),
						amount: period.amount
					})
					if (period.nbRepeat === -1) {
						// If the operation is infinite show the first 12 operation
						for (var i = 0; i < 12; i++) {
							projection.push({
								date: date.add(1 * period.step, period.intervalType).clone().toDate(),
								amount: period.amount
							})
						}
					} else {
						for (var i = 0; i < period.nbRepeat; i++) {
							var proj = {
								date: date.add(1 * period.step, period.intervalType).clone().toDate(),
								amount: period.amount
							}
							projection.push(proj)
						}
					}

					return projection
				},


				/**
				 * @Description
				 * Compute the end date of a period
				 * @Param {Period} The period to compute
				 * @Return {Date} The date of the end of the periodic operation
				 */
				computeEndDate: function(period) {
					return moment(period.dateBegin).add(period.nbRepeat * period.step, period.intervalType).toDate()
				}
			}
		})
		.controller('PeriodCtrl', ['$scope', 'periodService', '$modal', '$log', 'periodHelper', PeriodCtrl])
		.controller('ModalPeriodCtrl', ['$scope', '$modalInstance', '$log', 'intervalType', 'periodService', 'periodHelper', ModalPeriodCtrl])

	/**
	 * @Description
	 * The controller of the modal for adding periodic operation
	 */
	function ModalPeriodCtrl($scope, $modalInstance, $log, intervalType, periodService, periodHelper) {
		$scope.intervalType = intervalType

		/**
		 * @Description
		 * Compute the repeat value from the end date
		 */
		$scope.computeRepeatDate = function() {
			var begin = moment($scope.periodTmp.dateBegin)
			var end = moment($scope.periodTmp.dateEnd)
			if (end.isBefore(begin)) {
				// error
			} else {
				var diff = end.diff(begin, 'days')
				var repeat = Math.round(diff / $scope.periodTmp.intervalType.value)
				$scope.periodTmp.nbRepeat = repeat
			}
		}

		/**
		 * @Description
		 * Manage click on the infinite checkbox
		 */
		$scope.setInfinite = function() {

			// Need by the form validation
			if ($scope.periodTmp.isInfinite) {
				$scope.periodTmp.nbRepeat = 1
				$scope.computeDateRepeat()
			}

			// if($scope.periodTmp.isInifinite){
			// 	$scope.periodTmp.nbRepeat = -1

			// 	$scope.periodTmp.dateEnd = undefined
			// }else{
			// 	$scope.periodTmp.nbRepeat = 1
			// 	$scope.computeDateRepeat()
			// }
		}

		/**
		 * @Description
		 * Compute the end date from the repeat value
		 */
		$scope.computeDateRepeat = function() {
			var begin = moment($scope.periodTmp.dateBegin)
			var repeat = $scope.periodTmp.nbRepeat
			var interval = $scope.periodTmp.intervalType.value

			// var end = begin.clone().add(interval*repeat, 'days')
			var end = begin.clone().add(repeat, $scope.periodTmp.intervalType.code)

			$scope.periodTmp.dateEnd = end.toDate()
		}

		/**
		 * @Description
		 * Reset the form of adding
		 */
		function resetAddForm() {
			// $scope.periodTmp = {
			// 	name: 'Test',
			// 	dateBegin: new Date(2015, 1, 13),
			// 	dateEnd: new Date(2015, 5, 13),
			// 	nbRepeat: 4,
			// 	step: 1,
			// 	intervalType: intervalType[2],
			// 	amount: 52
			// }
			$scope.periodTmp = {
				name: '',
				dateBegin: undefined,
				dateEnd: undefined,
				nbRepeat: undefined,
				step: 1,
				intervalType: intervalType[2],
				amount: undefined,
				isInfinite: false
			}
		}

		/**
		 * @Description
		 * Cancel the adding and close the modal
		 */
		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		}

		/**
		 * @Description
		 * Submit the form and close the modal
		 * @Param {Boolean} True if the form is valdid
		 */
		$scope.submitForm = function(isValid) {
			// console.log('submitForm '+isValid)
			// check to make sure the form is completely valid
			if (isValid) {

				var tmp = getCleanForm()

				periodService.add(tmp).$promise.then(function() {
					// refresh()
					resetAddForm()
					$modalInstance.close();
				})
			}

		}

		/**
		 * @Description
		 * Clean the form data to make it coherent
		 * @Return {Object} The clean data of the form
		 */
		function getCleanForm() {
			var res = jQuery.extend(true, {}, $scope.periodTmp);
			res.intervalType = res.intervalType.code
			if (res.isInfinite) {
				res.nbRepeat = -1
				res.dateEnd = undefined
			}
			return res
		}

		/**
		 * @Description
		 * Prepare the form data to do the projection
		 */
		function prepareProjection() {

			// $log.info($scope.periodForm.$valid)
			// $log.info($scope.periodForm)
			// $log.info($scope.projection)	
			// $log.info(getCleanForm())	

			if ($scope.periodForm.$valid && $scope.periodForm.$dirty) {
				$scope.projection = periodHelper.genProjection(getCleanForm())
			} else {
				$scope.projection = undefined
			}
		}

		resetAddForm()


		// Watchers for the projection
		$scope.$watch('periodTmp.intervalType', prepareProjection)
		$scope.$watch('periodTmp.step', prepareProjection)
		$scope.$watch('periodTmp.dateBegin', prepareProjection)
		$scope.$watch('periodTmp.isInfinite', prepareProjection)
		$scope.$watch('periodTmp.dateEnd', prepareProjection)
		$scope.$watch('periodTmp.nbRepeat', prepareProjection)
		$scope.$watch('periodTmp.amount', prepareProjection)
	}

	/**
	 * @Description
	 * The controller of the periodic operation
	 */
	function PeriodCtrl($scope, periodService, $modal, $log, periodHelper) {

		// TODO Put in shared place
		var intervalType = [{
			type: 'day',
			value: 1,
			code: 'd'
		}, {
			type: 'week',
			value: 7,
			code: 'w'
		}, {
			type: 'month',
			value: 30,
			code: 'M'
		}, {
			type: 'year',
			value: 365,
			code: 'Y'
		}]
		$scope.intervalType = intervalType

		/**
		 * @Description
		 * Open the modal for adding periodic operation
		 */
		$scope.openAdd = function() {

			var modalInstance = $modal.open({
				templateUrl: 'periodModalContent.html',
				controller: 'ModalPeriodCtrl',
				// size: 'sm',
				resolve: {
					intervalType: function() {
						return $scope.intervalType;
					}
				}
			});

			modalInstance.result.then(function(selectedItem) {
				refresh()
			}, function() {
				$log.info('Modal dismissed at: ' + new Date());
			});
		};



		/**
		 * @Description
		 * Search the real operation made from the period operation
		 * @Param {Object} The period operation from to find
		 */
		$scope.getLinkedOperation = function(period) {
			// TODO
		}

		$scope.makeProjection = function(period) {
			$scope.isProjection = !$scope.isProjection
			$scope.projection = periodHelper.genProjection(period)
		}



		/**
		 * @Description
		 * Remove periodic operation from the data model and refresh the page
		 * @Param {Object} The period operation to remove
		 */
		$scope.remove = function(period) {
			periodService.remove(period._id)
			refresh()
		}

		/**
		 * @Description
		 * Refresh the page
		 */
		function refresh() {
			// console.log(periodService.getAll())
			periodService.getAll().$promise.then(function(periods) {
				// console.log(periods)
				$.each(periods, function(k, period) {
					if (period.nbRepeat !== -1) {
						periods[k].dateEnd = periodHelper.computeEndDate(period)
					}

					// console.log(period)
				})
				$scope.periods = periods
			})

		}

		// Controller initialisation
		refresh()
	}

})();