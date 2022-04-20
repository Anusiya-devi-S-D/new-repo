"use strict";
var app = angular.module("urlConfig", ["ngRoute", "ngGrid"]);
app.service('CONFIG', function($location) {
       console.log("config.js :: app.service :: Refering urls")
       var Url = {
              'projectAnalysis_url': 'http://34.68.80.54:8007',
              'dashboard_url': '',
              'codeReview_url': 'http://34.68.80.54:8001',
              'Deployment_url': 'http://34.68.80.54:8010',
              'onboarding_url': 'http://34.68.80.54:8008',
              'estimation_url': 'http://34.68.80.54:8003',
              'apiSpecs_url': 'http://34.68.80.54:8004',
              'integrationcenter_url': 'http://34.68.80.54:8080',
              'specAnalyzer_url': 'http://34.68.80.54:8006',
              'inception_url': 'http://34.68.80.54:8989',
              'logout_url': '',
              'migrationcenter_url': 'http://34.68.80.54:8877'
         };
         return Url;
});

