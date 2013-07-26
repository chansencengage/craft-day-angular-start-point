(function() {

    var module = angular.module('ContactBuckets', ['ContactDataModule']);

    module.controller('ContactController', ['$scope', 'ContactDataService',
            function($scope, contactDataService) {

        $scope.contacts = contactDataService.getAll();
    }])

})();