angular.
  module('projectDetail').
  component('educationTraining', {
    templateUrl: 'project-dashboard/html/project-education.template/project-education.template.html',
    controller: ['$routeParams', 
      function ProjectDetailController($http, $routeParams) {
		  var self = this;
		  console.log("routeParams:" + $routeParams.projectId);
		  $http.get('/projects/' + $routeParams.projectId).then(function(response) {
			 console.log(response.data);
			 self.projects = response.data; 
		  });
		  this.parts = resume;
		  
		  
		}]
		
		
  });
