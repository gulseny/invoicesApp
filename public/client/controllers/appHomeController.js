var appHomeController = angular.module('appHomeController', []);

appHomeController.controller('HomeController', ['$scope', '$location', function($scope, $location){
	$scope.popInvoice = function(){
		$location.path('/createInvoice');
	};
}]);