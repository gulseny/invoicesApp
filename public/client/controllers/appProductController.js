var appProductController = angular.module('appProductController', []);

appProductController.controller('ProductController', ['$scope', '$location', function($scope, $location){

	// list of products fetched
	$scope.products = [
		{
			id: 1,
			name: 'test1',
			description: 'testing1 continued',
			other: 'test1',
			cost: '$100',
			checked: false
		},
		{
			id: 2,
			name: 'test2',
			description: 'testing2 continued',
			other: 'test2',
			cost: '$100',
			checked: false
		},
		{
			id: 3,
			name: 'test3',
			description: 'testing3 continued',
			other: 'test3',
			cost: '$100',
			checked: false
		}
	];

	// fetches the products from the database and lists them as a table on the product selection view
	$scope.fetchProducts = function(){
		//update the products object
	};

	// provides a list of checked items to be passed into the Invoice Controller
	$scope.checkedItems = function(){
		var checkedItems = [];
		angular.forEach($scope.products, function(product, index){
			if(product.checked){
				checkedItems.push(product.name);
			}
		});
		return checkedItems;
	};

	$scope.select = function(){
		$location.path('/createInvoice');
	};
}]);