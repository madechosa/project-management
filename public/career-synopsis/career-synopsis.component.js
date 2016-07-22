angular.
  module('careerSynopsis').
  component('careerSynopsis', {
    templateUrl: 'career-synopsis/career-synopsis.template.html',
    controller: ['$http', '$routeParams', '$scope', '$location', 
      function CareerSynopsisController($http, $routeParams, $scope, $location) {
		    var self = this;
		  $scope.career = [{id: 'choice1'}]; 
   
			$scope.addNewCareer = function() { 
			var newItemNo = $scope.career.length+1; 
			$scope.career.push({'id':'choice'+newItemNo}); 
		  }; 
     
			$scope.removeCareer = function() { 
			var lastItem = $scope.career.length-1; 
			$scope.career.splice(lastItem); 
		  };
		  
		  $scope.submit = function() {
			console.log('yyyy');
			var data = $scope.$$childHead.careersy;
			console.log(data);
			$http.post('/projects/career', data).then(function successCallback(response) {
			 console.log(data);
			 },
			 function errorCallback(response){
			 console.log('error');
		  });
		
		} 
		
		
		
		$scope.cancel = function() {
			console.log('Jen');
			console.log('yyyy');
			var data = $scope.career;
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