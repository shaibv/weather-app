'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.version'
]).
config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
  console.log('conf');
}]);
