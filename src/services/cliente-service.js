(function(){
    'use strict';

    angular
        .module('app')
        .factory('clienteService', clienteService)

    function clienteService($http){

        return {
            getList: function getList(successCallback, errorCallback){
                $http.get('http://localhost:3000/clientes').then(successCallback, errorCallback);
            }
        }

        
    }

}());