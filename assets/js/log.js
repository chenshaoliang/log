var logApp = angular.module('logApp', [
    'ngRoute',  'bookStoreCtrls'
]);

logApp.config(function($routeProvider) {
    $routeProvider.when('/search', {
        templateUrl: 'search-result.html',
        controller: 'HelloCtrl'
    }).when('/detail', {
        templateUrl: 'detail-log.html',
        controller: 'BookListCtrl'
    }).otherwise({
        redirectTo: '/detail'
    })
});
