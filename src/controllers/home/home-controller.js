(function(){
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController)

    function homeController($scope, $location){
        $location.url("/cliente");
    }

}());