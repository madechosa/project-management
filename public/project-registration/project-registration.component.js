angular.
  module('projectRegistration').
  component('projectRegistration', {
    templateUrl: 'project-registration/project-registration.template.html',
    controller: ['$scope', '$http', '$location', '$timeout',
      function ProjectRegistrationController($scope, $http, $location, $timeout) {
		  var self = this;
		  $http.get('/wsor/register').then(function(response) {
			 console.log('xxxx'); 
		  });
		  
		  $scope.submit = function() {
				console.log('yyyy');
				var data = $scope.employee; 
				console.log(data);
				$http.post('/wsor/register', data).then(function(response) {
					if (response.data.result == '1') {
						$scope.msg = 
						'<div class="alert alert-danger col-md-12" role="alert"><strong>Oops!!</strong> Something wrong, please try again later.</div>';
						;
						login;
					} else {
						$scope.msg = 
						'<div class="alert alert-success col-md-12" role="alert"><strong>Yay!!</strong> You have successfully registered. <br> Redirecting to login page in 5 seconds..</div>'
						;
					$timeout(login, 5000);
					}
				});
		  }
		  
		  var login = function() {
			  $location.path('/init');
		  };

		  $scope.cancel = function() {
			  login;
		  }
		}]
  });
