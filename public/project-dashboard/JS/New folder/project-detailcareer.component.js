angular.
  module('projectDetail').
  component('careerSynopsis', {
    templateUrl: 'project-dashboard/html/project-detail.template/project-detail.template.html',
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
  
