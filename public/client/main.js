var app = angular.module('invoices', ['appHomeController']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		controller: 'HomeController',
		templateUrl: "client/views/home.html"
	}).otherwise({
		redirectTo: '/'
	});
}]);
