(function () {


    angular.module('myApp').config(config);

    config.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        '$urlMatcherFactoryProvider',

    ];

    function config($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
         console.log('states');
        $urlMatcherFactoryProvider.strictMode(false);

        $urlRouterProvider.otherwise(function ($injector, $location) {

                return "/v";

        });

        $stateProvider.state('root', {

            url: '/',
            template:'<view1></view1>'
        });

    }

})();
