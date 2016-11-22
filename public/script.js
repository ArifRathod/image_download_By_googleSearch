var scotchApp = angular.module('imageGallery', ['ngRoute','ui.bootstrap','angularUtils.directives.dirPagination','ngDialog']);
var TABroute= "HTTS";
scotchApp.config(function($routeProvider,$locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })
        .when('/list', {
            templateUrl : 'pages/list.html',
            controller  : 'listController'
        })
        .when('/gallery', {
            templateUrl : 'pages/gallery.html',
            controller  : 'galleryController'
        })
        
        .otherwise({
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        });
});




