angular.module('todo', ['ngRoute'], function($routeProvider) {
  $routeProvider
  .when('/', {
    redirectTo: "all-lists"
  })
  .when('/all-lists', {
    templateUrl: 'views/all-lists.html'
  })
});
