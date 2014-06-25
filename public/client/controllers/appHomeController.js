var appHomeController = angular.module('appHomeController', []);

appHomeController.controller('HomeController', ['$scope', '$location', function($scope, $location){
	//brings up the invoice view
	$scope.popInvoice = function(){
		$location.path('/createInvoice');
	};
}]);