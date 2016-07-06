angular
        .module('app').config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'src/screens/home/index.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/cliente', {
                templateUrl : 'src/screens/cliente/index.html',
                controller  : 'clienteController'
            }).otherwise({
                redirect: '/'
            });
});