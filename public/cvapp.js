(function(){
	var app = angular.module('cv',[]);
	
	app.controller('CvController', function($scope){
		this.account = name;
		this.parts = resume;
		
		this.showdashboard1 = function(){
			this.dashboard = true;
			this.dashboard2 = false;
			this.dashboard3 = false;				
			this.dashboard4 = false;				
			this.dashboard5 = false;				
		};
		this.showdashboard2 = function(){
			this.dashboard = false;
			this.dashboard2 = true;	
			this.dashboard3 = false;
			this.dashboard4 = false;
			this.dashboard5 = false;
		};
		this.showdashboard3 = function(){
			this.dashboard = false;
			this.dashboard2 = false;	
			this.dashboard3 = true;	
			this.dashboard4 = false;	
			this.dashboard5 = false;	
		};
		this.showdashboard4 = function(){
			this.dashboard3 = false;	
			this.dashboard = false;
			this.dashboard2 = false;	
			this.dashboard4 = true;	
			this.dashboard5 = false;	
		};
		this.showdashboard5 = function(){
			this.dashboard3 = false;	
			this.dashboard = false;
			this.dashboard2 = false;
			this.dashboard4 = false;			
			this.dashboard5 = true;	
		};
		
	});
	
		var name = {
			user: 'Joseph Exala',
		};
		
		var resume = [
		{
			part: "Summary of Qualifications",	},
			{
			part: "Areas of Specialization",	},
			{
			part: "Education and Training",	},
			{
			part: "Career Synopsis",	},
			{
			part: "Project Experience",	}
			
		];

		
})();