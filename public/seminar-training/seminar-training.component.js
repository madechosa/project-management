angular.
  module('seminarTraining').
  component('seminarTraining', {
    templateUrl: 'seminar-training/seminar-training.template.html',
    controller: ['$scope','$http', '$routeParams',
      function seminarTraining( $scope, $http, $location) {
		   var self = this;
		   console.log("xxxx seminar");
		   
		  $scope.cancel = function() {
		  console.log('Pam');
		  console.log('yyyy');
		  var data = $scope.$$childHead.empseminar;
		  console.log(data);
		  $http.post('/projects/seminar',data).then(function successCallback(response){
			console.log(data);
			},
			function errorCallback(response){
			console.log('error');
			});
		  
		  }
		  $scope.seminar = [{id: 'choice1'}]; 
   
			$scope.addNewSeminar = function() { 
			var newItemNo = $scope.seminar.length+1; 
			$scope.seminar.push({'id':'choice'+newItemNo}); 
		  }; 
     
			$scope.removeSeminar = function() { 
			var lastItem = $scope.seminar.length-1; 
			$scope.seminar.splice(lastItem); 
		  };
		  
		 
		   
		  
		 
		 
//		  console.log("routeParams:" + $routeParams.projectId);
//		  $http.get('/projects/' + $routeParams.projectId).then(function(response) {
//			 console.log(response.data);
//			 self.projects = response.data; 
		}]
  });