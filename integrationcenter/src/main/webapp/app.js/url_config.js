 "use strict";
  var app = angular.module("urlConfig", ["ngRoute", "ngGrid"]);
  app.service('CONFIG', function($location) {
	        console.log("config.js :: app.service :: Refering urls")
	        var Url = {
		              'projectAnalysis_url': 'http://${local.load_blncr_ip}:8007',
		              'dashboard_url': '',
		              'codeReview_url': 'http://${local.load_blncr_ip}:8001',
		              'Deployment_url': 'http://${local.load_blncr_ip}:8010',
		              'onboarding_url': 'http://${local.load_blncr_ip}:8008',
		              'estimation_url': 'http://${local.load_blncr_ip}:8003',
		              'apiSpecs_url': 'http://${local.load_blncr_ip}:8004',
		              'integrationcenter_url': 'http://${local.load_blncr_ip}:8080',
		              'specAnalyzer_url': 'http://${local.load_blncr_ip}:8006',
		              'inception_url': 'http://${local.load_blncr_ip}:8989',
		              'logout_url': '',
		              'migrationcenter_url': 'http://${local.load_blncr_ip}:8877'
	          };
	          return Url;
  });
