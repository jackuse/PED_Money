
(function() {
    'use strict';

    angular
        .module('controllers')
        .controller('OperationController', ['$scope', 'OperationResource', function($scope, OperationResource) {




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


            var test = {
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


            OperationResource.add(test);

            OperationResource.getAll().$promise.then(function(operations){
                console.log(operations);
            })


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
