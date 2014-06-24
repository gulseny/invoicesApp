var app = angular.module('invoices', ['appHomeController', 'appInvoiceController']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		controller: 'HomeController',
		templateUrl: "client/views/home.html"
	}).when('/createInvoice', {
		controller: 'InvoiceController',
		templateUrl: "client/views/invoice.html"
	}).otherwise({
		redirectTo: '/'
	});
}]);
