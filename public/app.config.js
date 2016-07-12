angular.
  module('pmApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
		console.log("here");
	  console.log($routeProvider);
	  console.log($locationProvider);
			
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/projects/:projectId', {
          template: '<project-detail></project-detail>'
        }).
        otherwise('/index');
    }
  ]);
