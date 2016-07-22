angular.
  module('pmApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
		console.log("here");
	  console.log($routeProvider);
	  console.log($locationProvider);
			
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/projects/basic', {
		template: '<basic-info></basic-info>'
        }). 
		//when('/projects/qualifications', {
		//template: '<project-qualifications></project-qualifications>'
       // }).
		when('/projects/summary', {
		template: '<project-detail></project-detail>'
        }).
		when('/projects/areas', {
          template: '<areas-special></areas-special>'
        }).
		when('/projects/seminar', {
          template: '<seminar-training></seminar-training>'
        }).
		when('/projects/career', {
          template: '<career-synopsis></career-synopsis>'
        }).
		when('/projects/experience', {
          template: '<project-experience></project-experience>'
        }).
		when('/wsor/register', {
          template: '<project-registration></project-registration>'
        }).
		when('/init', {
          template: '<project-login></project-login>'
        }).
        otherwise('/index');
    }
  ]);

    angular.
  module('pmApp').
controller('mainController', function($scope){
	
	$scope.loggedIN = function(){
       $scope.logged = true;
	};

});
  