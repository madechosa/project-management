angular.
  module('projectExperience').
  component('projectExperience', {
    templateUrl: 'project-experience/project-experience.template.html',
    controller: ['$http', '$routeParams', '$scope', 
      function ProjectExperienceController($http, $routeParams, $scope) {
		  var self = this;
		  $scope.experience = [{id: 'choice1'}]; 
   
			$scope.addNewExperience = function() { 
			var newItemNo = $scope.experience.length+1; 
			$scope.experience.push({'id':'choice'+newItemNo}); 
		  }; 
     
			$scope.removeExperience = function() { 
			var lastItem = $scope.experience.length-1; 
			$scope.experience.splice(lastItem); 
		  };
		  
		  $scope.submit = function() {
			console.log('yyyy');
			var data = $scope.$$childHead.empexperience;
			console.log(data);
			$http.post('/projects/experience', data).then(function successCallback(response) {
			 console.log(data);
			 },
			 function errorCallback(response){
			 console.log('error');
		  });
		
		} 
		
		
		
		$scope.cancel = function() {
			console.log('Jen');
			console.log('yyyy');
			var data = $scope.experience;
			console.log(data);
			$http.post('/projects/experience', data).then(function successCallback(response) {
			 console.log(data);
			 },
			 function errorCallback(response){
			 console.log('error');
		  });
		
		} 
		  
		}]
  });
  
