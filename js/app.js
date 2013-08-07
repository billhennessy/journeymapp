'use strict';


// Declare app level module which depends on filters, and services
angular.module('journeyMapp', ['mongoJourney', 'mongoExperience', 'ui', 'components', 'filters']).
  config(['$routeProvider', function($routeProvider) {
       $routeProvider.
      when('/', {templateUrl:'partials/welcome.html'}).
	  when('/journey', {controller:ListCtrl, templateUrl:'partials/journey.html'}).
	  when('/journey/new', {controller:CreateCtrl, templateUrl:'partials/journey-detail.html'}).
      when('/journey/:journeyId', {controller:EditCtrl, templateUrl:'partials/journey-detail.html'}).
      when('/journey/new', {controller:CreateCtrl, templateUrl:'partials/journey-detail.html'}).
	     when('/experience/:id', {templateUrl:'partials/experience.html'}).
      otherwise({redirectTo:'/'});
  }]);
