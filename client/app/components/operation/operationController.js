
(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('OperationController', ['$scope', 'OperationResource', function($scope, OperationResource) {

            var op1 = {
                value: -50,
                thirdParty: "Auchan",
                description: "Règlement des courses",
                type: "Chèque",
                checked: false,
                dateOperation: "20/01/2015",
                datePrelevement: "25/01/2015",
                categoryId: "54684654dqs",
                subOperations: []
            }

            var op2 = {
                value: 100,
                thirdParty: "Maman",
                description: "Argent de poche",
                type: "Virement",
                checked: true,
                dateOperation: "01/01/2015",
                datePrelevement: "12/01/2015",
                categoryId: "eza5484654dqs",
                subOperations: []
            }


            OperationResource.add(op1)
            OperationResource.add(op2)

            var getOperations = function() {
                OperationResource.getAll().$promise.then(function(operations){
                    $scope.operations = operations

                    $scope.solde = 0

                    for(var i = 0; i < operations.length; i++) {
                        $scope.solde += operations[i].value
                    }

                    console.log($scope.solde)
                })
            }

            getOperations()
            


            $scope.deleteOperation = function(idOperation) {
                OperationResource.remove(idOperation).$promise.then(function(){
                    console.log("Delete success")
                    getOperations()
                })
            }


        }]);










    /*function OperationController($scope) {

        $scope.operations = [
            {
                value: -50,
                thirdParty: "Auchan",
                description: "Règlement des courses",
                type: "Chèque",
                checked: false,
                dateOperation: "20/01/2015",
                datePrelevement: "25/01/2015",
                categoryId: "54684654dqs",
                subOperations: []
            },
            {
                value: 100,
                thirdParty: "Maman",
                description: "Argent de poche",
                type: "Virement",
                checked: true,
                dateOperation: "01/01/2015",
                datePrelevement: "12/01/2015",
                categoryId: "eza5484654dqs",
                subOperations: []
            }
        ]

    }*/

})();
