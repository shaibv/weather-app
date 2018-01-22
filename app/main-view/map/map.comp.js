(function () {

    var compName = 'gmap',
        templateUrl = 'main-view/map/map.html';


    angular
        .module('myApp')
        .component(compName, {
            templateUrl: templateUrl,
            controller: ctrl,
            controllerAs: 'vm'
        });

    ctrl.$inject = [];

    function ctrl(weatherService) {

        var vm = this;

        function init() {
            window.city = "Tel Aviv"


        }

    }


})();

