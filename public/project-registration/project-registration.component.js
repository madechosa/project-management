angular.
  module('projectRegistration').
  component('projectRegistration', {
    templateUrl: 'project-registration/project-registration.template.html',
    controller: ['$scope', '$http', '$location',
      function ProjectRegistrationController($scope, $http, $location) {
		  var self = this;
		  $http.get('/wsor/register').then(function(response) {

			 console.log('xxxx'); 
		  });
		  
		  $scope.submit = function() {
				console.log('yyyy');
				var data = $scope.employee; 
				console.log(data);
				$http.post('/wsor/register', data).then(function successCallback(response) {
					//$location.path('/init').search('msg',response.data);
					$location.path('/init');
				}, function errorCallback(response) {
					$location.path('/init');
				});
		  }

		  $scope.cancel = function() {
				$location.path('/init');
		  }
		}]
  });
