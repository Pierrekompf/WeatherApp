document.addEventListener('deviceready', function () {
    //ici code au lancement de l'app
}, false);

var app = angular.module('app', []);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {templateUrl:'partials/home.html'})
        .when('/about', {templateUrl:'partials/about.html'})
        .otherwise({redirectTo:'/home'})
})