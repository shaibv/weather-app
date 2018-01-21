(function () {

    var compName = 'view1',
        templateUrl = 'view1/view1.html';


    angular
        .module('myApp')
        .component(compName, {
            templateUrl: templateUrl,
            controller: ctrl,
            controllerAs: 'vm'
        });

    ctrl.$inject = [


    ];

    function ctrl(weatherService) {

        var vm = this;

        function init() {
           vm.city = "Tel Aviv"


        }

    }


})();