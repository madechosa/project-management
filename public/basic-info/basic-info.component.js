angular.
  module('basicInfo').
  component('basicInfo', {
    templateUrl: 'basic-info/basic-info.template.html',
    controller: ['$scope', '$http', '$location', '$cookies',
      function BasicInfoController($scope, $http, $location, $cookies) {
		  var self = this;
		  console.log("xxxx basiconfo");
		  //console.log("routeParams:" + $routeParams.projectId);
		  $scope.submit = function() {
			console.log('yyyy');
			var data = $scope.empbasic;
			data.id = $cookies.get('sckey');
			console.log(data);
			$http.post('/projects/basic', data).then(function successCallback(response) {
			 console.log(data);
			 },
			 function errorCallback(response){
			 console.log('error');
		  });
		
		} 
		
		$scope.cancel = function() {
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
