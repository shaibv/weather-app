(function () {

    var compName = 'mainView',
        templateUrl = 'app/main-view/main-view.html';


    angular
        .module('myApp')
        .component(compName, {
            templateUrl: templateUrl,
            controller: ctrl,
            controllerAs: 'vm'
        });

    ctrl.$inject = [
        'app/main-view/weather.srv'
    ];

    function ctrl(weatherService) {

        var vm = this;
        vm.getMenCity = getMenCity;
        vm.getWomenCity = getWomenCity;
        vm.getAlienCity = getAlienCity;
        vm.selectAlien = selectAlien;
        vm.active = null;
        init();


        function init() {
            weatherService.getAllCities();


        }


        function selectAlien() {
            vm.active = 'alien';
        }

        function getWomenCity() {
            vm.active = 'female';
            getCityByWeather(22, 50);
        }

        function getMenCity() {
            vm.active = 'male';
            getCityByWeather(21, 50);
        }

        function getAlienCity(){
            if (vm.custom.temp && vm.custom.humitity){
                getCityByWeather(vm.custom.temp, vm.custom.humidity);
            }
        }

        function getCityByWeather(temp, humidity) {
            vm.waiting = true;
            weatherService.findBestCity(temp, humidity).then(function (result) {
                vm.waiting = false;
                vm.data = result;
            });

        }
    }


})();

//angular.module('myApp.view1', ['ngRoute'])
//
//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/view1', {
//    templateUrl: 'view1/view1.html',
//    controller: 'View1Ctrl'
//  });
//}])
//
//.controller('View1Ctrl', [function() {
//
//}]);