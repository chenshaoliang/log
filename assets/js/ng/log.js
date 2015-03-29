var logIndex = angular.module('logIndex', [
    'ngRoute',  'bookStoreCtrls'
]);

logIndex.config(function($routeProvider) {
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
