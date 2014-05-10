var app = angular.module('MyApp', [
  'ngResource',
  'ngRoute',
  'ngTouch',
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.run(function() {
  // Display the native navigation bar with the title "Hello World!"
  steroids.view.navigationBar.show("Hello World!");

  // Set the WebView background color to white (effective on iOS only)
  steroids.view.setBackgroundColor("#FFFFFF");
});
