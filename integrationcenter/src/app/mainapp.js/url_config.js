"use strict";
var app = angular.module("urlConfig", ["ngRoute", "ngGrid"]);
app.service('CONFIG', function($location) {
       console.log("config.js :: app.service :: Refering urls")
       var Url = {
              'projectAnalysis_url': 'http://35.232.126.56:8007',
              'dashboard_url': '',
              'codeReview_url': 'http://35.232.126.56:8001',
              'Deployment_url': 'http://35.232.126.56:8010',
              'onboarding_url': 'http://35.232.126.56:8008',
              'estimation_url': 'http://35.232.126.56:8003',
              'apiSpecs_url': 'http://35.232.126.56:8004',
              'integrationcenter_url': 'http://35.232.126.56:8080',
              'specAnalyzer_url': 'http://35.232.126.56:8006',
              'inception_url': 'http://35.232.126.56:8989',
              'logout_url': '',
              'migrationcenter_url': 'http://35.232.126.56:8877'
         };
         return Url;
});

