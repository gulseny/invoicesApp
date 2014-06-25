var app = angular.module('invoices', ['appHomeController', 'appInvoiceController', 'appProductController']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		controller: 'HomeController',
		templateUrl: "client/views/home.html"
	}).when('/createInvoice', {
		controller: 'InvoiceController',
		templateUrl: "client/views/invoice.html"
	}).when('/selectProduct',{
		controller: 'ProductController',
		templateUrl: "client/views/product.html"
	}).otherwise({
		redirectTo: '/'
	});
}]);
