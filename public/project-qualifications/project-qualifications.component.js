angular.
  module('projectQualifications').
  component('projectQualifications', {
    templateUrl: 'project-qualifications/project-qualifications.template.html',
    controller: ['$http', '$routeParams', '$scope', 
      function QualificationsController($http, $routeParams, $scope) {
		  
		  $scope.qualifications = [{id: 'choice1'}]; 
   
			$scope.addNewQualification = function() { 
			var newItemNo = $scope.qualifications.length+1; 
			$scope.qualifications.push({'id':'choice'+newItemNo}); 
		  }; 
     
			$scope.removeQualification = function() { 
			var lastItem = $scope.qualifications.length-1; 
			$scope.qualifications.splice(lastItem); 
		  };
		  
		}]
  });
