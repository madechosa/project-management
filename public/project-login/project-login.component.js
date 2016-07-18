angular.
  module('projectLogin').
  component('projectLogin', {
    templateUrl: 'project-login/project-login.template.html',
    controller: ['$scope', '$http', '$location',
      function projectLoginController($scope, $http, $location) {
		  var self = this;
		  //console.log("routeParams:" + $routeParams.projectId);
		  $http.get('/init').then(function(response) {
			 console.log('xxxx');
			 //console.log(response.data);
			 //self.projects = response.data; 
		  });
		  // $scope.clickBtnSubmit = function() {
		  $scope.submit = function() {
			console.log('yyyy');

			$http.get('/init/login', {params:{"emp_id": $scope.employee.emp_id, "password": $scope.employee.password}}).then(function(response) {
				console.log('eh di ok login');
				console.log(response.data);
				self.projects = response.data; 
			});

		  }
		  $scope.register = function() {
			console.log('dito tau register');
			$location.path('/wsor/register');
			//$scope.$apply();
		  }
		}]
  });
