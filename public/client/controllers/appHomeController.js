var appHomeController = angular.module('appHomeController', []);

appHomeController.controller('HomeController', ['$scope', function($scope){
	$scope.person = 'gulsen';
}]);