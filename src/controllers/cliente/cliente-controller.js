(function(){
    'use strict';

    angular
        .module('app')
        .controller('clienteController', clienteController)

    function clienteController($scope, clienteService){
        var vm = $scope;
        
        clienteService.getList(function (data) {
            vm.json = data.data;
        });

        init();

        function init(){
        }

    }

}());