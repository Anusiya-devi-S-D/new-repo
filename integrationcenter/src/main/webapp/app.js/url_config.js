"use strict";
var app = angular.module("urlConfig", ["ngRoute", "ngGrid"]);
app.service('CONFIG', function($location) {
       console.log("config.js :: app.service :: Refering urls")
       var Url = {
              'projectAnalysis_url': 'http://34.122.94.213:8007',
              'dashboard_url': '',
              'codeReview_url': 'http://34.122.94.213:8001',
              'Deployment_url': 'http://34.122.94.213:8010',
              'onboarding_url': 'http://34.122.94.213:8008',
              'estimation_url': 'http://34.122.94.213:8003',
              'apiSpecs_url': 'http://34.122.94.213:8004',
              'integrationcenter_url': 'http://34.122.94.213:8080',
              'specAnalyzer_url': 'http://34.122.94.213:8006',
              'inception_url': 'http://34.122.94.213:8989',
              'logout_url': '',
              'migrationcenter_url': 'http://34.122.94.213:8877'
         };
         return Url;
});

