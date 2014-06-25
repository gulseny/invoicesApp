var appInvoiceController = angular.module('appInvoiceController', []);

appInvoiceController.controller('InvoiceController', ['$scope', '$location', function($scope, $location){
	//initial invoice object - gets updated with user input into text areas
	$scope.invoice = {
		invoiceNum: 10,
		invoiceDate: '6/24/2014',
		customerName: 'Hello World Inc.',
		customerAddress: '1 Main St Palo Alto, CA 94303',
		companyName: 'SteelBrick Holdings Inc.',
		companyAddress: '228 Hamilton Ave Palo Alto, CA 94301',
	};


	// produced and passed by the Product Controller once the user selects all the products to be included in the invoice
	$scope.invoiceItems = [
			{
			id: 1,
			name: 'test1',
			description: 'testing1 continued',
			other: 'test1',
			qty: 1,
			cost: 100,
			checked: false
		},
		{
			id: 2,
			name: 'test2',
			description: 'testing2 continued',
			other: 'test2',
			qty: 1,
			cost: 50,
			checked: false
		},
		{
			id: 3,
			name: 'test3',
			description: 'testing3 continued',
			other: 'test3',
			qty: 1,
			cost: 80,
			checked: false
		}
	];

	//calculates tax rate based on customer state
	$scope.taxRate = function(state){};

	//calculates shipping & handling rate based on customer zipcode
	$scope.shRate = function(zipcode){};

	//updates invoice subtotal, taxes, s&h, and grand total based on qty, cost, & tax/s&h rates
	$scope.updateTotal = function(){};

	//redirects to product selection view
	$scope.addToCart = function(){
		$location.path('/selectProduct');
	};

	// saves the invoice to the database and redirects to the beginning of the invoice creation cycle
	$scope.save = function(){
		//bring up a modal to confirm final invoice with a visual of the final invoice
		//save the invoice and return to home page
		$location.path('/');
	};
}]);