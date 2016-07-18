angular.
  module('careerSynopsis').
  component('careerSynopsis', {
    templateUrl: 'career-synopsis/career-synopsis.template.html',
    controller: ['$http', '$routeParams', 
      function CareerSynopsisController($http, $routeParams) {
		  console.log("here2");
		  var self = this;
		  console.log("routeParams:" + $routeParams.projectId);
//		  $http.get('/projects/' + $routeParams.projectId).then(function(response) {
//			 console.log(response.data);
//			 self.projects = response.data; 
//		  });
		}]
  });
