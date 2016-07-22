angular.
  module('basicInfo').
  component('basicInfo', {
    templateUrl: 'basic-info/basic-info.template.html',
    controller: ['$scope', '$http', '$location', 
      function BasicInfoController($scope, $http, $location) {
		  var self = this;
		  console.log("xxxx basiconfo");
		  //console.log("routeParams:" + $routeParams.projectId);
		  $scope.submit = function() {
			console.log('yyyy');
			var data = $scope.empbasic;
			console.log(data);
			$http.post('/projects/basic', data).then(function successCallback(response) {
			 console.log(data);
			 },
			 function errorCallback(response){
			 console.log('error');
		  });
		
		} 
		
		$scope.cancel = function() {
			console.log('Jen');
			console.log('yyyy');
			var data = $scope.empbasic;
			console.log(data);
			$http.post('/projects/basic', data).then(function successCallback(response) {
			 console.log(data);
			 },
			 function errorCallback(response){
			 console.log('error');
		  });
		
		} 
		}]
		
  });
