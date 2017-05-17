
var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope){	
	alert("Hello World");
	$scope.myDocuments = getAllFilesFromFolder("myDocuments");		//not implemented yet
	alert("bye");
});
