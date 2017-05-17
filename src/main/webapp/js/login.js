
	var mainApp = angular.module("mainApp", [ 'ngRoute' ]);

	mainApp.controller('loginController', function($scope, $location, $window) {
		$scope.login = function() {
			if (($scope.login.password == "root") && ($scope.login.userName == "root")) {
				$window.location.href = "http://localhost:8080/document";
			} else {
				alert($scope.login.userName);
			}
		};
	});