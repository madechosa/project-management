angular.
  module('projectLogin').
  component('projectLogin', {
    templateUrl: 'project-login/project-login.template.html',
    controller: ['$scope', '$http', '$location', '$cookies',
      function projectLoginController($scope, $http, $location, $cookies) {
		  var self = this;
			
			
		  //console.log("routeParams:" + $routeParams.projectId);
		  $http.get('/init').then(function(response) {
			 console.log('xxxx');
			 //console.log(response.data);
			 //self.projects = response.data;
			 if (response.data!=null) {
				$scope.errorMessage = 'xxx';
			 } 
		  });
		  // $scope.clickBtnSubmit = function() {
		  $scope.submit = function() {
			console.log('yyyy');

			$http.get('/init/login', {params:{"emp_id": $scope.employee.emp_id, "password": $scope.employee.password}}).then(function(response) {
				console.log('eh di ok loginsss');
				console.log(response.data);
				var dataObj = response.data;
				if(dataObj != '1') {
					cookieFunc(dataObj);
				}
				/* else {
					console.log('incorrect user/pass');
					//showAlert($event);
					$location.path('/init/login');
				}
				*/
				self.projects = response.data; 
			});

		  }
		  $scope.register = function() {
			//$scope.navbar = false;
			console.log('dito tau register');
			$location.path('/wsor/register');
			//$scope.$apply();
		  }
		  
		  var cookieFunc = function(dataObj) {
			  // Retrieving a cookie
			  var favoriteCookie = $cookies.get('scempid');
			  // Setting a cookie
			  $cookies.put('scempid', dataObj.firstname);
				$cookies.put('scname', dataObj.emp_id);
			  $location.path('/projects/summary');
			}
		}]
  });
