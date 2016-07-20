angular.
  module('pmApp').
  config(['$locationProvider' ,'$routeProvider', 
    function config($locationProvider, $routeProvider) {
	  console.log('app.config');
	  console.log($routeProvider);
	  console.log($locationProvider);
			
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/projects/summary', {
		template: '<project-detail></project-detail>'
        }).
		when('/projects/areas', {
          template: '<areas-special></areas-special>'
        }).
		when('/projects/education', {
          template: '<education-training></education-training>'
        }).
		when('/projects/career', {
          template: '<career-synopsis></career-synopsis>'
        }).
		when('/projects/view', {
          template: '<view-proj></view-proj>'
        }).
		when('/projects/exp', {
          template: '<exp-proj></exp-proj>'
        }).
		when('/wsor/register', {
          template: '<project-registration></project-registration>'
        }).
		when('/init', {
          template: '<project-login></project-login>'
        }).
        otherwise('/init');
    }
	]);
	
angular.
  module('pmApp').run(function($rootScope, $cookies, $location) {
	  
  $rootScope.$on('$routeChangeStart', function(next, current) { 
	var scempid = $cookies.get('scempid');
	if (scempid==null) {
		console.log('user:'+scempid);
		$location.path('/init');
	} else {
		if ($location.path=='init') {
			$location.path('/projects/view');
		}
	}
  }); 
  
});


  
  