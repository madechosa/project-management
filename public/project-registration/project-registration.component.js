angular.
  module('projectRegistration').
  component('projectRegistration', {
    templateUrl: 'project-registration/project-registration.template.html',
    controller: ['$scope', '$http', 
      function ProjectRegistrationController($scope, $http) {
		  var self = this;
		  //console.log("routeParams:" + $routeParams.projectId);
		  $http.get('/wsor/register').then(function(response) {
			 console.log('xxxx');
			 //console.log(response.data);
			 //self.projects = response.data; 
		  });
		  // $scope.clickBtnSubmit = function() {
		  $scope.submit = function() {
			console.log('yyyy');
			var data = $scope.employee; 
			console.log(data);
			$http.post('/wsor/register', data).then(function successCallback(response) {
				console.log('eh di ok');
			}, function errorCallback(response) {
				console.log('di ok');
			});
		  }
		}]
  });
