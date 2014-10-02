var app = angular.module('form', []);
app.controller('FormCtrl', function($scope) {
	$scope.cars = ['bmw', 'audi', 'volvo'];
	$scope.formData = {};
	$scope.regex = {};
	$scope.regex.onlyChar = /^[a-zA-Z]+$/;
	$scope.regex.password = /(?=^.{6,}$)(?=.*\d)(?=.+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

	$scope.sendForm = function() {
		if ($scope.testForm.$valid) {
			$scope.formString = JSON.stringify($scope.formData);
			$scope.testForm.$setPristine(true);
		}
	};

});